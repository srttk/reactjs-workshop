/* https://facebook.github.io/react/docs/events.html */

var Main = React.createClass({
  render:function(){
    return(
      <div>
      <h1>The Events </h1>
      <Counter/>
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


ReactDOM.render(<Main/>,document.getElementById('app'));
