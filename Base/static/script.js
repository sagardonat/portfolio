
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.opacity = "1";
  cursor.style.mixBlendMode  = "difference";

  let targetX = e.clientX;
  let targetY = e.clientY;
  
  // Get the dimensions of the cursor
  const cursorWidth = cursor.offsetWidth / 2;
  const cursorHeight = cursor.offsetHeight / 2;

  function animate() {
      // Get current position of the custom cursor
      let currentX = parseFloat(cursor.style.left) || 0;
      let currentY = parseFloat(cursor.style.top) || 0;

      // Calculate the distance between the current position and the target position
      let dx = targetX - currentX - cursorWidth;
      let dy = targetY - currentY - cursorHeight;

      // Ease the movement by a factor (e.g., 0.1)
      let easeFactor = 0.3;
      currentX += dx * easeFactor;
      currentY += dy * easeFactor;

      // Set the new position of the custom cursor
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      // Continue animating until the custom cursor catches up
      requestAnimationFrame(animate);
  }

  animate();
});


const images = [
  {
    src: 'static/images/pictures (1).jpg',
    caption: 'Enjoy the beauty of nature <span class="text-red-500">all around</span>'
  },
  {
    src: 'static/images/pictures (2).jpg',
    caption: 'Just look around to see what\'s going on <span class="text-red-500">around you</span>'
  },
  {
    src: 'static/images/pictures (3).jpg',
    caption: 'Capture the moments <span class="text-red-500">forever</span>'
  },
  {
    src: 'static/images/pictures (4).jpg',
    caption: 'Adventure awaits <span class="text-red-500">everywhere</span>'
  }
];

let currentIndex = 0;

const updateSlideshow = () => {
  const imageElement = document.getElementById('slideshow-image');
  const captionElement = document.getElementById('caption');
  const indicators = document.getElementById('indicators').children;

  // Add exit animation
  imageElement.classList.remove('fade-enter', 'fade-enter-active');
  imageElement.classList.add('fade-exit', 'fade-exit-active');
  captionElement.classList.remove('fade-enter', 'fade-enter-active');
  captionElement.classList.add('fade-exit', 'fade-exit-active');

  setTimeout(() => {
    // Update image and caption after exit animation
    imageElement.src = images[currentIndex].src;
    captionElement.innerHTML = images[currentIndex].caption;

    // Remove exit animation and add enter animation
    imageElement.classList.remove('fade-exit', 'fade-exit-active');
    imageElement.classList.add('fade-enter', 'fade-enter-active');
    captionElement.classList.remove('fade-exit', 'fade-exit-active');
    captionElement.classList.add('fade-enter', 'fade-enter-active');

    // Update indicators
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove('bg-gray-800');
      indicators[i].classList.add('bg-gray-300');
    }
    indicators[currentIndex].classList.add('bg-gray-800');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;
  }, 1000); // Match this duration with your CSS transition duration
};

// Initial update
updateSlideshow();

// Update slideshow every 3 seconds
setInterval(updateSlideshow, 4000);




