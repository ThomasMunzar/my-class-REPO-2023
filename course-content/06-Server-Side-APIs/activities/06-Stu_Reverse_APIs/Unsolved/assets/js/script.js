var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call

// Works very similarly to FETCH but data is usable right away/ do not need .JSON

//jQuery uses .ajax to send the request to the API. On completion, the response is returned, as shown in the following example:
//AJAX and fetch() are structured similarly but do not function exactly the same. fetch() would try to resolve the response with a 404 or 500 error, while AJAX would not, as shown in the following example:
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) { //PROMISE 
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// information does not come back usable until we .JSON which returns just the DATA - that data is usuable.
fetch(requestUrl)
  .then(function (response) {
    return response.json(); //FIRST PROMISE
  })
  .then(function (data) { //SECOND PROMISE
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
