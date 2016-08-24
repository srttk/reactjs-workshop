const { Component } = React;
const { render } = ReactDOM;
const { Dispatcher } = Flux;

const addVal = (val) => {
  dispatcher.dispatch({
    type: 'ADD_VAL',
    val: val
  })
}

class Store extends EventEmitter {
  constructor () {
    super();
    this.state = {val: 0};
  }
  modify(val) {
    this.state.val += val;
    this.emit('change');
  }
  handleAction (action) {
    console.log('Recived: ', action);
    switch(action.type) {
      case 'ADD_VAL':
        this.modify(action.val)
    }
  }
  getState () {
    return this.state;
  };
}

let store = new Store;
let dispatcher = new Dispatcher;
dispatcher.register(store.handleAction.bind(store));


class App extends Component {
  constructor () {
    super()
    this.state = store.getState();
  }
  componentDidMount () {
    store.on('change', () => {
      this.setState(store.getState());
    })
  }
  add (amount) {
    addVal(1);
  }
  subtract (amount) {
    addVal(-1);
  }
  render () {
    return (
      <div>
        <h1>{this.state.val}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}



render(<App/>, document.getElementById('app'));
