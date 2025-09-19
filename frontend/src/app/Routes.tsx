import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';
import { DepartmentPageLoadable } from './layout/pages/Department/DepartmentPage.loadable';
import { ProductPageLoadable } from './layout/pages/Product/ProductPage.loadable';
import { ShoppingCartPageLoadable } from './layout/pages/ShoppingCart/ShoppingCartPage.loadable';

// Private Route component can be used to protect routes that require authentication (e.g. user account page, admin page, etc.)
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AppHomeLoadable} />
      <Route
        exact
        path="/living-room"
        render={props => <DepartmentPageLoadable title="Living Room" departmentId={1} {...props} />}
      />
      <Route
        exact
        path="/furniture/:productId"
        render={props => <ProductPageLoadable id={+props.match.params.productId} {...props} />}
      />
      <Route exact path="/cart" render={props => <ShoppingCartPageLoadable />} />
      <Route exact path="/checkout" render={props => <h1>{'This is the checkout page'}</h1>} />

      {/* <Route path="/callback" element={Callback} /> */}
      {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}
      {/* <Layout element={PageNotFound} /> */}
    </Switch>
  );
};
