import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReviewStars } from '../../../components/Common/Product/ReviewStars';
import { theme } from 'styles/global-styles';
import { Carousel } from '../../../components/Common/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import {
  catalogActions,
  catalogReducer,
  catalogSliceKey,
} from 'app/Catalog/catalog.redux';
import { productSelector } from 'app/Catalog/catalog.selectors';
import { catalogSaga, catalogTrackerKeys } from 'app/Catalog/catalog.saga';
import { usePromiseTracker } from 'react-promise-tracker';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import StarIcon from '@mui/icons-material/Star';
import {
  cartActions,
  cartReducer,
  cartSliceKey,
} from 'app/ShoppingCart/cart.redux';

const useStyles = makeStyles<{ isSmallScreen }>()(
  (theme, { isSmallScreen }) => ({
    main: {
      padding: !isSmallScreen && '24px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
    },
    accordionSection: {
      '& .MuiAccordion-root.Mui-expanded': {
        margin: 0,
      },
      marginTop: theme.spacing(4),
    },
    MuiCircularProgressRoot: {
      left: 'calc(50% - 20px)',
      position: 'absolute',
      top: 'calc(50% - 20px)',
      color: 'transparent',
      background: 'linear-gradient(orange, red)',
      WebkitMaskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
      maskRepeat: 'no-repeat',
      maskSize: 'contain',
    },
    addToCartBtn: {
      height: '48px',
      border: '2px solid black',
      borderRadius: '50px',
      padding: '1px',
      backgroundColor: 'transparent',
      minWidth: '200px',
    },
    addToCartInner: {
      display: 'flex',
      margin: '2px',
      border: '2px solid #fc9003',
      borderRadius: '50px',
      height: 'calc(100% - 2px)',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      color: '#fc9003',
      fontWeight: 800,
      fontSize: '16px',
    },
    accordion: {
      '& .MuiAccordionSummary-root': {
        minHeight: 'inherit !important',
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 'inherit !important',
      },
    },
    accordionSummary: {
      '& .MuiAccordionSummary-content': {
        margin: '12px 0px !important',
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0px !important',
      },
    },
    rewiewCard: {
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      backgroundColor: '#fff',
      transition: 'box-shadow 0.2s ease-in-out',
      '&:hover': {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
  })
);

export const ProductPage = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  useInjectReducer({ key: catalogSliceKey, reducer: catalogReducer });
  useInjectSaga({ key: catalogSliceKey, saga: catalogSaga });
  useInjectReducer({ key: cartSliceKey, reducer: cartReducer });
  // useInjectSaga({ key: cartSliceKey, saga: cartSaga });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { classes } = useStyles({ isSmallScreen });
  const history = useHistory();

  const selectedProduct = useSelector(productSelector);
  const { promiseInProgress: gettingProductDetails } = usePromiseTracker({
    area: catalogTrackerKeys.GET_PRODUCT_BY_ID,
    delay: 0,
  });

  const [expanded, setExpanded] = useState<string | false>('description');
  const [scrollAfterExpand, setScrollAfterExpand] = useState(false);
  const reviewsAccordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    dispatch(catalogActions.getProductById({ id: +id }));
  }, []);

  useEffect(() => {
    if (!scrollAfterExpand || expanded !== 'reviews') return;

    const node = reviewsAccordionRef.current;
    if (!node) return;

    let lastHeight = node.offsetHeight;
    let timeout: number;

    const observer = new ResizeObserver(() => {
      const currentHeight = node.offsetHeight;
      if (currentHeight !== lastHeight) {
        lastHeight = currentHeight;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          node.scrollIntoView({ behavior: 'smooth' });
          setScrollAfterExpand(false);
        }, 150);
      }
    });

    observer.observe(node);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [expanded, scrollAfterExpand]);

  return (
    <Grid container className={classes.main}>
      {gettingProductDetails || !selectedProduct ? (
        <CircularProgress className={classes.MuiCircularProgressRoot} />
      ) : (
        <Grid item xs={12} md={6}>
          <Carousel images={selectedProduct.images} />
          <Grid item xs={12} md={6} className={classes.details}>
            <Typography variant="h4">{selectedProduct.name}</Typography>
            <Typography variant="h6">{selectedProduct.description}</Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Grid item xs={12} md={6}>
                <ReviewStars
                  rating={selectedProduct.averageRating}
                  reviewCount={selectedProduct.reviewCount}
                  onClick={() => {
                    if (expanded !== 'reviews') {
                      setExpanded('reviews');
                      setScrollAfterExpand(true);
                    } else {
                      const reviewsSection = document.querySelector(
                        '#reviews'
                      ) as HTMLElement;
                      reviewsSection?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    textDecoration:
                      selectedProduct.salePrice > 0 ? 'line-through' : 'none',
                  }}
                >
                  {`$${selectedProduct.price}`}
                </Typography>
                <Typography variant="h6" sx={{ display: 'flex' }}>
                  {selectedProduct.salePrice}
                </Typography>
              </Grid>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={'center'}>
              <Button
                variant="contained"
                className={classes.addToCartBtn}
                onClick={() => {
                  dispatch(
                    cartActions.addItem({
                      ...selectedProduct,
                    })
                  );
                }}
              >
                <Grid className={classes.addToCartInner}>Add to Cart</Grid>
              </Button>
            </Box>
          </Grid>

          <Box className={classes.accordionSection}>
            {selectedProduct.description.length > 0 && (
              <Accordion
                className={classes.accordion}
                expanded={expanded === 'description'}
                onChange={() =>
                  setExpanded(
                    expanded === 'description' ? false : 'description'
                  )
                }
              >
                <AccordionSummary
                  className={classes.accordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography variant="subtitle1">Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{selectedProduct.description}</Typography>
                </AccordionDetails>
              </Accordion>
            )}

            <Accordion
              className={classes.accordion}
              expanded={expanded === 'specifications'}
              onChange={() =>
                setExpanded(
                  expanded === 'specifications' ? false : 'specifications'
                )
              }
            >
              <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="subtitle1">Specifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in urna at nunc pretium laoreet. Donec dignissim
                  nisi in mi porta, at varius lacus tincidunt.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {selectedProduct.reviews?.length > 0 && (
              <Accordion
                ref={reviewsAccordionRef}
                className={classes.accordion}
                expanded={expanded === 'reviews'}
                onChange={() =>
                  setExpanded(expanded === 'reviews' ? false : 'reviews')
                }
              >
                <AccordionSummary
                  className={classes.accordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Box
                    id="reviews"
                    sx={{
                      display: 'flex',
                      width: '100%',
                      paddingRight: '12px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="subtitle1">
                      {selectedProduct.reviewCount}{' '}
                      {selectedProduct.reviewCount > 1 ? 'Reviews' : 'Review'}
                    </Typography>
                    {selectedProduct.averageRating > 0 && (
                      <Typography variant="subtitle1">
                        {(
                          Math.round(selectedProduct.averageRating * 10) / 10
                        ).toFixed(1)}{' '}
                        <StarIcon sx={{ fontSize: '14px', color: '#fc9003' }} />
                      </Typography>
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {selectedProduct.reviews.map((review) => (
                    <Box key={review.id} className={classes.rewiewCard}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          John Doe
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(review.createdUTC).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <ReviewStars
                        rating={review.rating}
                        totalStars={5}
                        starHeight="20px"
                      />
                      {review.title && (
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, marginTop: '4px' }}
                        >
                          {review.title}
                        </Typography>
                      )}
                      <Typography variant="body2" sx={{ color: '#444' }}>
                        {review.reviewText || review.reviewText}
                      </Typography>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};