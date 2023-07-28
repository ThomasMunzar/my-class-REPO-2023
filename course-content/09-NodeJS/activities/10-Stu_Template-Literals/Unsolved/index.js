// music should be an object with title, artist, and album properties
const music = {
  // code here
 title: "Smells like Teen Spirit",
 artist: "Nirvana",
 album: "Nevermind",

};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `I love the song ${encodeURI(music.title)}, by the band ${music.artist}, from the album ${music.album},`; //encodeURI encodes a string HTML freindly

console.log(songSnippet)



