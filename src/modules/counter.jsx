import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest, select, throttle } from 'redux-saga/effects';


// action type. 액션 이름 충돌 방지
const INCREASE = 'counter/INCREASE';
const DECREASE = ' counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


// action 생성 함수. 다른 파일에서 불러와 사용 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// export const increaseAsync = () => dispatch => {
//   setTimeout(()=>{
//     dispatch(increase());
//   }, 1000);
// }
// export const decreaseAsync = () => dispatch => {
//   setTimeout(()=>{
//     dispatch(decrease());
//   }, 1000);
// }

function* increaseSaga() {
  yield delay(1000); // 1초 기다림 (setTimeout)
  yield put(increase()); // 특정 액션을 디스패치
  const number = yield select(state => state.counter); // state는 스토어 상테
  console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
  const number = yield select(state => state.counter); // state는 스토어 상테
  console.log(`현재 값은 ${number}입니다.`);

}

export function* counterSaga() {
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // throttle은 단순 delay가 아니라 실행 후 3초 동안은 1회만 실행되게 해줌
  yield throttle(3000, INCREASE_ASYNC, increaseSaga); // 들어오는 모든 액션에 특정 작업 처리
  yield takeEvery(DECREASE_ASYNC, decreaseSaga); // 기존 작업 취소하고 마지막 실행된 작업만 수행
}

// state 초기화
const initialState = 0;


const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);


// default는 한 개만 내보낼 수 있음. 부를 때는 {} 없이 부름
export default counter;

// // reducer 함수
// function counter(state = initialState, action) {
//   switch(action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1
//       };
//     default:
//       return state;
//   }
// }
