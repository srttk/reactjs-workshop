

/* This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 */
function counter(state = {count:0}, action) {
  switch (action.type) {
  case 'INCREMENT':
    return {count :state.count + 1}
  case 'DECREMENT':
    return {count:state.count - 1}
  default:
    return {count:0}
  }
}

// Store
let store = Redux.createStore(counter)


store.subscribe(function(){
  console.info(store.getState());
  var data = store.getState();
  document.body.innerHTML = data.count;

});



window.store = store;

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

document.addEventListener('click',function(){
  store.dispatch({ type: 'INCREMENT' });
});
