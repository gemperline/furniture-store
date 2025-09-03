import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { BannerActions } from './BannerActions';
import { IBannerAction } from '../../../models/Global/Global';
import { useTranslation } from 'react-i18next';
import { isNullOrUndefined } from '../../../helpers/objectHelpers';

const useStyles = makeStyles()({
  root: {
    width: '100%',
    padding: '12px 6px',
    display: 'flex',
    alignItems: 'center',
  },
  subRoot: {
    width: '100%',
  },
  rootWarning: {
    backgroundColor: '#FEF6EE',
    border: '1px solid #FFA22E',
    justifyContent:'left',
    '& #custom-banner-text': {
      color: '#663B01',
    },
  },
  rootError: {
    backgroundColor: '#ffd9cc',
    '& #custom-banner-text': {
      color: '#611a16',
    },
  },
  icon: {
    marginLeft: '6px',
    marginRight: '12px',
  },
  text: {
    fontSize: 14,
    alignSelf: 'center',
  },
  action: {
    marginLeft: '12px',
  },
});

export const Banner = ({
  message,
  severity = 'warning',
  justify = 'flex-start',
  action,
}: {
  message: string;
  severity?: 'warning' | 'error';
  justify?: 'flex-start' | 'center' | 'flex-end';
  action?: IBannerAction;
}) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      container
      justifyContent={justify}
      direction={'row'}
      alignContent="center"
      className={cx(classes.root, {
        [classes.rootWarning]: severity === 'warning',
        [classes.rootError]: severity === 'error',
      })}
      wrap="nowrap"
    >
      <Grid item>
        <Grid container className={classes.subRoot} wrap="nowrap">
          <Grid item>
            {severity === 'warning' && <WarningIcon  className={classes.icon} />}
            {severity === 'error' && <ErrorOutlineIcon style={{ color: 'red' }} className={classes.icon} />}
          </Grid>
          <Grid id="custom-banner-text" item className={classes.text}>
            {t(message)}
          </Grid>
        </Grid>
      </Grid>
      {!isNullOrUndefined(action) && (
        <Grid item className={classes.action}>
          <BannerActions action={action!} />
        </Grid>
      )}
    </Grid>
  );
};
