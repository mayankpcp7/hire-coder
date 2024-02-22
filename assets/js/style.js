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
function showTab(tabIndex) {
  // Hide all tab content sections
  document.querySelectorAll('[id^="tab"]').forEach((tab) => {
    tab.classList.add("hidden");
  });

  // Show the selected tab content section
  document.getElementById("tab" + (tabIndex + 1)).classList.remove("hidden");
}
// how it works
document.getElementById('London').style.display = "block";
document.querySelector('.tablinks.active').classList.remove('active');
document.querySelector('.tablinks:first-child').classList.add('active');

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById('London').style.display = "block";
document.querySelector('.tablinks.active').classList.remove('active');
document.querySelector('.tablinks:first-child').classList.add('active');

//show more btn
var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("click", function () {
    if (content.style.display === "none") {
        content.style.display = "block";
        toggleBtn.textContent = "Show Less";
    } else {
        // If visible, hide the content
        content.style.display = "none";
        toggleBtn.textContent = "Show More...";
    }
});
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
// total experience
var card = document.getElementById("subjectcard");
var card2 = document.getElementById("subjectcard2");
var card3 = document.getElementById("subjectcard3");
var card4 = document.getElementById("subjectcard4");
var card5 = document.getElementById("subjectcard5");
var card6 = document.getElementById("subjectcard6");
var card7 = document.getElementById("subjectcard7");
var card8 = document.getElementById("subjectcard8");
var less = document.getElementById("less");
var more = document.getElementById("more");
function showcards() {
  card.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card7.classList.toggle("hidden");
  card8.classList.toggle("hidden");
  more.style.display = "none";
   less.style.display = "flex";
}
function hidecards() {
  card.classList.add("hidden");
  card2.classList.add("hidden");
  card3.classList.add("hidden");
  card4.classList.add("hidden");
  card5.classList.add("hidden");
  card6.classList.add("hidden");
  card7.classList.add("hidden");
  card8.classList.add("hidden");
  less.style.display = "none";
  more.style.display = "flex";
}
