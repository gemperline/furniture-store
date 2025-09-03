import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    banner: {
      width: '100%',
      padding: '6px',
      display: 'flex',
      alignItems: 'center',
      color: '#FFF',
      backgroundColor: '#000',
      justifyContent: 'center',
    },
});

export const AdBanner = (props) => {
    const { classes } = useStyles();
    return (
        <Grid className={classes.banner}>
            {'This is the AdBanner'}
        </Grid>
    );
}