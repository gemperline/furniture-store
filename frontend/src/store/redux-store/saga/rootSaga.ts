import { all } from 'redux-saga/effects';
import { lookupSaga } from '../lookup/lookup.saga';

function* rootSaga() {
  yield all([lookupSaga()]);
}

export default rootSaga;
