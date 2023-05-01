 
 
 const todaysWeatherBtn = document.querySelector('#todaysWeather')
 const result = document.querySelector('#result')
 
 function getWeatherApi (){

 var requestUrl = 'https://api.open-meteo.com/v1/forecast?latitude=37.87&longitude=-122.27&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime&forecast_days=1&timezone=America%2FLos_Angeles';


  fetch(requestUrl) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

  //get temps from array
    var dayHigh =data.daily.temperature_2m_max['0'];
    var dayLow =data.daily.temperature_2m_min['0'];
    
    let highTemp = dayHigh;
    let lowTemp = dayLow;
    
    //checks
    console.log(highTemp);
    console.log(lowTemp);
    

    high.innerText ="Today's High Temperature: " + dayHigh
    low.innerText ="Today's Low Temperature: " + dayLow
    
  });
}

todaysWeatherBtn.addEventListener("click",getWeatherApi)

getWeatherApi();
