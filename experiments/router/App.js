

// App component
var App = React.createClass({

  render:function(){
    return(

      <div>
      <Header/>
      </div>

    );
  }

});


// Header component

var Header = React.createClass({

  render:function(){
    return(

      <div>
       <h1>Header</h1>
      </div>

    );
  }

});


const { Router,Route,IndexRoute,Redirect,Link,IndexLink
      } = ReactRouter


// Dom Render


ReactDOM.render(
  <Router>
      <Route path="/" component={App}/>
    </Router>
,document.getElementById('app'));
