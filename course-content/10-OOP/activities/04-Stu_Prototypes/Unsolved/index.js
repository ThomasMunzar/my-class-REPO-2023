// TODO: Add a comment describing what kind of function this is


// THIS IS A CONSTRUCTOR FUNCTION 
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName; 
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// Prototype is pushing a comment into the comment array in the BlogPost// prototype is letting you add to the constructor function
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};
// PROTOTYPE ALLOWS US TO ADD A METHOD ON EVERY INSTANCE ON BLOGPOST  
const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
console.log(post.comments);
