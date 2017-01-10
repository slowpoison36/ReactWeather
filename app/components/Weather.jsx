var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState:function(){
      return {
       isLoading:false
      }  
    },
    
    handleSearch:function(location){
        var that = this;
        this.setState({
            isLoading:true,
            errorMessage:undefined,
            location:undefined,
            temp:undefined
            
        })
        openWeatherMap.getTemp(location).then(function(temp){
           that.setState({
               location:location,
               temp:temp,
               isLoading:false
           }) 
        },function(e){
            that.setState({
                 isLoading:false,
                errorMessage:e.message
               })
        })
        
    },
    componentDidMount:function(){
      var location = this.props.location.query.location; 
      if(location && location.length>0){
          this.handleSearch(location);
          window.location.hash="#/";
      }
    },
    componentWillReceiveProps:function(newProp){
        var location = newProp.location.query.location;
        if(location&& location.length>0){
            this.handleSearch(location);
            window.location.hash="#/";
        }
    },
    render:function(){
      var {location,temp,isLoading,errorMessage} = this.state;
      
      function renderMessage(){
          if(isLoading){
             return <h2 className="text-center page-title">Fetching Weather...</h2>;
              
          }else if(temp,location){
              return <WeatherMessage temp ={temp} location={location}/>;

          }
      }
      
      function revealError(){
        if(typeof errorMessage==="string"){
            return (
                <ErrorModal message={errorMessage}/>
                )
        }  
      }
        return (
        <div>
            <h2 className="text-center page-title">Get Weather</h2>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {revealError()}
        </div>
        )
    }
})

module.exports = Weather;