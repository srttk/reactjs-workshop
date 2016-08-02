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
  handleClickCopy:function(e){

    console.log(e);
    //TODO : Copy to clipboard

  },
  render:function(){

    var labelStyle = {
     fontFamily: "sans-serif",
     fontWeight: "bold",
     padding: 13,
     margin: 0
   };
    return(
      <div style={labelStyle} onClick={this.handleClickCopy}>
        {this.props.color}
      </div>
    )
  }
});
//The Main
var Main = React.createClass({

  getInitialState:function(){
    return {
      newcolor:'',
      colors:[
        "#f56",
        '#5f6',
        '#56f',
        '#cfa',
        '#333',
        '#123',
        '#321',
        '#564',
        '#456'
      ]
    }
  },
  handleChangeText:function(e){

    this.setState({newcolor:e.target.value});


  },
  handleFormSubmit:function(e){
    this.addColor();
    e.preventDefault();

  },
  handleButtonClick:function(){

    this.addColor();
    

  },
  addColor:function(){

    if(this.state.newcolor.length <3) return false;

    var colors = this.state.colors;
    colors.unshift(this.state.newcolor);
    this.setState({colors:colors});
    this.setState({newcolor:''});

  },
  render:function(){
    var cards = this.state.colors.map(function(color,i){

      return(<Card key={i} color={color}/>);

    });
    return(
      <div>
      <h1>Cards</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" onChange={this.handleChangeText} value={this.state.newcolor}  />
          <button onClick={this.handleButtonClick}>ADD</button>
        </form>
        {cards}
      </div>
    );
  }
});
// Dom Render
ReactDOM.render(<Main/>,document.getElementById('app'));
