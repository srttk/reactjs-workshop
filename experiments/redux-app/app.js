console.info('http://codepen.io/dagman/pen/yJqXdR');

const { render } = ReactDOM;
const { createStore } = Redux;
const { connect, Provider } = ReactRedux;

console.log('react-redux', ReactRedux);

// creating reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// creating store
const store = createStore(counter);
console.log('store', store);


// creating presentational component
const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

function mapStateToProps(state) {
	return {
		value: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch({type: 'INCREMENT'}),
		onDecrement: () => dispatch({type: 'DECREMENT'})
	};
}

// costructing container component
const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);


//rendering container component into page
render(
	<Provider store={store}>
		<CounterContainer />
	</Provider>,
	document.getElementById('app')
);
