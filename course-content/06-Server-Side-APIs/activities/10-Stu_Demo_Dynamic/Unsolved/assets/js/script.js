var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
     


function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i =0; i < data.length; i++){
        var userInfor = document.createElement('li');
        console.log(data[i].login);
        console.log(data[i].url);
        userInfor.textContent= data[i].login;
        userContainer.append(userInfor);

      }
    });
}
fetchButton.addEventListener('click', getApi);
      