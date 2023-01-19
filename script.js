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

let ACImage = `<img src = "https://i.ytimg.com/vi/EFlpPy-hj5o/maxresdefault.jpg">`
let ShadowImage = `<img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dmqd_Bex8BzI&psig=AOvVaw21iQVNDzkymw0eduqqruhr&ust=1670551415720000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJi064_36PsCFQAAAAAdAAAAABAI">`
let NintendoImage = `<https://i.scdn.co/image/ab6775700000ee85fc1724cf4e89079645b8c7b4">`



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let images = [
  ACImage,
  ShadowImage,
  NintendoImage];
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

  let imagesArrayLength = images.length;
  for (var i = 0; i < imagesArrayLength; i++) {
    imageColumn.insertAdjacentHTML("beforeend", "image");
  }
  let songNamesArrayLength = songNames.length;
  let artistsArrayLength = artists.length;

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
