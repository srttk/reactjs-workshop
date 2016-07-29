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

ReactDOM.render(<Header title="Hey"/>,document.getElementById('app'));
