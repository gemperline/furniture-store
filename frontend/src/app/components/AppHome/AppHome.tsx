import { Grid, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  catalogReducer,
  catalogActions,
  catalogSliceKey,
} from 'app/Catalog/catalog.redux';
import { catalogSaga } from 'app/Catalog/catalog.saga';
import { HomePage } from 'app/layout/pages/HomePage';
import { theme } from 'styles/global-styles';

const useStyles = makeStyles()((theme) => ({
  pageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
}));

export enum HomeView {
  EXTERNAL_USER_LANDING = 'externalUserLanding',
}

export const AppHome: React.FC = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  // Dynamically inject catalog state + saga
  useInjectReducer({ key: catalogSliceKey, reducer: catalogReducer });
  useInjectSaga({ key: catalogSliceKey, saga: catalogSaga });

  // const { items, loading, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(catalogActions.getProducts());
  }, [dispatch]);

  return (
    <Grid className={classes.pageContainer}>
      <HomePage title={'External user view'} />
    </Grid>
  );
};
