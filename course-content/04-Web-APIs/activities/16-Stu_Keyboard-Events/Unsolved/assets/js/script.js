function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  document.querySelector("#status").innerHTML = "KEYDOWN Event"
  document.querySelector("#code").innerHTML = event.code
  document.querySelector("#key").innerHTML = event.key
}

function keyupAction(event) {
	console.log(event);
  document.querySelector("#status").innerHTML = "KEYUP Event";
  document.querySelector("#code").innerHTML = event.code
  document.querySelector("#key").innerHTML = event.key
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
