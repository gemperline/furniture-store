import { INavigationMenu } from '../app/components/Navigation/store/navigation.redux';
import { IBreadcrumbNavigation } from '../app/components/Common/BreadcrumbNavigation/BreadcrumbNavigation.redux';
import { ILookupState } from '../store/redux-store/lookup/initialState';
import { CatalogState } from 'app/Catalog/types';
import { CartState } from 'app/ShoppingCart/types';

export interface RootState {
  //   global?: IGlobal;
  navigationMenu?: INavigationMenu;
  catalog?: CatalogState;
  cart?: CartState;
  lookup: ILookupState;
  breadcrumb?: IBreadcrumbNavigation;
}