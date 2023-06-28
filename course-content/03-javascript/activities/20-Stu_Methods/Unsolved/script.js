var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations);

planets.splice(5)
console.log(planets)
//Can also use a method called POP to pop the last element off**


var galaxy = [...planets, ...constellations]
console.log(galaxy)

//can also combine using ".concat"




var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar)
//This .toUpperCase allowed me to grab the items in star and make them uppercase