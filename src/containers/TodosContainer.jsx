import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
  // state = {counter, todos} 있고, 그 todos state 안에 input과 todos가 객체의 키 값으로 있음
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));
  // dispatch는 그냥 리덕스에서 불러서 인수에 action 생성 함수를 넣어준다
  // 해당 리덕스의 예상 인수 값과 내용들을 다 알고 있어야한다는 단점이 있는데,
  // Typescript를 사용하면, 자동완성이 되므로 편함 
  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// connect(state,dispatch) 형식임

export default TodosContainer;