/*
React Component Lifecycle

https://facebook.github.io/react/docs/component-specs.html
http://busypeoples.github.io/post/react-component-lifecycle
https://www.kirupa.com/react/component_lifecycle.htm
*/
console.info('https://facebook.github.io/react/docs/component-specs.html');


// App Component

var mountPoint = document.getElementById('app');

var App = React.createClass({

  /* getDefaultProps method */
  getDefaultProps:function(){
    console.log('getDefaultProps: default properties!!');
  },
  getInitialState:function(){

    console.log('getInitialState: set initial state values');
    return {count:0};

  },
  increase:function(){
    console.log('increase: method clicked');
    this.setState({count:this.state.count+1});

  },
  /* Lifecycle Methods */
  componentWillMount:function(){

    console.log('componentWillUpdate: Component is about to mount!');
    this.setState({count:this.state.count+1});

  },
  componentDidMount:function(){

    console.log('componentDidMount: Component mounted');
    this.setState({count:this.state.count+1});

  },
  shouldComponentUpdate:function(nextProps,nextState){

    console.log('shouldComponentUpdate : before props or states updated');
    console.log('States:',nextState);
    if(nextState.count < 10){

      return true;

    }
    ReactDOM.unmountComponentAtNode(mountPoint);
    return false;

  },
  componentWillUpdate:function(nextProps,nextStates){
    console.log('componentWillUpdate:');
    console.log(nextStates);
  },
  componentDidUpdate:function(prevProps,prevState){

    console.log('componentDidUpdate:');
    console.log(prevState);

  },
  componentWillUnmount:function(){

    console.log('componentWillUnmount: DEAD!!!!');

  },
  render:function(){
    return(
      <div>
      App
      <p>Open Developer Console</p>
      <h4>{this.state.count}</h4>
      <button onClick={this.increase}>Click</button>
      </div>
    )
  }

});

ReactDOM.render(<App/>,mountPoint);
