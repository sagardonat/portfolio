document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
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

