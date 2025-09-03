// import {
//     getDisciplineSpecialtyData,
//   } from 'app/services/SharedServices/SharedServices';
  import { all, put, select, takeLeading } from 'redux-saga/effects';
  import { ILookupState } from './initialState';
  import { lookupActions } from './lookup.slice';
//   import { globalActions } from 'app/ApplicationRoot/Global.redux';
//   import { ITypeAheadOption } from 'app/components/Tasks/CustomComponents/ControlledTypeAheadWithAvatar';
//   import { formatTypeAheadOptions } from 'app/components/Candidate/CandidateProfile/CandidateTabPanel/PreferencesTab/FormatData';
  import { lookupLoaderSelector } from './lookup.selectors';
//   import {
//     formatTypeAheadDisciplineOptions,
//     formatTypeAheadSpecialtyOptions,
//     formatTypeAheadSubSpecialtyOptions,
//   } from 'app/helpers/typeAheadHelper';
  
  export function* getInitialLookupLoad() {
    const isLoaded = yield select(lookupLoaderSelector);
    try {
      if (!isLoaded) {
        const response = yield all([
        //   getDisciplineSpecialtyData(),
        ]);
        const result = response[3];
        const navItemsFromDB = [];
        // const disciplineOptions = formatTypeAheadDisciplineOptions(result.data.disciplines);
        // const specialtyOptions = formatTypeAheadSpecialtyOptions(result.data.disciplineSpecialties);
        // const subSpecialtyOptions = formatTypeAheadSubSpecialtyOptions(result.data.subSpecialties);
  
        const payload: ILookupState = {
          navigationItems: navItemsFromDB,
          isLoaded: true,
        };
        yield put(lookupActions.setNavigationItems(payload));
      }
    } catch (error) {
    //   yield put(
    //     globalActions.setSnackBar({
    //       message: 'Oops something went wrong. Please try again',
    //       severity: 'error',
    //     }),
    //   );
    }
  }
  
  function* lookupWatcher() {
    yield takeLeading(lookupActions.getAllLookup, getInitialLookupLoad);
  }
  
  export function* lookupSaga() {
    yield all([lookupWatcher()]);
  }
  