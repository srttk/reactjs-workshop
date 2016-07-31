

// App component
var App = React.createClass({

  render:function(){
    return(

      <div>
      <Header/>
        <div className="content">
          {this.props.children}
        </div>

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
       <ul>
       <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       </ul>
      </div>

    );
  }

});

// Home component

var Home = React.createClass({
  render:function(){
    return(

      <div>
      Home page
      </div>
    );
  }
});

// Contact View

var Contact = React.createClass({
  render:function(){
    return(

      <div>
      Contact page
      </div>

    );
  }
})


const { Router,Route,IndexRoute,Redirect,Link,IndexLink
      } = ReactRouter


// Dom Render


ReactDOM.render(
  <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/contact" component={Contact}></Route>
      </Route>
    </Router>
,document.getElementById('app'));
