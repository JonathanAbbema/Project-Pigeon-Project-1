var coldFetch = document.getElementById('coldBtn');
var ing1 = document.getElementById('ingredientsBtn1');
var ing2 = document.getElementById('ingredientsBtn2');
var ing3 = document.getElementById('ingredientsBtn3');
var ing4 = document.getElementById('ingredientsBtn4');
var ing5 = document.getElementById('ingredientsBtn5');
var ing6 = document.getElementById('ingredientsBtn6');
var coldCard1 = document.getElementById('cold-Card1');
var coldCard2 = document.getElementById('cold-Card2');
var coldCard3 = document.getElementById('cold-Card3');
var coldCard4 = document.getElementById('cold-Card4');
var coldCard5 = document.getElementById('cold-Card5');
var coldCard6 = document.getElementById('cold-Card6');
var modal = document.getElementById('hotCold');

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
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard1.appendChild(createTableRow);

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

          //console.log(apiData);

        }
      });

  }

  function getColdIng6() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data)
        for (var i = 5; i < 6; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var ing = document.createElement('li');

          ing.textContent = data[5].ingredients
          var apiData = ing.textContent

          tableData.appendChild(ing);
          createTableRow.appendChild(tableData);
          coldCard6.appendChild(createTableRow);

          //console.log(apiData);

        }
      });

  }


ing1.addEventListener('click', getColdIng1)
ing2.addEventListener('click', getColdIng2)
ing3.addEventListener('click', getColdIng3)
ing4.addEventListener('click', getColdIng4)
ing5.addEventListener('click', getColdIng5)
ing6.addEventListener('click', getColdIng6)



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
     if (coldCard6.style.display === 'none') {
      coldCard6.style.display = 'block';
    }
    else {
      style.display = "none"
    }
  });
