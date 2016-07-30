var Header = React.createClass({
  getInitialState:function(){

    return {title:this.props.title,body:"Lrem"};

  },
  handleText:function(event){

    console.log(event.target.value);
    this.setState({body:event.target.value});

  },
  render:function(){

    return(
      <nav>
      <h1>States {this.state.title}</h1>
      <p>{this.state.body}</p>
      <p>
        <input type="text" onChange={this.handleText} value={this.state.body} />
      </p>
      </nav>
    );

  }
})

// Main //
var Main = React.createClass({

  getInitialState:function(){

    return {HeaderData:{title:'Title',body:'Body'}}

  },

  render:function(){
    return(

      <div>
        <Header title={this.state.HeaderData.title}></Header>
      </div>

    );
  }

});

ReactDOM.render(<Main title="Hey"/>,document.getElementById('app'));
