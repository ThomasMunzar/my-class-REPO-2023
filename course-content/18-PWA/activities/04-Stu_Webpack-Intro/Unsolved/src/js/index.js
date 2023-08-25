// TODO: Add a comment explaining role of the index.js file and import statements
//import with more modern syntax that can only really be used during backend dev or packaging
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
