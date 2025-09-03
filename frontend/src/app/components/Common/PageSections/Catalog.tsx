import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React, { useEffect, useState } from 'react';
import { ProductTile } from '../Product/ProductTile';
import { useTranslation } from 'react-i18next';
import GridViewIcon from '@mui/icons-material/GridView';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { theme } from 'styles/global-styles';
import { ColumnAmount, ProductTileVariant } from 'app/models/Product/product';
import { useDispatch, useSelector } from 'react-redux';
import { catalogActions } from 'app/Catalog/catalog.redux';
import { CircularProgress } from '@mui/material';
import { usePromiseTracker } from 'react-promise-tracker';
import { catalogTrackerKeys } from 'app/Catalog/catalog.saga';
import { productsSelector } from 'app/Catalog/catalog.selectors';

const useStyles = makeStyles()((theme) => ({
  main: {
    padding: '12px',
  },
  sectionHeader: {
    display: 'flex',
    width: '100%',
    margin: '12px 0px',
  },
  headerLeft: {
    flex: 2,
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    textDecoration: 'underline',
    textWrap: 'wrap',
    fontSize: '32px',
  },
  tilesWrapper: {
    // padding: '6px',
  },
  MuiCircularProgressRoot: {
    left: 'calc(50% - 20px)',
    position: 'absolute',
    top: 'calc(50% - 20px)',
    // Remove default color
    color: 'transparent',
    background: 'linear-gradient(orange, red)',
    WebkitMaskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskImage: 'radial-gradient(circle, black 100%, transparent 100%)',
    maskRepeat: 'no-repeat',
    maskSize: 'contain',
  },
}));

interface IBreakPointProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface IFilterProps {
  departmentId?: number;
}

export const CatalogSection = ({
  headerTitle,
  defaultFilters,
}: {
  headerTitle?: string;
  defaultFilters?: IFilterProps;
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { promiseInProgress: gettingProductsByDeptId } = usePromiseTracker({
    area: catalogTrackerKeys.GET_PRODUCTS_BY_DEPARTMENT_ID,
    delay: 0,
  });
  const { promiseInProgress: gettingAllProducts } = usePromiseTracker({
    area: catalogTrackerKeys.GET_ALL_PRODUCTS,
    delay: 0,
  });
  const [layoutSelection, setLayoutSelection] = useState<ColumnAmount>(
    ColumnAmount.LESS
  );
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [tileVariant, setTileVariant] = useState<ProductTileVariant>(
    ProductTileVariant.REGULAR
  );
  const [breakpoints, setBreakpoints] = useState<IBreakPointProps>({
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  });
  const products = useSelector(productsSelector);

  useEffect(() => {
    if (!defaultFilters) {
      dispatch(catalogActions.getProducts());
    } else if (defaultFilters.departmentId) {
      dispatch(
        catalogActions.getProductsByDepartmentId({
          departmentId: defaultFilters.departmentId,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (layoutSelection === ColumnAmount.LESS) {
      setBreakpoints({ xs: 12, sm: 12, md: 6, lg: 4 });
    } else if (layoutSelection === ColumnAmount.MORE) {
      setBreakpoints({ xs: 6, sm: 6, md: 4, lg: 3 });
    } else {
      setBreakpoints({ xs: 12, sm: 12, md: 6, lg: 4 });
    }

    if (isSmallScreen && layoutSelection === ColumnAmount.MORE) {
      setTileVariant(ProductTileVariant.CENTERED);
    } else {
      setTileVariant(ProductTileVariant.REGULAR);
    }
  }, [layoutSelection, isSmallScreen]);

  return (
    <Grid className={classes.main}>
      <Grid className={classes.sectionHeader}>
        <Grid className={classes.headerLeft}>
          <Typography className={classes.headerText}>{headerTitle}</Typography>
        </Grid>
        <Grid className={classes.headerRight}>
          <IconButton
            onClick={() => setLayoutSelection(ColumnAmount.LESS)}
            sx={{
              bgcolor:
                layoutSelection === ColumnAmount.LESS
                  ? 'lightgray'
                  : 'transparent',
              borderRadius: '50%',
              padding: '8px',
              '&:hover': { bgcolor: 'rgba(211, 211, 211, 0.7)' },
            }}
          >
            <CropSquareIcon
              sx={{
                fill: layoutSelection === ColumnAmount.LESS ? 'black' : 'gray',
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => setLayoutSelection(ColumnAmount.MORE)}
            sx={{
              marginLeft: '1px',
              bgcolor:
                layoutSelection === ColumnAmount.MORE
                  ? 'lightgray'
                  : 'transparent',
              borderRadius: '50%',
              padding: '8px',
              '&:hover': { bgcolor: 'rgba(211, 211, 211, 0.7)' },
            }}
          >
            <GridViewIcon
              sx={{
                fill: layoutSelection === ColumnAmount.MORE ? 'black' : 'gray',
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container className={classes.tilesWrapper} spacing={2}>
        {gettingProductsByDeptId || gettingAllProducts ? (
          <CircularProgress className={classes.MuiCircularProgressRoot} />
        ) : (
          products?.map((product) => (
            <Grid
              item
              key={product.id}
              xs={breakpoints?.xs}
              sm={breakpoints?.sm}
              md={breakpoints?.md}
              lg={breakpoints?.lg}
            >
              <ProductTile product={product} variant={tileVariant} />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};
