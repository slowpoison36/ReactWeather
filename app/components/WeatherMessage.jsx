var React = require("react");


var WeatherMessage = (props)=>{
     var{temp,location} = props;
        return (
        <div>
            <p> {location + " "+ temp} </p>
           
        </div>
        )
    }


module.exports = WeatherMessage;