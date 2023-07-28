// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

function BlogPost(authorName, title, text, createdOn){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function(){
        console.log(`${title} Created by ${authorName} on ${createdOn}.`)
    }
    
}

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

const newBlogPost = new BlogPost("Roald Dahl", "James and the Giant Peach", "Book", "1961")
newBlogPost.printMetaData()
// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object

// WOOHOO IT WORKED!