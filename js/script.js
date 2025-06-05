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
