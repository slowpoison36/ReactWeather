var React = require("react");


var WeatherMessage = (props)=>{
     var{temp,location} = props;
        return (
        <div>
            <p className="text-center"> {location + " "+ temp} </p>
           
        </div>
        )
    }


module.exports = WeatherMessage;