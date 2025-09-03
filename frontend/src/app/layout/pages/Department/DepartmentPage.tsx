import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Header/Header';
import { CatalogSection } from 'app/components/Common/PageSections/Catalog';
import {
  catalogActions,
  catalogReducer,
  catalogSliceKey,
} from 'app/Catalog/catalog.redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { catalogSaga } from 'app/Catalog/catalog.saga';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles()(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  paperContainer: {
    flex: 1,
    // overflowY: 'auto', // this causes the scroll to be on the Paper, not the body
  },
}));

export const DepartmentPage = ({
  title,
  departmentId,
}: {
  title: string;
  departmentId: number;
}) => {
  const { classes } = useStyles();
  useInjectReducer({ key: catalogSliceKey, reducer: catalogReducer });
  useInjectSaga({ key: catalogSliceKey, saga: catalogSaga });
  const dispatch = useDispatch();

  return (
    // <Paper id={`${title}-page-paper`} className={classes.main}><
    <>
      <Header />
      <div className={classes.paperContainer}>
        <CatalogSection headerTitle={title} defaultFilters={{ departmentId }} />
      </div>
    </>
    // </Paper>
  );
};
