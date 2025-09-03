/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import { makeStyles } from 'tss-react/mui';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Grid, CircularProgress, IconButton, Paper, Divider } from '@mui/material';
import styledComponent from 'styled-components';
import Draggable from 'react-draggable';
import _ from 'lodash';
import { Banner } from '../Common/Banner/CustomBanner';
import { CustomTooltip, CustomTooltipProps } from '../Common/Tooltips/CustomTooltip';
import UndoIcon from '@mui/material/IconButton';

const useGenericDialogStyles = makeStyles()(theme => ({
  filledTertiaryButton: {
    backgroundColor: '#8E9195',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#75787B',
    },
    marginLeft: '16px',
  },
  nonTertiaryButton: {
    marginLeft: '16px',
  },
  transparentButton: {
    backgroundColor: '#FFF',
    color: '#333333',
    paddingRight: 0,
  },
  circularProgressLight: {
    color: '#FFF',
  },
  // title
  titleSmall: {
    padding: '30px 30px 20px 30px',
  },
  titleLarge: {
    padding: '30px 30px 20px 30px',
  },
  dialogTitleStyleWhite: {
    color: '#000000',
    padding: '30px 30px 20px 30px',
  },
  dialogTitleStyleBlue: {
    color: '#fff',
    // backgroundColor: theme.palette.system.lightBlue,
  },
  leadingIcon: {
    alignSelf: 'center',
    paddingRight: '12px',
    display: 'flex',
  },
  titleCloseButton: {
    padding: '6px',
    marginBottom: '-6px',
    marginTop: '-8px',
    marginRight: '-10px',
  },
  titleCloseButtonDark: {
    color: '#888888',
  },
  titleCloseButtonLight: {
    color: '#FFFFFF',
  },
  // dialog actions
  dialogActionsRoot: {
    padding: '16px 24px',
  },
  // dialog content
  dialogContentRoot: {
    padding: '0px 30px 20px 30px',
  },
  dialogContentRootNoActions: {
    padding: '9px 24px 24px 24px',
  },
  draggable: {
    cursor: 'grab',
  },
  divider: {
    borderRight: '2px solid',
    paddingTop: '35px',
    color: '#ffffff',
    opacity: '30%',
  },
}));

interface IGenericDialogPosition {
  x: number;
  y: number;
}

/**
 * New color for dialog buttons
 */
type Tertiary = 'tertiary';

export interface IGenericDialogButton extends Omit<ButtonProps, 'color'> {
  text?: string;
  loading?: boolean;
  hidden?: boolean;
  /** Custom renderer for the button to allow for different types of controls */
  renderer?: (props: IGenericDialogButton) => any;
  color?: Tertiary | 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  useDialogOnCloseEvent?: boolean;
  'data-testid'?: string;
  tooltipProps?: CustomTooltipProps;
}

/**
 * Dialog button to use in dialogActions
 * @param props Button props which extends Material-UI Button
 * @param text Text to display in the button
 * @param loading Shows progress indicator in button
 * @param hidden Prevents the button from being rendered
 * @param renderer Custom renderer for the button
 * @param color Color to use for the button. Extends PropTypes.Color with tertiary
 * @param useDialogOnCloseEvent Uses the dialog's onClose event when clicking instead of the Button's onClick event
 * @param data-testid test
 */
export const GenericDialogButton = ({
  text,
  loading,
  variant = 'text',
  color = 'primary',
  disableElevation = true,
  tooltipProps,
  ...props
}: IGenericDialogButton) => {
  const { classes, cx } = useGenericDialogStyles();

  return (
    <>
      {text !== '' ? (
        <CustomTooltip
          standardMargin
          {...tooltipProps}
          disabled={!tooltipProps || tooltipProps?.disabled}
          tooltipContent={tooltipProps?.tooltipContent ?? <div />}
        >
          <Button
            disableRipple
            disableFocusRipple
            color={color !== 'tertiary' ? color : undefined}
            className={cx({
              [classes.transparentButton]: variant === 'text',
              [classes.filledTertiaryButton]: variant === 'contained' && color === 'tertiary',
              [classes.nonTertiaryButton]: variant === 'contained' && color !== 'tertiary',
            })}
            variant={variant}
            disableElevation={disableElevation}
            data-testid="generic-dialog-button-id"
            {...props}
          >
            {loading ? (
              <Grid container spacing={1} wrap="nowrap" alignItems="center" alignContent="center">
                <Grid item>
                  <Progress
                    size="15px"
                    className={cx({ [classes.circularProgressLight]: variant === 'contained' && !props.disabled })}
                  />
                </Grid>
                <Grid item>{text}</Grid>
              </Grid>
            ) : (
              text
            )}
          </Button>
        </CustomTooltip>
      ) : null}
    </>
  );
};

interface GenericDialogContentProps extends DialogContentProps {
  content?: any;
  variant?: 'text';
  error?: boolean;
  errorMessage?: string;
  errorSeverity?: 'error' | 'warning';
}

interface GenericDialogTitleProps extends DialogTitleProps {
  text: string;
  leadingIcon?: any;
  // display close button on right side of title
  closeButton?: boolean;
  expandable?: boolean;
  onExpandChange?: (expanded: boolean) => void;
  onClose?: (event) => void;
  size?: 'small' | 'large';
  undoButton?: boolean;
  onUndoClick?: (event) => void;
  disableUndo?: boolean;
}

interface GenericDialogProps extends DialogProps {
  dialogActions?: IGenericDialogButton[];
  dialogTitleProps?: GenericDialogTitleProps;
  dialogContentProps?: GenericDialogContentProps;
  dialogActionsProps?: DialogActionsProps;
  variant?: 'blue' | 'white';
  draggable?: boolean;
  onClose?: (event, reason?) => void;
  // Position of the dialog when draggable = true
  position?: IGenericDialogPosition;
}

/**
 * Generic dialog that allows complete customization. Extends Material-UI {@link DialogProps Dialog}
 * @param dialogActions Array of {@link IGenericDialogButton IGenericDialogButton}, which extends Material-UI {@link ButtonProps Button}
 * @param dialogTitleProps Extends Material-UI {@link DialogTitleProps DialogTitle} with AMN style included
 * @param dialogContentProps Extends Material-UI {@link DialogContentProps DialogContent}
 * @param dialogActionsProps Extends Material-UI {@link DialogActionsProps DialogActions}
 * @param variant Style of the dialog, with a blue DialogTitle or a white DialogTitle
 * @param onClose Callback when the dialog is closed
 */
export const GenericDialog = ({
  dialogActions,
  dialogTitleProps,
  dialogContentProps,
  dialogActionsProps,
  variant = 'white',
  draggable,
  onClose,
  position,
  ...props
}: GenericDialogProps) => {
  const { classes, cx } = useGenericDialogStyles();
  const [fullScreen, setfullScreen] = React.useState<boolean>(false);
  const [_position, _setPosition] = React.useState<IGenericDialogPosition>({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = React.useState<IGenericDialogPosition>({ x: 0, y: 0 });

  const _onClose = (event, reason?) => {
    onClose?.(event, reason);
  };

  React.useEffect(() => {
    if (position) _setPosition(position);
  }, [position]);

  React.useEffect(() => {
    dialogTitleProps?.onExpandChange?.(fullScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullScreen]);

  /**
   * Draggable component to use with DialogPaperComponent if draggable = true
   */
  const Drag = React.useCallback(
    dragProps => {
      const onDragEnd = (p, data) => {
        _setPosition({ x: data.x, y: data.y });
      };
      return (
        <Draggable
          bounds="parent"
          position={_position}
          onStop={onDragEnd}
          defaultPosition={{ x: 0, y: 0 }}
          handle="#generic-dialog-title-text"
          cancel={'[class*="MuiDialogContent-root"]'}
        >
          <Paper {...dragProps} />
        </Draggable>
      );
    },
    [_position],
  );

  return (
    <Dialog onClose={_onClose} PaperComponent={draggable ? Drag : undefined} fullScreen={fullScreen} {...props}>
      {dialogTitleProps && (
        <DialogTitle
          id="generic-dialog-title"
          {...dialogTitleProps}
          classes={{
            ...dialogTitleProps.classes,
            root: cx(dialogTitleProps.classes?.root, {
              [classes.titleSmall]: dialogTitleProps.size === 'small',
              [classes.titleLarge]: dialogTitleProps.size === 'large',
            }),
          }}
          className={cx(
            {
              [classes.dialogTitleStyleBlue]: variant === 'blue',
              [classes.dialogTitleStyleWhite]: variant === 'white',
            },
            dialogTitleProps.className,
          )}
        >
          <div style={{ width: '100%', display: 'flex' }}>
            {dialogTitleProps.leadingIcon && <div className={classes.leadingIcon}>{dialogTitleProps.leadingIcon}</div>}
            <div
              id="generic-dialog-title-text"
              style={{ flexGrow: 1 }}
              className={cx({ [classes.draggable]: draggable })}
            >
              {dialogTitleProps.text}
            </div>
            {(dialogTitleProps.closeButton || dialogTitleProps.expandable || dialogTitleProps.undoButton) && (
              <div style={{ textAlign: 'end' }}>
                <Grid container wrap="nowrap" spacing={2}>
                  {dialogTitleProps.undoButton && (
                    <>
                      <Grid item>
                        <UndoIcon
                          title={'Undo'}
                          className={cx(classes.titleCloseButton, {
                            [classes.titleCloseButtonDark]: variant === 'white',
                            [classes.titleCloseButtonLight]: variant === 'blue',
                          })}
                          onClick={event => {
                            dialogTitleProps.onUndoClick?.(event);
                          }}
                          disabled={dialogTitleProps.disableUndo}
                        >
                          {/* {dialogTitleProps.disableUndo ? (
                            <img src={undoIconDisabled} style={{ marginRight: '3px' }} />
                          ) : (
                            <img src={UndoIcon} style={{ height: '1em' }} />
                          )} */}
                        </UndoIcon>
                      </Grid>
                      <Grid item>
                        <Divider orientation="vertical" classes={{ root: classes.divider }} flexItem />
                      </Grid>
                    </>
                  )}
                  {dialogTitleProps.expandable && (
                    <Grid item>
                      <IconButton
                        // eslint-disable-next-line i18next/no-literal-string
                        title={fullScreen ? 'Standard-screen' : 'Full-screen'}
                        className={cx(classes.titleCloseButton, {
                          [classes.titleCloseButtonDark]: variant === 'white',
                          [classes.titleCloseButtonLight]: variant === 'blue',
                        })}
                        onClick={event => {
                          setOriginalPosition(_.cloneDeep(_position));
                          if (fullScreen) {
                            _setPosition(originalPosition);
                            setfullScreen(false);
                          } else {
                            _setPosition({ x: 0, y: 0 });
                            setfullScreen(true);
                          }
                        }}
                        data-testid="generic-dialog-title-close-button-id"
                        size="large"
                      >
                        {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                      </IconButton>
                    </Grid>
                  )}
                  {dialogTitleProps.closeButton && (
                    <Grid item>
                      <IconButton
                        // eslint-disable-next-line i18next/no-literal-string
                        title="Close the dialog"
                        className={cx(classes.titleCloseButton, {
                          [classes.titleCloseButtonDark]: variant === 'white',
                          [classes.titleCloseButtonLight]: variant === 'blue',
                        })}
                        onClick={event => {
                          _onClose(event);
                          dialogTitleProps.onClose?.(event);
                        }}
                        data-testid="generic-dialog-title-close-button-id"
                        size="large"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </div>
            )}
          </div>
        </DialogTitle>
      )}
      {dialogContentProps?.error && (
        <div style={{ paddingBottom: '12px' }}>
          <Banner
            message={dialogContentProps?.errorMessage ?? 'An error has occurred'}
            severity={dialogContentProps?.errorSeverity ?? 'error'}
          />
        </div>
      )}
      {(dialogContentProps || props.children) && (
        <DialogContent
          {...dialogContentProps}
          classes={{
            ...dialogContentProps?.classes,
            root: cx(
              {
                [classes.dialogContentRoot]: (dialogActions?.length ?? 0) > 0,
                [classes.dialogContentRootNoActions]: !dialogActions?.length,
              },
              dialogContentProps?.classes?.root,
            ),
          }}
        >
          {dialogContentProps?.variant === 'text' && (
            <DialogContentText>{dialogContentProps.content || props.children}</DialogContentText>
          )}
          {dialogContentProps?.variant !== 'text' && (dialogContentProps?.content || props.children)}
        </DialogContent>
      )}
      {dialogActions && (
        <DialogActions
          {...dialogActionsProps}
          classes={{
            ...dialogActionsProps?.classes,
            root: cx(classes.dialogActionsRoot, dialogActionsProps?.classes?.root),
          }}
        >
          {dialogActions.map((button, index) => (
            <div key={`generic-dialog-button-${index}`}>
              {!button.hidden &&
                (button.renderer ? (
                  button.renderer(button)
                ) : (
                  <GenericDialogButton {...button} onClick={button.useDialogOnCloseEvent ? onClose : button.onClick} />
                ))}
            </div>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

const Progress = styledComponent(CircularProgress)`
  margin-top: 2px;
  margin-bottom: -2px;
  padding: 0;
`;
