console.log('js ready');

setTimeout(function() {
  var playButton = document.getElementById('play');
  var playArrow = document.getElementById('play-arrow');
  var pauseLeft = document.getElementById('pause-left');
  var pauseRight = document.getElementById('pause-right');

  console.log(playButton);
  playButton.style.backgroundColor = "#EC4E32";
  playArrow.style.borderLeftColor = "#E9EBEA";
  pauseLeft.style.backgroundColor = "#E9EBEA";
  pauseRight.style.backgroundColor = "#E9EBEA";



  setTimeout(function() {
    playButton.style.backgroundColor = "#E9EBEA";
    playArrow.style.borderLeftColor = "#EC4E32";
    pauseLeft.style.backgroundColor = "#EC4E32";
    pauseRight.style.backgroundColor = "#EC4E32";
  }, 400)

}, 1800)


setTimeout(startSong, 2500)

function startSong() {
  var progressBar = document.createElement("div");
  var screen = document.getElementsByClassName("screen")[0];
  // console.log(screen);

  progressBar.className = 'song-bar';
  screen.appendChild(progressBar);

  createAlbumArt();
  playSong();
}

function createAlbumArt() {
  var screen = document.getElementsByClassName("screen")[0];
  var textDiv = document.getElementsByClassName("text")[0];
  var album = document.createElement("div");
  var title = document.createElement("div");
  var artist = document.createElement("div");
  var albumText = document.createElement("div");
  var track = document.getElementById('mp3');

  album.id = 'album-art';

  title.id = 'title';
  title.innerHTML = "America";

  artist.id = 'artist';
  artist.innerHTML = "Simon & Garfunkel";

  albumText.id = 'album-text';
  albumText.innerHTML = "Bookends";

  screen.appendChild(album);
  textDiv.appendChild(title);
  textDiv.appendChild(artist);
  textDiv.appendChild(albumText);
}




function playSong() {

  var ipod = document.getElementsByClassName("screen")[0];
  var songBarWidth = document.createElement("div");
  var width = 3;

  songBarWidth.className = 'song-bar-width';
  songBarWidth.style.width = width + "%";
  ipod.appendChild(songBarWidth);


  setInterval(function() {
    if (width < 90) {
      width++;
      console.log(width);
    } else {
      width = 3;
    }
    return songBarWidth.style.width = width + "%";

  }, 2551.72) //222000ms/87
  generateAudio();
}

function generateAudio() {
  var audioTag = document.getElementById("track-container");
  var audioSource = document.createElement("source");
  audioSource.id = "mp3";
  audioSource.src = "America.mp3";


  audioTag.appendChild(audioSource);
}
