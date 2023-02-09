// declare input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");


// declare add button
let add = document.querySelector(".add");

// arrays
let songs = []
let nook = {
  image: "https://i.ytimg.com/vi/EFlpPy-hj5o/maxresdefault.jpg",
  songName: "Island (Nighttime) -     Animal Crossing New Leaf Music Extended",
  artist: "Animal Crossing",
  songLink: "https://www.youtube.com/watch?v=u4cTteiooQE"
}
let yoshi = {
  image: "https://i1.sndcdn.com/artworks-WvBUI9oxT4qw0r12-jLFGeQ-t500x500.jpg",
  songName: "fewest thoughts, head emptiest || video game music",
  artist: "Shadowtoon",
  songLink: "https://www.youtube.com/watch?v=mqd_Bex8BzI"
}
let kirby = {
  image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7ce4f78-b48f-4757-8802-edbc133879ab/detbgh9-e57ce590-8135-4b46-a735-b1d008ac0bae.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3Y2U0Zjc4LWI0OGYtNDc1Ny04ODAyLWVkYmMxMzM4NzlhYlwvZGV0YmdoOS1lNTdjZTU5MC04MTM1LTRiNDYtYTczNS1iMWQwMDhhYzBiYWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6ES9UjqR4am2hSb7Gi9SPF5oK_Z23mbeX6fPSRx93TI",
  songName: "no thoughts, head empty || nintendo music [niche & obscure edition]",
  artist: "Nintedo",
  songLink: "https://www.youtube.com/watch?v=wiHwfL9BtAg"
}
songs.push(nook, yoshi, kirby);

// turn input into value and put them into a new object as characteristics of that object, then put that object into songs array
function addSongInfo() {
  if (image.value === "" || songName.value === "" || artist.value === "" || songLink.value === "") {
    return;
  }
  else {
    let imageValue = image.value;
    let songNameValue = songName.value;
    let artistValue = artist.value;
    let songLinkValue = songLink.value;

    let newSongName = {
      image: imageValue,
      songName: songNameValue,
      artist: artistValue,
      songLink: songLinkValue
    }
    songs.push(newSongName);
  }
}

let playlistTable = document.querySelector(".playlistTable");

// empty the table (refresh) except for the first row of table
function emptyDisplay() {
  let rowCount = playlistTable.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    playlistTable.deleteRow(i);

  }
}

// add new song info to the table
function displaySongInfo() {
  for (let i = 0; i < songs.length; i++) {
    playlistTable.insertAdjacentHTML("beforeend", `
  <tr>
    <td width = 25%><img width = 50% src="${songs[i].image}"></td>
    <td width = 25%><p>${songs[i].songName}</p></td>
    <td width = 25%><p>${songs[i].artist}</p></td>
    <td width = 25%><a href = "${songs[i].link}">Link</a></td>
  </tr>`)
  }
}

// everything that happens when you click submit button
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
  image.value = "";
  songName.value = "";
  artist.value = "";
  songLink.value = "";

};

// display everything existing in songs array by default
displaySongInfo();