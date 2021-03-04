import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import todos from './todos';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  todos,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]); // all은 여러 사가를 합쳐주는 역할
}

export default rootReducer;
