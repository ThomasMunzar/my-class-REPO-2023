// const songs = object.keys(getElementById("songs"));


// function addSong(songs){
// for (const song of songs){
//     song.setAttribute("class", "color: red" )

// }}
// console.log(songs);


const selector = document.querySelectorAll("li")

console.log(selector)
for (const element of selector){
    element.classList.add("purple");
    console.log(element);
}