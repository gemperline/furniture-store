import { Box, Grid, Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles()(() => ({
  main: {
    display: 'flex',
    padding: '6px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 2,
    overflow: 'hidden',
    padding: 0,
    '&:hover': {
      opacity: 0.5,
      textDecoration: 'none',
    },
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'grey',
  },
  textContainerInner: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '8px 12px',
    textAlign: 'center',
    border: '2px solid white',
    letterSpacing: '2px',
  },
  textContainerOuter: {
    minWidth: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '8px',
  },
}));

export const DepartmentTile = ({
  name,
  description,
  image,
  altText,
  path,
}: {
  [key: string]: any;
  name: string;
  description: string;
  image: string;
  altText: string;
  path: string;
}) => {
  const { classes } = useStyles();
  const history = useHistory();

  return (
    <Grid item className={classes.main}>
        <Button 
            className={classes.button} 
            onClick={() => history.push(path)} 
            style={{ backgroundImage: !!image ? `url(${image})` : 'none' }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
        >
            <Box className={classes.textContainerOuter}>
                <Box className={classes.textContainerInner}>
                    <Typography variant="body1" color="black">
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Button>
    </Grid>
  );
};
