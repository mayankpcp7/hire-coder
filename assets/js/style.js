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

// header-tabs
function headeropenTab(headertabName) {
  var tabheading = document.getElementById("tabheading");
  var headertabContents = document.getElementsByClassName("headertab-content");
  for (var i = 0; i < headertabContents.length; i++) {
    headertabContents[i].style.display = "none";
  }
  document.getElementById(headertabName).style.display = "block";
  if ((headertabContents.style.display = "block")) {
    tabheading.style.color = "#14A800";
  } else {
    tabheading.style.color = "white";
  }
}
// how it workks
function openTab(tabName) {
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  // Change color of active tab
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    if (tabButtons[i].getAttribute("data-tab") === tabName) {
      tabButtons[i].classList.add("active");
    } else {
      tabButtons[i].classList.remove("active");
    }
  }
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
// meetup dynamic videos
// meet up main video
function showImage(imageSrc) {
  var mainVideo = document.getElementById("mainVideo");
  mainVideo.src = imageSrc;
  mainVideo.style.display = "block";
}
// playvideo
function playVideo() {
  var video = document.getElementById("myVideo");
  video.play();
  document.getElementById("playbtn").style.opacity = 0;
}
