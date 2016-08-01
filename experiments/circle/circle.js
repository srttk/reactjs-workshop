(function(){

  var Circle = React.createClass({
    sayHello:function(){

      alert(this.props.bgcolor);` `

    },
    render: function() {
        var circleStyle = {
          padding: 10,
          margin: 20,
          display: "inline-block",
          backgroundColor: this.props.bgcolor,
          borderRadius: "50%",
          width: 100,
          height: 100,
          position:'relative',
          top:this.props.top,
          bottom:this.props.bottom,
          left:this.props.left,
          right:this.props.right
        };

        return (
          <div style={circleStyle} onClick={this.sayHello}>
          </div>
        );
      }
  });

  var destination = document.querySelector("#container");

  ReactDOM.render(
    <div>
    <Circle bgcolor="#F9C240" top="100px" left="200px"/>
      <Circle bgcolor="#f56" top="300"/>
    </div>,
    destination
  );

})();
