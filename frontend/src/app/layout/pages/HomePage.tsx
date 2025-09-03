import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { DepartmentsSection } from 'app/components/Common/PageSections/Departments';
// import { LayoutGrid, LayoutGridItem } from '../LayoutGrid';
// import { CustomBackdrop } from 'app/components/Common/Backdrop/CustomBackdrop';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%', // Ensures it fills parent
    display: 'flex',
    flexDirection: 'column',
  },
  paperContainer: {
    flex: 1, // Allows it to expand and fill remaining space
  },
}));

export const HomePage = ({ title }: { title: string }) => {
  const { classes } = useStyles();

  return (
    // <Paper id="home-page-paper" className={classes.root}> {/* try removing Paper and wrapping with fragment <>...</>, then remove the HTML  */}
    <>
      <Header />
      <div className={classes.paperContainer}>
        <DepartmentsSection />
      </div>
    </>
    // </Paper>
  );
};
