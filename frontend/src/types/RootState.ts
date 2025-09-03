import { INavigationMenu } from '../app/components/Navigation/store/navigation.redux';
import { IBreadcrumbNavigation } from '../app/components/Common/BreadcrumbNavigation/BreadcrumbNavigation.redux';
import { ILookupState } from '../store/redux-store/lookup/initialState';
import { CatalogState } from 'app/Catalog/types';

export interface RootState {
  //   global?: IGlobal;
  navigationMenu?: INavigationMenu;
  catalog?: CatalogState; // TODO: Define the correct type for catalog
  lookup: ILookupState;
  breadcrumb?: IBreadcrumbNavigation;
}
