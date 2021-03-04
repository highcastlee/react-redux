const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('이전 상태', store.getState().counter);
  console.log('액션', action);
  next(action);
  console.log('다음 상태', store.getState().counter);
  console.groupEnd();
};

export default loggerMiddleware;