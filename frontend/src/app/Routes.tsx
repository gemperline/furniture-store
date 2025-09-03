import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { PageNotFound } from 'app/components/Common/PageNotFound';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './PrivateRoute';
// import { OptimizelyFlagsLoadable } from './components/Admin/OptimizelyFlags/OptimizelyFlags.loadable';
import { AppHomeLoadable } from './components/AppHome/AppHome.loadable';
import { DepartmentPageLoadable } from './layout/pages/Department/DepartmentPage.loadable';
import { ProductPageLoadable } from './layout/pages/Product/ProductPage.loadable';

// Private Route component can be used to protect routes that require authentication (e.g. user account page, admin page, etc.)
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AppHomeLoadable} />
      {/* Department Page, but do we need to specify exact path? Also, consider SEO - i.e. /living-room */}
      <Route
        exact
        path="/living-room"
        render={(props) => (
          <DepartmentPageLoadable
            title="Living Room"
            departmentId={1}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/furniture/:productId"
        render={(props) => (
          <ProductPageLoadable id={+props.match.params.productId} {...props} />
        )}
      />
      {/* <Route path="/callback" element={Callback} /> */}
      {/* <Route path="/silent_renew" element={<SilentRenew />} /> */}
      {/* <Layout element={PageNotFound} /> */}
    </Switch>
  );
};
