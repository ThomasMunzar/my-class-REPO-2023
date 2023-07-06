// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children().children().css("background-color", "white")

//or can do

//rootEl.find('li').css('background-color', 'white')

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().eq(1).children().eq(1).text("O")
rootEl.children().eq(2).children().eq(2).text("O")
