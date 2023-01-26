// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

let imageColumn = document.querySelector(".display-image");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imgColumn = document.querySelector(".display-image");
let songColumn = document.querySelector(".display-song");
let artistColumn = document.querySelector(".display-artist");
let linkColumn = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let images = [
  "https://i.ytimg.com/vi/EFlpPy-hj5o/maxresdefault.jpg",
  "https://i1.sndcdn.com/artworks-WvBUI9oxT4qw0r12-jLFGeQ-t500x500.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7ce4f78-b48f-4757-8802-edbc133879ab/detbgh9-e57ce590-8135-4b46-a735-b1d008ac0bae.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3Y2U0Zjc4LWI0OGYtNDc1Ny04ODAyLWVkYmMxMzM4NzlhYlwvZGV0YmdoOS1lNTdjZTU5MC04MTM1LTRiNDYtYTczNS1iMWQwMDhhYzBiYWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6ES9UjqR4am2hSb7Gi9SPF5oK_Z23mbeX6fPSRx93TI"];
let songNames = [
  "Island (Nighttime) -     Animal Crossing New Leaf Music Extended",
  "fewest thoughts, head emptiest || video game music",
  "no thoughts, head empty || nintendo music [niche & obscure edition]"];

let artists = [
  "Animal Crossing",
  "Shadowwatnoon",
  "Nintendo"
];

let links = [
  "https://www.youtube.com/watch?v=u4cTteiooQE",
  "https://www.youtube.com/watch?v=mqd_Bex8BzI",
  "https://www.youtube.com/watch?v=wiHwfL9BtAg"
];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.




function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  // task 10: use `.push()` to add each input value to the correct array.
  let imageValue = image.value;
  let songNameValue = songName.value;
  let artistValue = artist.value;
  let songLinkValue = songLink.value;
  
  images.push(imageValue);
  songNames.push(songNameValue);
  artists.push(artist.value);
  links.push(songLink.value);

  
}


/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

for(let i = 0; i < images.length; i++){
imageColumn.insertAdjacentHTML('beforeend', `<img src=${images[i]}>`)
}
for(let i = 0; i < songNames.length; i++){
songColumn.insertAdjacentHTML('beforeend', `<p> ${songNames[i]}</p>`)
}

for(let i = 0; i < artists.length; i++){
artistColumn.insertAdjacentHTML('beforeend', `<p> ${artists[i]}</p>`)
}

for(let i = 0; i < links.length; i++){
linkColumn.insertAdjacentHTML('beforeend',`<a href="${links[i]}">Link</a>`)
}
  
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();


console.log(images.length);
  