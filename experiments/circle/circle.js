(function(){

  var Circle = React.createClass({
    sayHello:function(){

      alert(this.props.bgcolor);

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
    <Circle bgcolor="#F9C240"/>
      <Circle bgcolor="#f56"/>
    </div>,
    destination
  );

})();
