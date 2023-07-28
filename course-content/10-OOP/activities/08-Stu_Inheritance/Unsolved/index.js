// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn){
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
  
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.

class BlogPost extends ForumItem{
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdon);// allows the child class to access and use the properties and methods defined in the parent class. Think of it as a way for the child to get help from its parent when it's being created.
    this.authorName = authorName;
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName,text,createdOn)
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment ("John Doe", "Book","2023","Cool Book")


// TODO: Create a new object using the BlogPost class constructor.

const newBlog = new BlogPost ("Don Doe","Cool Blog", "Blog","2022","COMMENT!!!")
newBlog.addComment ("New Comment!")
// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newComment)
console.log(newBlog)
