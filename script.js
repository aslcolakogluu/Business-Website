function playVideo() {
  const videoBox = document.querySelector(".video-box");
  const video = document.getElementById("video");
  const playButton = document.querySelector(".play-button");

  
  videoBox.classList.remove("blur-active");
  videoBox.classList.add("video-active");
  playButton.classList.add("hidden");

  
  
  video.muted = true;

  video.play().catch((e) => {
    console.error("Video oynatılamadı:", e);
  });
}
