import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navigation/Navigation';
import { Grid, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { keyframes } from 'tss-react';
import { useInjectReducer } from 'redux-injectors';
import { useSelector } from 'react-redux';
import { selectNavigationMenu } from '../components/Navigation/store/navigation.selectors';
// import { useInjectSaga } from 'utils/redux-injectors';
// import { Banner } from 'app/components/Common/Banner/CustomBanner';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    backgroundColor: '#F5F5F5',
    overflow: 'auto',
  },
  container: {
    minHeight: '100vh',
    flexWrap: 'nowrap',
  },
  layoutStatics: {
    position: 'fixed',
    zIndex: 1200,
  },
  sideNav: {
    zIndex: theme.zIndex.drawer + 2,
  },
  dashboard: {
    marginTop: '50px',
    width: '100%',
    height: '100%',
    // flexWrap: 'nowrap',
  },
  component: {
    width: 'inherit',
    maxHeight: '93vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  defaultNavigation: {
    paddingLeft: '0px',
  },
  navigation: {
    paddingLeft: '0px',
    animation: `${keyframes`
      100% {
          padding-left: ${OVERLAY_WIDTH}px
      }
      `} 150ms linear normal forwards`,
  },
  navigationCollapsed: {
    paddingLeft: `${OVERLAY_WIDTH}px`,
    animation: `${keyframes`
      100% {
          padding-left: 0px
      }
      `} 150ms linear normal forwards`,
  },
  banner: {
    margin: '0px 24px 0px 12px',
  },
}));

const NAV_HEIGHT = 60;
const OVERLAY_WIDTH = 125;

export const appComponentAccessId = 'app-component-access-id';

export const EnableAppScroll = () => {
  const application = document.getElementById(appComponentAccessId);
  if (application) application.classList.remove('disable-scroll');
};

export const DisableAppScroll = () => {
  const application = document.getElementById(appComponentAccessId);
  if (application) application.classList.add('disable-scroll');
};

export const Layout = props => {
  const { classes, cx } = useStyles();

  const { navigationExpanded } = useSelector(selectNavigationMenu);
  const { Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Grid container classes={{ root: classes.root, container: classes.container }} direction="row" spacing={0}>
          <Grid item className={cx(classes.layoutStatics, classes.sideNav)} style={{ height: NAV_HEIGHT }}>
            {/* <Navbar /> */}
          </Grid>
          <Grid
            item
            container
            direction="column"
            classes={{ container: classes.container }}
            style={{
              paddingTop: NAV_HEIGHT,
            }}
          >
            <Grid item className={classes.layoutStatics} style={{ width: '100%', height: `calc(100% - ${NAV_HEIGHT}px)` }}>
              <Header height="300px" />
            </Grid>
            <Grid
              item
              container
              direction="row"
              classes={{ container: classes.dashboard }}
              className={
                navigationExpanded === undefined
                  ? classes.defaultNavigation
                  : navigationExpanded
                  ? classes.navigation
                  : classes.navigationCollapsed
              }
            >
              {/* {globalBanner.open && (
                <Grid item xs={12} className={classes.banner}>
                  <Banner {...globalBanner} message={globalBanner.message ?? ''} />
                </Grid>
              )} */}
              <Grid xs={12} item id={appComponentAccessId} classes={{ root: classes.component }}>
                {/* HACK: Temporary hack for first render of grid component to prevent rerender
                Rendering a new grid for the first time within an already rendered page causes the entire page to rerender */}
                <div style={{ display: 'none' }}>
                  {/* <CustomGrid columns={[]} rows={[]} /> */}
                </div>
                <Component {...matchProps}></Component>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    />
  );
};
