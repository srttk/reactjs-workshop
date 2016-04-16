var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// Commentbox componenet

var Commentbox = React.createClass({

  render:function(){
    return(
      <div class="commentbox">
        Hello World !, Im a commentbox.
        <CommentList data={this.props.data}/>
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

  render:function(){
  return(

    <div>
    Comment form
    </div>
  )
  }

});


// Dom Render


ReactDOM.render(<Commentbox data={data}/>,document.getElementById("content"));
