var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event){
    event.preventDefault()
var input= $("#shopping-input").val();
$("#shopping-input").val("");

var liItem = $("<li>")
liItem.text(input);
shoppingFormEl.append(liItem);
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit ){
    
} 