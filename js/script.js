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
  launchConfetti();
});
bannerClose.addEventListener('click', function() {
  fishBanner.style.display = 'none';
});

fishBanner.addEventListener('click', function(e) {
  if (e.target === fishBanner) fishBanner.style.display = 'none';
});

function launchConfetti() {
  confetti({
    particleCount: 180,
    spread: 80,
    origin: { y: 0.45 },
    colors: ['#FFD700', '#FF8C00', '#39C5E0', '#A5D17A', '#FF69B4', '#ffffff'],
    shapes: ['circle', 'square'],
    gravity: 0.7,
    scalar: 1.2,
  });
}

document.getElementById('share-fish-btn').addEventListener('click', function() {
  const shareUrl = 'https://waffles-and-friends.com';
  const shareImage = encodeURIComponent('https://waffles-and-friends.com/assets/treasure-map.png'); // Use your real image URL
  const shareText = encodeURIComponent("I found the hidden Jesus fish at waffles-and-friends.com! Can you find it?");
  // Facebook share dialog
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,
    '_blank'
  );
});

document.getElementById('copy-fish-share').addEventListener('click', function() {
  navigator.clipboard.writeText(
    "I found the hidden Jesus fish at https://waffles-and-friends.com! Can you find it?"
  ).then(() => {
    alert('Copied! Paste and share on TikTok, Facebook, or anywhere you want!');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("about-jesus.html")) return;

  const targetText = "Jesus";
  const replacementHTML = `<a href="/about-jesus.html" class="highlight-jesus">Jesus</a>`;

  const walk = (node) => {
    if (
      node.nodeType === 3 &&
      node.parentNode &&
      !["A", "TEXTAREA", "INPUT", "SCRIPT", "STYLE"].includes(node.parentNode.tagName)
    ) {
      const text = node.nodeValue;
      const regex = new RegExp(`\\b${targetText}\\b`, "g");
      if (regex.test(text)) {
        const span = document.createElement("span");
        span.innerHTML = text.replace(regex, replacementHTML);
        node.parentNode.replaceChild(span, node);
      }
    } else if (node.nodeType === 1 && node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
      }
    }
  };

  walk(document.body);
});

    const popup = document.querySelector(".popup-message");
    const closeButton = document.querySelector(".close-popup");

     document.addEventListener('DOMContentLoaded', function () {
      const popupModal = document.getElementById('popup-modal');
      const closeBtn = document.getElementById('close-popup');

      if (popupModal) {
        popupModal.style.display = 'block';

        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            popupModal.style.display = 'none';
          });
        }
      }
    });