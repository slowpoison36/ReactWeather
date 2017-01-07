var React = require("react");
var NavBar = require("NavBar");


var Main = (props)=>{
      return(
            <div>
                <NavBar/>
                <h2>Main Component </h2>
                {props.children}
            </div>
            )
    
}

module.exports = Main;