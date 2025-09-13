import React from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { makeStyles } from 'tss-react/mui';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  cartActions,
  cartSliceKey,
  cartReducer,
} from 'app/ShoppingCart/cart.redux';
import { useInjectReducer } from 'redux-injectors';

const useStyles = makeStyles<{ isSmallScreen: boolean }>()(
  (theme, { isSmallScreen }) => ({
    root: {
      padding: isSmallScreen ? '16px' : '32px',
    },
    cartItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
      marginBottom: '12px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    },
    itemDetails: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    itemName: {
      fontWeight: 600,
      fontSize: '16px',
    },
    itemPrice: {
      color: '#666',
      fontSize: '14px',
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    checkoutButton: {
      marginTop: '24px',
      height: '48px',
      border: '2px solid black',
      borderRadius: '50px',
      backgroundColor: 'transparent',
      minWidth: '200px',
      '&:hover': {
        backgroundColor: '#fc9003',
        color: '#fff',
        borderColor: '#fc9003',
      },
    },
  })
);

export const ShoppingCartPage = () => {
  useInjectReducer({ key: cartSliceKey, reducer: cartReducer });

  const dispatch = useDispatch();
  const history = useHistory();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const { classes } = useStyles({ isSmallScreen });

  const cartItems = useSelector((state: any) => state[cartSliceKey].items);

  const handleIncrement = (id: number) => {
    dispatch(cartActions.incrementQuantity({ id }));
  };

  const handleDecrement = (id: number) => {
    dispatch(cartActions.decrementQuantity({ id }));
  };

  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum + item.quantity * (item.salePrice || item.price),
    0
  );

  return (
    <Box className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map((item: any) => (
            <Box key={item.id} className={classes.cartItem}>
              <Box className={classes.itemDetails}>
                <Typography className={classes.itemName}>
                  {item.name}
                </Typography>
                <Typography className={classes.itemPrice}>
                  ${item.salePrice || item.price} x {item.quantity} = $
                  {(item.salePrice || item.price) * item.quantity}
                </Typography>
              </Box>
              <Box className={classes.quantityControls}>
                <IconButton onClick={() => handleDecrement(item.id)}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleIncrement(item.id)}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          ))}

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${total.toFixed(2)}
          </Typography>

          <Box display="flex" justifyContent="center">
            <Button
              className={classes.checkoutButton}
              onClick={() => history.push('/checkout')}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};