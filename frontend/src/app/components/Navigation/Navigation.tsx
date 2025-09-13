import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Theme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigationMenu } from './store/navigation.selectors';
import { INavigation, navigationActions } from './store/navigation.redux';
import { keyframes } from 'tss-react';
import { PrivateComponent } from '../Common/PrivateComponent/PrivateComponent';
import { breadcrumbActions } from '../Common/BreadcrumbNavigation/BreadcrumbNavigation.redux';
import { useHistory } from 'react-router-dom';
import {
  cartItemsSelector,
  cartReducer,
  cartSliceKey,
} from 'app/ShoppingCart/cart.redux';
import { useInjectReducer } from 'redux-injectors';
import { theme } from 'styles/global-styles';

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
  to {
    max-height: 500px;
    opacity: 1;
    overflow: hidden;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
    overflow: hidden;
  }
  to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
`;

const useStyles = makeStyles<{ open: boolean }>()((theme: Theme, props) => ({
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    // height: !props.open ? '60px' : '200px', // not having a known height causes menu to show upon refresh
    position: 'fixed',
    top: 0,
    width: '100%',
    borderBottom: 'solid 2px #e76e49',
    zIndex: 1200,
    boxShadow: 'none',
  },
  navBar: {
    width: '100%',
    height: '60px',
    // boxShadow: props.open ? '0px 1px 6px #757575' : 'none',
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#FFF',
    fontSize: '24px',
  },
  listItem: {
    borderBottom: '1px solid #9b9b9b',
  },
  drawerCollapse: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  companyName: {
    justifyContent: 'center',
    display: 'flex',
    whiteSpace: 'nowrap',
    letterSpacing: '2px',
  },
  leftMenu: {
    display: 'flex',
  },
  rightMenu: {
    marginLeft: 'auto',
  },
  iconBtn: {
    padding: '12px',
  },
  navIcon: {
    background: 'none',
    zIndex: 2,
  },
  divider: {
    background: 'rgba(231,110,73,1)',
    height: '2px',
  },
  font: {
    letterSpacing: '1px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '16px !important',
    },
  },
  listWrapperExpanded: {
    width: 'auto',
    animation: `${keyframes`
        0% {
          width: auto;
        }
        100% {
          width: 181px;
        }
        `} 150ms linear 1 normal forwards`,
  },
  listWrapperCollapsed: {
    width: '181px',
    animation: `${keyframes`
        0% {
          width: 181px;
        }
        100% {
          width: auto;
        }
        `} 150ms linear 1 normal forwards`,
  },
  menuListExpanded: {
    // height: 'unset',
    display: 'contents',
    paddingBottom: '0px',
    animation: `${keyframes`
        1% {
          height: 100vh;
          padding-bottom: 50px;
        }
        100% {
          height: 100vh;
          padding-bottom: 50px;
        }
        `} 150ms linear 1 normal forwards`,
  },
  menuList: {
    animation: props.open
      ? `${slideDown} 300ms ease-in-out forwards`
      : `${slideUp} 300ms ease-in-out forwards`,
    overflow: 'hidden',
  },
  firstListItem: {
    position: 'relative',
    borderBottom: '1px solid #9b9b9b',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      boxShadow: 'inset 0 5px 5px -5px rgba(0, 0, 0, 0.8)',
    },
  },
  cartBadge: {
    width: 12,
    height: 12,
    minWidth: 12,
    borderRadius: '50%',
    top: 4,
    right: 4,
    translate: '-8px -2px',
    zIndex: 1,
  },
}));

export const Navbar = () => {
  useInjectReducer({ key: cartSliceKey, reducer: cartReducer });
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);
  const { classes, cx } = useStyles({ open });
  const { t } = useTranslation();
  const { navigationMenu, navigationExpanded, selectedMenu } =
    useSelector(selectNavigationMenu);
  const cartItems = useSelector(cartItemsSelector);

  const toggleMenuOpen = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (open) {
      //   setExpandSubMenu({});
      setOpen(false);
    }
  };

  const handleNavigate = (item) => {
    /**Reset action to remove existing page breadcrumbs */
    dispatch(breadcrumbActions.reset());
    // dispatch(globalSearchActions.setDrawerData({ open: false, data: undefined }));
    if (item.path) history.push(item.path);
    else if (item.pushState)
      window.history.pushState(
        null,
        '',
        `${window.location.pathname}${item.pushState}`
      );
  };

  const menuItemClicked = (menuItem: INavigation) => {
    if (!menuItem.disabled) {
      // const a = { ...expandSubMenu, [menuItem.key]: true };
      // setExpandSubMenu(a);
      // setNavigationExpandedByHover(false);
      // dispatch(navigationStickActions.expandNavigation(true));
      // dispatch(globalSearchActions.setShowPreferenceFilterDropdown(true));
      // if (!['recentHistory', 'settings'].includes(menuItem?.key))
      //   dispatch(navigationActions.setSelectedSubMenu(undefined));
      if (
        selectedMenu?.key !== menuItem.key &&
        !['recentHistory', 'settings'].includes(menuItem?.key)
      )
        dispatch(navigationActions.setSelectedMenu(menuItem));
      if (menuItem.key === 'home') {
        // dispatch(globalSearchActions.setSearchOptions(initialSearchAttributes));
        // setHomePage(menuItem.path, true); // use this to set home page based on user role
        // trackEvent({
        //   type: 'navigation',
        //   name: 'Home button clicked',
        // });
      }
      closeMenu();
      handleNavigate(menuItem);
    }
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <Paper
        classes={{
          root: `${classes.navMenu} ${
            open ? classes.drawer : classes.drawerCollapse
          }`,
        }}
      >
        <Grid className={classes.navBar}>
          <Grid className={classes.leftMenu}>
            <IconButton
              className={classes.iconBtn}
              onClick={toggleMenuOpen}
              aria-label="Menu"
            >
              {open ? (
                <CloseIcon className={classes.navIcon} />
              ) : (
                <MenuIcon className={classes.navIcon} />
              )}
            </IconButton>
          </Grid>
          <Grid
            className={classes.companyName}
            onClick={() => history.push('/')}
          >
            {'Modern Magic'}
          </Grid>
          <Grid className={classes.rightMenu}>
            <IconButton className={classes.iconBtn} aria-label="Shopping Cart">
              {cartItems.length > 0 ? (
                <Badge
                  variant="dot"
                  color="warning"
                  overlap="circular"
                  classes={{ badge: classes.cartBadge }}
                >
                  <ShoppingCartIcon className={classes.navIcon} />
                </Badge>
              ) : (
                <ShoppingCartIcon className={classes.navIcon} />
              )}
            </IconButton>

            <IconButton className={classes.iconBtn} aria-label="Account">
              <AccountCircleIcon className={classes.navIcon} />
            </IconButton>
          </Grid>
        </Grid>
        {/* {open && (
                  <div
                  style={{ overflow: 'hidden' }}
                  className={cx({
                    // [classes.listWrapperExpanded]: navigationExpanded,
                    [classes.listWrapperCollapsed]: !navigationExpanded,
                  })}
                > */}
        <Box className={classes.menuList}>
          <List
            id="global-nav-list"
            disablePadding
            sx={{ overflowY: 'auto' }}
            //   onMouseEnter={() => {
            //     if (!navigationExpanded) {
            //       toggleMenu();
            //       setNavigationExpandedByHover(true);
            //     }
            //   }}
            //   onMouseLeave={() => {
            //     if (navigationExpandedByHover) {
            //       setNavigationExpandedByHover(false);
            //       closeMenu();
            //     }
            //   }}
          >
            {navigationMenu.map((menuItem, index) => (
              <PrivateComponent key={index}>
                <NavMenuItem
                  menuItem={menuItem}
                  index={index}
                  open={open}
                  navigationExpanded={navigationExpanded}
                  menuItemClicked={menuItemClicked}
                />
              </PrivateComponent>
            ))}
          </List>
        </Box>
        {/* </div> */}
        {/* )} */}
      </Paper>
    </ClickAwayListener>
  );
};

const NavMenuItem = ({ open, ...props }) => {
  const { menuItem, index, navigationExpanded, menuItemClicked } = props;
  const { classes, cx } = useStyles({ open });
  const { t } = useTranslation();

  const handleListItemClick = () => {
    if (menuItem.clickable !== false) menuItemClicked(menuItem);
  };

  return (
    <ListItem
      classes={{
        root: index === 0 ? cx(classes.firstListItem) : cx(classes.listItem),
        // gutters: classes.listItemGutters,
      }}
      key={menuItem.tag}
      // className={cx({
      //   [classes.option]: !isMenuItemSelected && !isSubMenuSelected,
      //   [classes.optionSelected]: isMenuItemSelected || isSubMenuSelected,
      // })}
      onClick={handleListItemClick}
    >
      <Grid
        container
        wrap="nowrap"
        style={{ marginLeft: '0px', display: 'block' }}
      >
        <Grid item>
          <div
            id={`navigation-expandable-${index}`}
            // className={cx(classes.menuInner, classes.menuInnerCollapsed, classes.menuInnerExpanded, {
            //   [classes.menuItemSelected]: isMenuItemSelected,
            //   'navigation-expanded': navigationExpanded === true,
            //   'navigation-collapsed': navigationExpanded === false,
            // })}
          >
            <List
              disablePadding
              // className={classes.menuListInner}
              // style={{
              //   color: isMenuItemSelected || isSubMenuSelected ? colors.amnPurple : 'white',
              // }}
            >
              <ListItem
                // disabled={menuItem.disabled}
                disableGutters
                // className={cx(classes.menuItem, {
                //   [classes.menuItemClickable]: menuItem.clickable !== false,
                // })}
              >
                <ListItemText
                  primaryTypographyProps={{ className: classes.font }}
                >
                  {menuItem.tag}
                </ListItemText>
                {/* {menuItem.subMenu && (
                        <Box
                          onClick={() => {
                            props.expandCollapseSubMenu(menuItem);
                          }}
                        >
                          {expandSubMenu[menuItem.key] ? (
                            <ExpandLess
                              className={cx(classes.expandIcon, {
                                [classes.menuItemClickable]: !menuItem.disabled,
                              })}
                            />
                          ) : (
                            <ExpandMore
                              className={cx(classes.expandIcon, {
                                [classes.menuItemClickable]: !menuItem.disabled,
                              })}
                            />
                          )}
                        </Box>
                      )} */}
              </ListItem>
              {/* {menuItem.subMenu && (
                      <SubMenu
                        menuItem={menuItem}
                        expandSubMenu={expandSubMenu}
                        onExpand={props.expandCollapseSubMenu}
                        selectedMenu={selectedMenu}
                        selectedSubMenu={selectedSubMenu}
                        subMenuItemClicked={props.subMenuItemClicked}
                        level={0}
                      />
                    )} */}
            </List>
          </div>
        </Grid>
      </Grid>
    </ListItem>
  );
};