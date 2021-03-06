import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';


const CounterContainer = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const onIncrease = useCallback(()=>dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(()=>dispatch(decreaseAsync()), [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};



// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = {
//   increase,
//   decrease
// };


export default CounterContainer;