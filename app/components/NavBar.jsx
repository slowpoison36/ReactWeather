var React = require("react");
var{Link,IndexLink} = require("react-router");


var NavBar = React.createClass({
    onSubmit:function(e){
      e.preventDefault();  
      var location = this.refs.location.value;
      var encodedLocation = encodeURIComponent(location);
      if(location.length>0){
          this.refs.location.value = "";
          window.location.hash="#/?location="+encodedLocation;
      }
    },
    render:function(){
        return (
            <div className="top-bar">
             <div className="top-bar-left">
                <ul className="menu">
                <li className="menu-text">React Weather App</li>
                <li>
                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Get Weather</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
                </li>
                <li>
                  <Link to ="/example" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Example</Link>
                </li>
                </ul>
             </div>
             <div className="top-bar-right">
              <form onSubmit={this.onSubmit}>
                 <ul className="menu">
                    <li><input type="search" ref="location" placeholder="Search Weather by city"/></li>
                    <li><input type="submit" className="button" value="Get Weather"/></li>
                </ul>
             </form>
             </div>
            </div>
            
            )
    }
})



module.exports = NavBar;
