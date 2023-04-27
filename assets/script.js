var fetchButton = document.getElementById('fetch-button');
var fetchButtonII = document.getElementById('fetch-buttonII');

// card-body on designed card, potentially change id to match created card. 
var tableBody = document.getElementById('repo-table');
var tableBodyII = document.getElementById('repo-tableII');

function getApi() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createCardBody = document.createElement('tr');
          var tableData = document.createElement('td');
          var info = document.createElement('li');

          info.textContent = data[i].ingredients;
  
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
          tableData.appendChild(info);
          createCardBody.appendChild(tableData);
          tableBody.appendChild(createCardBody);
        }
      });
  }

  function getApiII() {
    // fetch request gets a list of the following iced Coffee Data: Description, ID, Image, Ingredients, and Title
    var requestUrl = 'https://api.sampleapis.com/coffee/iced';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createCardBodyII = document.createElement('tr');
          var tableDataII = document.createElement('td');
          var infoII = document.createElement('li');

          infoII.textContent = data[i].title;
  
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
          tableDataII.appendChild(infoII);
          createCardBodyII.appendChild(tableDataII);
          tableBodyII.appendChild(createCardBodyII);
        }
      });
  }
  
  fetchButton.addEventListener('click', getApi);
  fetchButtonII.addEventListener('click', getApiII);
  
