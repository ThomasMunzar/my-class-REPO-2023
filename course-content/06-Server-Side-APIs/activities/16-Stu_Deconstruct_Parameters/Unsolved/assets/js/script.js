fetch(
  // Explain each parameter in comments below.
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// list-repository-issues


// per_page=10 per page is The number of results per page (max 100). defaults to 30

// STATE = OPEN is Indicates the state of the issues to return. can be either open closed or both (can specify if you want open or closed issue)

// SORT (what to sort by) = CREATED is how the the information is SORTED , it is sorted by CREATED which is creation date. 

// DIRECTION=DESC is Direction - Descending (most recent to least recent)

// query perameters change based on EACH api. do your research for each API