// declare input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");


// declare add button
let add = document.querySelector(".add");

// arrays
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

// add song info function (push user input (as values) into arrays)

// if any bar is empty, stop and dont do anyhitng, else run below

function addSongInfo() {
  if (image.value === "" || songName.value === "" || artist.value === "" || songLink.value === "") {
return;
  }
  else {
    let imageValue = image.value;
    let songNameValue = songName.value;
    let artistValue = artist.value;
    let songLinkValue = songLink.value;
    images.push(imageValue);
    songNames.push(songNameValue);
    artists.push(artistValue);
    links.push(songLinkValue);
  }
}

let playlistTable = document.querySelector(".playlistTable");

// empty the table (refresh)
function emptyDisplay() {
  // playlistTable.innerHTML = "";
  let rowCount = playlistTable.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    playlistTable.deleteRow(i);

  }
}

// display each each new piece of information a row split in 4 (1 for each piece of info) using string interpolation
function displaySongInfo() {
  for (let i = 0; i < images.length; i++) {
    playlistTable.insertAdjacentHTML("beforeend", `
  <tr>
    <td width = 25%><img width = 50% src="${images[i]}"></td>
    <td width = 25%><p>${songNames[i]}</p></td>
    <td width = 25%><p>${artists[i]}</p></td>
    <td width = 25%><a href = "${links[i]}">Link</a></td>
  </tr>`)
  }
}

// when button is clicked, clear the current table, add the new info to array, and show the new updated table
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
  image.value = "";
  songName.value = "";
  artist.value = "";
  songLink.value = "";

};

// start the screen by showing the songs in array by default
displaySongInfo();