function navopen() {
  var mobilenav = document.getElementsByClassName("mobilenav")[0];
  mobilenav.style.right = "0%";
  document.body.style.overflow = "hidden";
}
function closenav() {
  var mobilenav = document.getElementsByClassName("mobilenav")[0];
  mobilenav.style.right = "-104%";
  document.body.style.overflow = "auto";
}
// header-slider

// experience codeers
var card = document.getElementById("subjectcard");
function showcards() {
  var additionalContent = document.querySelector(".showmorecard");
  if (additionalContent.style.display === "none") {
    additionalContent.style.display = "block";
  } else {
    additionalContent.style.display = "none";
  }
}
// header-tabs
function headeropenTab(headertabName) {
  var headertabContents = document.getElementsByClassName("headertab-content");
  for (var i = 0; i < headertabContents.length; i++) {
    headertabContents[i].style.display = "none";
  }
  document.getElementById(headertabName).style.display = "block";
}
// how it workks
function openTab(tabName) {
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// ---meet up----
function openvideo(videoName) {
  // Hide all tab contents
  var videoContents = document.getElementsByClassName("video-content");
  for (var i = 0; i < videoContents.length; i++) {
    videoContents[i].style.display = "none";
  }
  // Show the selected tab content
  document.getElementById(videoName).style.display = "block";
}
// meet up main video
const playPauseButton = document.getElementById("playPauseButton");
const videoPlayer = document.getElementById("videoPlayer");

let isPlaying = false;

playPauseButton.addEventListener("click", function () {
  if (isPlaying) {
    videoPlayer.pause();
    playPauseButton.textContent = "Play";
  } else {
    videoPlayer.play();
    playPauseButton.textContent = "Pause";
  }

  isPlaying = !isPlaying;
});
