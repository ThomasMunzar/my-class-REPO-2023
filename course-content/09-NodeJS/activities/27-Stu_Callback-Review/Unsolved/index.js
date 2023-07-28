const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for(var i=0; i<animalJSON; i++){
    if(data.species === "dog"){
      dogs.push()
    }else{
      cats.push()
    }
  }
});

const stringDog = JSON.stringify(dogs)
const stringCat = JSON.stringify(cats)

fs.writeFile('dogs.json', stringDog,(err) =>
err ? console.log(err) : console.log("Success!")
);
fs.writeFile('cats.json', stringCats, (err) =>
err ? console.log(err): console.log("Success!")
);