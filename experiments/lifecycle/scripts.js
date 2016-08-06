/* https://facebook.github.io/react/docs/component-specs.html */
/*


http://busypeoples.github.io/post/react-component-lifecycle/

*/
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

  },
  componentWillMount:function(){

    console.log('componentWillUpdate: Component is about to mount!')

  },
  componentDidMount:function(){

    console.log('componentDidMount: Component mounted');

  },
  render:function(){
    return(
      <div>
      App
      </div>
    )
  }

});

ReactDOM.render(<App/>,document.getElementById('app'));
