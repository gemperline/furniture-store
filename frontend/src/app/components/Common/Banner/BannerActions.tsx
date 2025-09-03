import { Button, Grid } from '@mui/material';
import { IBannerAction } from '../../../models/Global/Global';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

export const BannerActions = ({ action }: { action: IBannerAction }) => {
  return (
    <Grid container>
      {action === IBannerAction.refreshPage && (
        <Grid item>
          <RefreshButton />
        </Grid>
      )}
    </Grid>
  );
};

const RefreshButton = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const onClick = () => {
    history.push('./home');
  };
  return (
    <Button disableElevation color="primary" variant="contained" onClick={onClick}>
      'Refresh'
    </Button>
  );
};
