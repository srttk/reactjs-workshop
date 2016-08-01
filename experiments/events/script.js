/* https://facebook.github.io/react/docs/events.html */

var Main = React.createClass({
  render:function(){
    return(
      <div>
      <h1>The Events </h1>
      <Counter/>
      <Duck/>
      </div>

    );
  }
});

// Counter components

var Counter = React.createClass({

  getInitialState:function(){
    return {count:0};
  },

  style:{
      background:'#f64',
      color:'white',
      padding:2,
      width:100,
      textAlign:'center'
    },


  // Increment
  incrementCount:function(e){

    console.log(e);
    console.log(e.target);

    this.setState({count:this.state.count+1});

  },

  // Decrement

  decrementCount:function(){

    if(this.state.count>0) this.setState({count:this.state.count-1});


  },

  render:function(){
    return(<div style={this.style}>
      <h4>Counter</h4>
      <button disabled={!this.state.count} onClick={this.decrementCount}>-</button><span>{this.state.count}</span><button onClick={this.incrementCount}>+</button>
    </div>);
  }

});

/////////////////Custom Event component
var Duck = React.createClass({
  handleDuckWalk:function(){

    alert("Duck is walking....");

  },
  handleClick:function(){
    console.log('Cliked on Duck');
    var walkEvent = new Event('duckWalk');

    window.dispatchEvent(walkEvent);

  },
  componentDidMount:function(){
    // Add Listener for custom Event
    window.addEventListener('duckWalk',this.handleDuckWalk);
  },
  componentWillUnmount:function(){

    window.removeEventListener('duckWalk',this.handleDuckWalk);

  },
  render:function(){
    return (<div>
      <h4>Custom Event</h4>
      <button onClick={this.handleClick}>Duck!!</button>
    </div>);
  }
});


ReactDOM.render(<Main/>,document.getElementById('app'));
