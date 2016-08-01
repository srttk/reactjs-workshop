console.log('https://www.kirupa.com/react/creating_complex_components.htm');

//Square component

var Card = React.createClass({
  render:function(){
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
      display:'inline-block',
      margin:'3px'
    };
    return(


      <div style={cardStyle}>

      <Square color={this.props.color}/>
      <Label color={this.props.color}/>

      </div>
    )
  }
});

var Square = React.createClass({
  render:function(){

    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    };

    return(


      <div style={squareStyle}>

      </div>
    )
  }
});

//Label component
var Label = React.createClass({
  render:function(){

    var labelStyle = {
     fontFamily: "sans-serif",
     fontWeight: "bold",
     padding: 13,
     margin: 0
   };
    return(
      <div style={labelStyle}>
        {this.props.color}
      </div>
    )
  }
});
//The Main
var Main = React.createClass({
  render:function(){
    return(
      <div>
      <h1>Cards</h1>
      
      <Card color="#f56"/>
      <Card color="#667"/>
      <Card color="#ef8"/>
      </div>
    );
  }
});
// Dom Render
ReactDOM.render(<Main/>,document.getElementById('app'));
