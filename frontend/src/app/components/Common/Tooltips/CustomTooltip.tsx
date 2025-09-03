import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from 'tss-react/mui';
import styledComponent from 'styled-components';

const useStyles = makeStyles()({
  customTooltip: {
    backgroundColor: '#ffffff',
    color: '#555555',
    opacity: 1,
    textAlign: 'left',
    font: '12px/30px Roboto',
    letterSpacing: '0px',
    boxShadow: '0px 3px 6px #00000029',
    border: '1px solid #E5E5E5',
    lineHeight: '1.5',
  },
  maxWidth: {
    maxWidth: 'none',
  },
  customArrow: {
    color: '#ffffff',
    opacity: 1,
    '&::before': {
      boxShadow: '0px 3px 6px #00000029',
      border: '1px solid #E5E5E5',
    },
  },
  tooltipPlacementBottom: {
    margin: '0px !important',
  },
  tooltopPlacementBottomStandard: {
    margin: '0px !important',
    marginTop: '10px !important',
  },
  gridContent: {
    color: '#006FB9 !important',
    fontSize: '0.875rem !important',
    fontWeight: '400 !important',
  },
  minContentPopper: {
    width: 'min-content',
    whiteSpace: 'pre',
  },
});

export interface CustomTooltipProps {
  // @deprecated. Use disableInteractive instead
  interactive?: any;
  disableInteractive?: boolean;
  open?: any;
  disabled?: boolean;
  tooltipContent: any;
  hideToolTip?: any;
  customToolTip?: string;
  customArrow?: string;
  tooltipPlacementBottom?: any;
  standardMargin?: boolean;
  placement?: any;
  contentStyle?: any;
  renderedFromGrid?: any;
  value?: any;
  children?: any;
  globalStyles?: any;
  disableMaxWidth?: boolean;
  popperProps?: any;
  arrow?: boolean;
  isInlineContent?: boolean;
  // No styles applied to content;
  isStandardContent?: boolean;
  onOpen?: any;
  classes?: {
    tooltip?: any
  }
  [x: string]: any;
}

export const CustomTooltip = (props: CustomTooltipProps) => {
  const { classes, cx } = useStyles();

  return <>
    {!props.disabled ? (
      <Tooltip
        disableInteractive={props.disableInteractive}
        open={props.open}
        title={props.tooltipContent}
        aria-label="tool-tip"
        disableHoverListener={props.hideToolTip ?? false}
        arrow={props.arrow ?? true}
        PopperProps={props.popperProps}
        onOpen={props.onOpen}
        classes={{
          tooltip: cx(!props.globalStyles ? classes.customTooltip : 'customGlobalTooltip', {
            [classes.maxWidth]: props.disableMaxWidth,
          }, props.classes?.tooltip),
          arrow: !props.globalStyles ? classes.customArrow : 'customGlobalArrow',
          tooltipPlacementBottom: props.tooltipPlacementBottom
            ? props.tooltipPlacementBottom
            : props.standardMargin
            ? classes.tooltopPlacementBottomStandard
            : classes.tooltipPlacementBottom,
          popper: cx({
            [classes.minContentPopper]: props.minContentPopper
          })
        }}
        placement={props.placement}
      >
        {props.isInlineContent === true ? (
          <ContentInline
            style={props.contentStyle}
            className={props.renderedFromGrid ? classes.gridContent : undefined}
          >
            {props.value || props.children}
          </ContentInline>
        ) : props.isStandardContent ? (
          <div>{props.value || props.children}</div>
        ) : (
          <Content style={props.contentStyle} className={props.renderedFromGrid ? classes.gridContent : undefined}>
            {props.value || props.children}
          </Content>
        )}
      </Tooltip>
    ) : (
      <>{props.value || props.children}</>
    )}
  </>;
};

const Content = styledComponent.div`
  text-align: start;
  color: #003e68;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

const ContentInline = styledComponent.span`
  text-align: start;
  color: #003e68;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;
