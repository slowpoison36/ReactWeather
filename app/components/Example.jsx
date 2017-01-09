var React = require("react");
var{Link} = require("react-router");


var Example = (props)=>{
          return (
        <div>
          <h1 className="text-center">Example</h1>
            <p>Here are some few examples to try</p>
            <ol>
            <li><Link to="/?location=Irving">Irving</Link></li>
            <li><Link to="/?location=Rio">Rio,Brazil</Link></li>
            </ol>
        </div>
        )
    }


module.exports = Example;