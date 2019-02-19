function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };
};



let state;

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};
//
// function dispatch(action){
//   state = changeCount(state, action);
//   render();
// };

function render() {
  let container = document.getElementById('container');
  container.textContent = state.count;
};

let store = createStore(changeCount);
store.dispatch({ type: '@@INIT' });
// dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', function() {
    dispatch({ type: 'INCREASE_COUNT' });
})
