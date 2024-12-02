
 // links
    document.addEventListener('DOMContentLoaded', () => {
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');

      // Navigation logic
      const links = [
        'hamilton_future.html',
        'elysium.html',
        'futureofcars.html',
        'futureofchinesearchitecture.html',
        'next1000years.html',
        'ukranianwar.html',
        'soccerinthefuture.html',
        'thefutureofcamping.html',
        'thefutureofchinesetradition.html',
        'thefutureofmusic.html'        
      ];

      let currentIndex = 0;

      const navigateTo = (index) => {
        if (index >= 0 && index < links.length) {
          window.location.href = links[index];
        }
      };

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
