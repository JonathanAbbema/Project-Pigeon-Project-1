var coldFetch = document.getElementById('coldBtn');
var ingredients = document.getElementById('ingredientsBtn');

// used to reference the card that we intend to append the information to. 
var cardBody1 = document.getElementById('cold-Card1');

// var tableBodyII = document.getElementById('repo-tableII'); - used to amend the elements

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
          cardBody1.appendChild(createCardBody);
        }
      });
  }

 
  
  coldFetch.addEventListener('click', getApi);
  fetchButtonII.addEventListener('click', getApiII);
  
