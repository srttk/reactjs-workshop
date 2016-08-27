var App = React.createClass({
  propTypes:{
      greetings:React.PropTypes.string

  },
  getDefaultProps:function(){
    return {
      greetings:'World'
    }

  },
  render:function(){
    return(

      <h1>Hello {this.props.greetings}</h1>

    );
  }
});

var Alert = React.createClass({
  render:function
});

ReactDOM.render(<App greetings="Universe"/>,document.getElementById('app'));
