import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import homeHeaderLivingRoom from '../../assets/images/chicLivingRoom3.png';

const useStyles = makeStyles()({
    imageContainer: {
        // maxWidth: '100%',
        // display: 'block',
        // height: 'auto',
    },
    image: {
        width: '100%',
    },
});

export const Header = (props) => {
    const { classes } = useStyles();
    return (
        <Grid container className={classes.imageContainer}>
            <img src={homeHeaderLivingRoom} alt="homeHeaderLivingRoom" className={classes.image} />
        </Grid>
    );
}