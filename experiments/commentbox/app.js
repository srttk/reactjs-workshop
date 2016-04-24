// Commentbox componenet

var Commentbox = React.createClass({

  getInitialState:function(){
    return {data:[]};
  },

  fetchData:function(){
    $.ajax({
      "url":this.props.url,
      "dataType":"json",
      "cache":false,
      success:function(response,a,b){

        if(b.status == 200){

          this.setState({data:response});

        }


      }.bind(this),
      error:function(){
        alert("Error");
      }.bind(this)

    });
  },

  componentDidMount:function(){

    this.fetchData();

    setInterval(this.fetchData,this.props.refresh || 3000);
  },

  render:function(){
    return(
      <div class="commentbox">
        <CommentboxHeader></CommentboxHeader>
        <CommentList data={this.state.data}/>
        <CommentForm/>
      </div>
    );
  }

});

// CommentList

var CommentList = React.createClass({
  render:function(){
    var CommentNodes = this.props.data.map(function(comment){

      return(
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );

    });
    return(
      <div class="comment-list">
         {CommentNodes}
      </div>
    );
  }
});

// Comment
var Comment = React.createClass({
  render:function(){
    return(
      <div class="comment">
        <h2>{this.props.author}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

// Comment Form

var CommentForm = React.createClass({
  getInitialState:function(){
    return {"name":"Sarath","text":"Hello"};
  },

  handleName:function(e){

    this.setState({"name":e.target.value});

  },

  handleText:function(e){
    //alert(e.target.value);
    this.setState({"text":e.target.value});

  },

  handleSubmit:function(){
    console.log(this.state);
    this.setState({"name":"","text":""});
  },

  render:function(){
  return(

    <div>
      <h2>Leave comment : </h2>
      <input type="text" onChange={this.handleName} value={this.state.name}/><br/>
      <textarea onChange={this.handleText} value={this.state.text}></textarea><br/>
      <button onClick={this.handleSubmit}>Submit</button>
    </div>
  )
  }

});

// CommentboxHeader

var CommentboxHeader = React.createClass({

  render:function(){
    return(

      <h1>CommentBox App </h1>
    )
  }

});


// Dom Render


ReactDOM.render(<Commentbox url="data.json"/>,document.getElementById("content"));
