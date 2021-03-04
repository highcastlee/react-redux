import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
import TodosContainer from './containers/TodosContainer';


const App = () => {
  return (
    <div>
      <SampleContainer />
      <hr />
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App;
