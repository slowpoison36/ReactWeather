var axios = require("axios");



const OPEN_WEATHER_MAP_URL= "http://api.openweathermap.org/data/2.5/weather?appid=0fc47a804799ac8f1a246c31cce16fa1&units=imperial";

module.exports = {
    getTemp:function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error("unable to fetch weather");
            } else{
                return res.data.main.temp;
            }
        },function(){
            throw new Error("Unable to fetch weather ");
        })
    }
}