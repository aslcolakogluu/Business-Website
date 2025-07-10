function playVideo() {
  const cover = document.getElementById("video-cover");
  const video = document.getElementById("video");
  const playButton = document.querySelector(".play-button");

  // Kapak resmi gizle
  cover.style.display = "none";

  // Video göster ve oynat
  video.style.display = "block";
  video.play().catch(e => console.error("Video oynatılamadı:", e));

  // Oynatma butonunu gizle
  playButton.classList.add("hidden");
}

// Video bittiğinde kapak ve butonu geri göster
document.getElementById("video").addEventListener("ended", () => {
  const cover = document.getElementById("video-cover");
  const video = document.getElementById("video");
  const playButton = document.querySelector(".play-button");

  cover.style.display = "block";
  video.style.display = "none";
  video.currentTime = 0;
  playButton.classList.remove("hidden");
});


  const dots = document.querySelectorAll(".slider-dots .dot");
  const sliderTexts = document.querySelector(".slider-texts");

  dots.forEach(dot => {
    dot.addEventListener("mouseenter", () => {
      const index = dot.getAttribute("data-index");
      
      // Tüm dotlardan 'active' sınıfını kaldır
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");

      // Kaydır
      sliderTexts.style.transform = `translateX(-${index * 100}%)`;

      // Tüm slider-text'ten 'active' sınıfını kaldır
      document.querySelectorAll('.slider-text').forEach(txt => txt.classList.remove('active'));
      document.querySelectorAll('.slider-text')[index].classList.add('active');
    });
  });

