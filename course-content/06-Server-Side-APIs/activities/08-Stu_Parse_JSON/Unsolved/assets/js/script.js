// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    for (var i = 0; i<=4; i++){
      console.log("url", data[i].url);
      console.log("login", data[i].user.login);
    }
    // TODO: Console log each issue's URL and each user's login
  });
// (response) and  (data) can be named anything but it is GOOD practice to keep it this way