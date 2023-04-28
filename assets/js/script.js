var requestUrl1='https://api.open-meteo.com/v1/forecast?latitude=37.87&longitude=-122.27&hourly=temperature_2m';


fetch (requestUrl1)
  .then((function(response) {
    return response.json();
  
  })
  .then (function(data){
    console.log(response)

var todaysWeather = document.createElement('h1');



var requestUrl2='https://api.sampleapis.com/coffee/hot';


fetch (requestUrl2)
  .then((function(response) {
    return response.json();
  
  })
  .then (function(data){
    for (var i=0; i < data.length; i++) {
      var createHotcard = document.createElement('tr');
      var tableHotdata = document.createElement('td');
      var infoHot = document.createElement ('li');

      infoHot.textContent = data[].description;

      tableHotdata.appendChild(infoHot);
      createCardBody.appendChild(tableHotdata);
      tableHotbody.appendChild(createCardbody);

    }
  }))

  fetchButton.addEventListener('click,getAPI');
getApi(requestUrl);
