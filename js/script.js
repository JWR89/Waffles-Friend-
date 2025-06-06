document.addEventListener('DOMContentLoaded', function() {
  const animationSection = document.getElementById('mercy-meadows-animation');
  const video = document.getElementById('welcome-video');
  const skipBtn = document.getElementById('skip-btn');
  const logo = document.getElementById('welcome-logo');

  function showLogo() {
    video.style.display = 'none';
    skipBtn.style.display = 'none';
    logo.style.display = 'block';
  }

  video.onended = showLogo;
  skipBtn.onclick = function() {
    showLogo();
    video.pause();
  };
});


  // Wait for the page to load
  document.addEventListener("DOMContentLoaded", function() {
    const fish = document.getElementById('hiddenFish');
    // Get the size of the window and the fish
    function placeFishRandomly() {
      const fishWidth = fish.offsetWidth;
      const fishHeight = fish.offsetHeight;
      const padding = 24;
      const maxX = window.innerWidth - fishWidth - padding;
      const maxY = window.innerHeight - fishHeight - padding;
      const randomX = Math.floor(Math.random() * maxX) + padding/2;
      const randomY = Math.floor(Math.random() * maxY) + padding/2;
      fish.style.left = randomX + 'px';
      fish.style.top = randomY + 'px';
    }
    placeFishRandomly();

    // Optional: Reposition on resize
    window.addEventListener('resize', placeFishRandomly);
  });

const fish = document.getElementById('hiddenFish');
const fishBanner = document.getElementById('fish-banner');
const bannerClose = document.getElementById('banner-close');

fish.addEventListener('click', function() {
  fishBanner.style.display = 'flex';
});

bannerClose.addEventListener('click', function() {
  fishBanner.style.display = 'none';
});

fishBanner.addEventListener('click', function(e) {
  if (e.target === fishBanner) fishBanner.style.display = 'none';
});