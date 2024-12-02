// Links
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // Navigation logic
  const links = [
    'index.html',
    // 'hamilton_future.html',
    'elysium.html',
    // 'futureofcars.html',
    'futureofchinesearchitecture.html',
    'next1000years.html',
    'soccerinthefuture.html',
    'thefutureofcamping.html',
    'bordersandclimatechange.html',
    'thefutureofchinesetradition.html',
    'thefutureofmusic.html'
    // 'ukranianwar.html'
  ];

  // Determine the current index based on the current URL
  const currentUrl = window.location.pathname.split('/').pop(); // Gets the current file name
  let currentIndex = links.indexOf(currentUrl);

  // Fallback if the current page isn't in the list
  if (currentIndex === -1) {
    console.warn('Current page not found in links array.');
    currentIndex = 0; // Default to the first link
  }

  // Navigate to a specific index
  const navigateTo = (index) => {
    if (index >= 0 && index < links.length) {
      window.location.href = links[index];
    }
  };

  // Event listeners for navigation
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + links.length) % links.length;
    navigateTo(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % links.length;
    navigateTo(currentIndex);
  });
});



// VR button 
document.addEventListener('DOMContentLoaded', () => {
  const mediaElements = document.querySelectorAll('video, audio');
  const scene = document.querySelector('a-scene');

  // Listen for the "enter-vr" event
  scene.addEventListener('enter-vr', () => {
    mediaElements.forEach(media => {
      if (media.paused) {
        media.play();
      }
    });
  });

  // Optional: Pause media when exiting VR
  scene.addEventListener('exit-vr', () => {
    mediaElements.forEach(media => {
      if (!media.paused) {
        media.pause();
      }
    });
  });
});
