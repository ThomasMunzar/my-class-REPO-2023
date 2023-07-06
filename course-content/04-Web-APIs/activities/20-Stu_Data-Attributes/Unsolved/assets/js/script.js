var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

if (element.matches(".box")){
 //".box" need to match the class=box //event .target is where exactly in the container we clicked
var state = element.getAttribute("data-state");
if(state ==="hidden"){
  element.setAttribute("data-state", "visible")
  element.textContent = element.getAttribute("data-number") //this text content will show the data-numbers as the text content
} else{
  element.textContent=""
  element.setAttribute("data-state","hidden")
}
}




//element.textContent = element.getAttribute("data-number")

//console.log (element)
//console.log (element.getAttribute("data-number"))
//console.log (element.dataset.state)
  // TODO: Complete function
  
});
