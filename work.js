const images = document.querySelectorAll(".clicks img");
const viewer = document.getElementById("imageViewer");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.getElementById("closeBtn");

images.forEach(img => {
  img.addEventListener("click", () => {
    viewer.style.display = "flex";
    fullImage.src = img.src;
  });
});

closeBtn.onclick = () => {
  viewer.style.display = "none";
};

viewer.onclick = (e) => {
  if(e.target !== fullImage){
    viewer.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {

const videos = document.querySelectorAll("video");

videos.forEach(video => {

video.addEventListener("play", () => {

videos.forEach(v => {
if(v !== video){
v.pause();
}
});

});

});

});
