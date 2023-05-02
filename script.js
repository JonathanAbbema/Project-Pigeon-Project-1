var coldFetch = document.getElementById('coldBtn');
var hotFetch = document.getElementById('hotBtn');
var ing1 = document.getElementById('ingredientsBtn1');
var ing2 = document.getElementById('ingredientsBtn2');
var ing3 = document.getElementById('ingredientsBtn3');
var ing4 = document.getElementById('ingredientsBtn4');
var ing5 = document.getElementById('ingredientsBtn5');
var Hoting1 = document.getElementById('hotIngredientsBtn1');
var Hoting2 = document.getElementById('hotIngredientsBtn2');
var Hoting3 = document.getElementById('hotIngredientsBtn3');
var Hoting4 = document.getElementById('hotIngredientsBtn4');
var Hoting5 = document.getElementById('hotIngredientsBtn5');
var Hoting6 = document.getElementById('hotIngredientsBtn6');
var Hoting7 = document.getElementById('hotIngredientsBtn7');
var Hoting8 = document.getElementById('hotIngredientsBtn8');
var Hoting9 = document.getElementById('hotIngredientsBtn9');
var hotCard1 = document.getElementById('hot-Card1');
var hotCard2 = document.getElementById('hot-Card2');
var hotCard3 = document.getElementById('hot-Card3');
var hotCard4 = document.getElementById('hot-Card4');
var hotCard5 = document.getElementById('hot-Card5');
var hotCard6 = document.getElementById('hot-Card6');
var hotCard7 = document.getElementById('hot-Card7');
var hotCard8 = document.getElementById('hot-Card8');
var hotCard9 = document.getElementById('hot-Card9');
var coldCard1 = document.getElementById('cold-Card1');
var coldCard2 = document.getElementById('cold-Card2');
var coldCard3 = document.getElementById('cold-Card3');
var coldCard4 = document.getElementById('cold-Card4');
var coldCard5 = document.getElementById('cold-Card5');
var coldCard6 = document.getElementById('cold-Card6');
var modal = document.getElementById('hotCold');
var refreshBtn = document.getElementById('refresh');

// used to reference the card that we intend to append the information to. 
var cardBody1 = document.getElementById('cold-Card1');


function getColdIng1() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 0; i < 1; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[0].ingredients

          // var apiData = ing.textContent
          coldCard1.appendChild(createTableRow);
          createTableRow.appendChild(tableData);
          tableData.appendChild(ing);
         
          localStorage.setItem("Cold ingredients 1", ing.textContent);

          //console.log(apiData);

       }
      });

  }

  function getColdIng2() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 1; i < 2; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[1].ingredients
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard2.appendChild(createTableRow);

          localStorage.setItem("Cold ingredients 2", ing.textContent);
          //console.log(apiData);

        }
      });

  }

  function getColdIng3() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 2; i < 3; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[2].ingredients
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard3.appendChild(createTableRow);

          localStorage.setItem("Cold ingredients 3", ing.textContent);

          //console.log(apiData);

        }
      });

  }

  function getColdIng4() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 3; i < 4; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[3].ingredients
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard4.appendChild(createTableRow);

          localStorage.setItem("Cold ingredients 4", ing.textContent);

          //console.log(apiData);

        }
      });

  }

  function getColdIng5() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 4; i < 5; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[4].ingredients
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard5.appendChild(createTableRow);

          localStorage.setItem("Cold ingredients 5", ing.textContent);
          //console.log(apiData);

        }
      });

  }



ing1.addEventListener('click', getColdIng1)
ing2.addEventListener('click', getColdIng2)
ing3.addEventListener('click', getColdIng3)
ing4.addEventListener('click', getColdIng4)
ing5.addEventListener('click', getColdIng5)




//var cardArray = ["cold-Card1", "cold-Card2", "cold-Card3", "cold-Card4", "cold-Card5", "cold-Card6"];

  coldFetch.addEventListener('click', () => {
    if(coldCard1.style.display === 'none'){
      coldCard1.style.display = "block";
    }if (coldCard2.style.display === 'none') {
      coldCard2.style.display = 'block';
    }
     if (coldCard3.style.display === 'none') {
      coldCard3.style.display = 'block';
    }
     if (coldCard4.style.display === 'none') {
      coldCard4.style.display = 'block';
    }
     if (coldCard5.style.display === 'none') {
      coldCard5.style.display = 'block';
    }
    else {
      style.display = "none"
    }
  });

// HOT API Call

function getHotIng1() {
  // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
  var requestUrl = 'https://api.sampleapis.com/coffee/hot';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data)
      for (var i = 0; i < 1; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var ing = document.createElement('li');

        ing.textContent = data[0].ingredients

        // var apiData = ing.textContent
        hotCard1.appendChild(createTableRow);
        createTableRow.appendChild(tableData);
        tableData.appendChild(ing);
       
        localStorage.setItem("Hot ingredients 1", ing.textContent);

        //console.log(apiData);

     }
    });

}

function getHotIng2() {
  // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
  var requestUrl = 'https://api.sampleapis.com/coffee/hot';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data)
      //for (var i = 0; i < 1; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var ing = document.createElement('li');

        ing.textContent = data[1].ingredients

        // var apiData = ing.textContent
        hotCard2.appendChild(createTableRow);
        createTableRow.appendChild(tableData);
        tableData.appendChild(ing);
       
        localStorage.setItem("Hot ingredients 2", ing.textContent);

        //console.log(apiData);

     //}
    });

}

function getHotIng3() {
  // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
  var requestUrl = 'https://api.sampleapis.com/coffee/hot';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data)
      //for (var i = 0; i < 1; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var ing = document.createElement('li');

        ing.textContent = data[2].ingredients

        // var apiData = ing.textContent
        hotCard3.appendChild(createTableRow);
        createTableRow.appendChild(tableData);
        tableData.appendChild(ing);
       
        localStorage.setItem("Hot ingredients 3", ing.textContent);

        //console.log(apiData);

     //}
    });

}

Hoting1.addEventListener('click', getHotIng1);
Hoting2.addEventListener('click', getHotIng2);
Hoting3.addEventListener('click', getHotIng3);

hotFetch.addEventListener('click', () => {
  if(hotCard1.style.display === 'none'){
    hotCard1.style.display = "block";
  }if (hotCard2.style.display === 'none') {
    hotCard2.style.display = 'block';
  }
  if (hotCard3.style.display === 'none') {
    hotCard3.style.display = 'block';
  }
  else {
    style.display = "none"
  }
});

//Weather API Call 

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


 // refresh button 

 function refresh () {
  window.location.reload();
 }

refreshBtn.addEventListener('click', refresh); 