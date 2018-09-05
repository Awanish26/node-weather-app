const request=require('request');

var getWeather=(lat,lng,callback)=>{
request({
url:`https://api.darksky.net/forecast/d4e7a6cd884ba52ae0532deaba6d630b/${lat},${lng}`,
json:true
},(error,response,body)=>{
if(error){
    console.log('Unable to connect to the server');
}else if(response.statusCode===400){
    console.log('Unable to fetch weather');
}else if(response.statusCode===200){
    callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature,
        summary:body.currently.summary
    });
}

});
};

module.exports.getWeather=getWeather;