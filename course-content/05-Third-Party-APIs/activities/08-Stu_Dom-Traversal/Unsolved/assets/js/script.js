// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css("background-color", "white")

//or can do

//rootEl.find('li').css('background-color', 'white')

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().eq(1).children().eq(0).text("O")
rootEl.children().eq(2).children().eq(0).text("O")
rootEl.children().eq(3).children().eq(0).text("O")

// if dont specify ('ul') it makes children an array
//            [h1,ul,ul,ul] if i put UL in first child then position # changes


//ALTERNATIVE METHOD
function setPosition(x,y,text){
    rootEl.children('ul').eq(y).children().eq(x).text(text)
}
setPosition(1,0,'o');
setPosition(2,1,'o');
setPosition(2,3,'o')