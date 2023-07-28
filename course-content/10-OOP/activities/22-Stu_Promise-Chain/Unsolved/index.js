// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return

// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8').then((json) => {
  console.log('Received data from post.json');
  // TODO: parse the json string and assign the resulting object to a variable
  
   const parse = JSON.parse(json)
console.log(parse)
  // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.
  
   const blogPost = new BlogPost(
    parse.title,
    parse.text, 
    parse.author, 
    parse.createdOn
    );

    const html = post.render();
    return writeFile()

  // TODO: Write the html to file
  writeFile("index.html", blogPost, (err) =>{
    err ? console.error(err) : console.log('Success!')
  })
   console.log("HTML has been created.")
});

// TODO: print a message in the console only after the html file is written.


