var React = require("react");
var{Link,IndexLink} = require("react-router");


var NavBar =(props)=>{
     return (
            <div>
                <h2>Welcome to Navigaition Page</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold"}}>About</Link>
                <Link to ="/example" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Example</Link>
            </div>
            )
    }


module.exports = NavBar;