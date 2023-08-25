import { openDB } from 'idb';


// Create a function that can be used to start up the database.
const initdb = async () =>

// TODO: Add a comment explaining what this method does
    // Create a database named todos and we will use version 1.
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
// Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // Create an object store for our data inside of the 'demo-db'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
