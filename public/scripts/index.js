const videos = [
    "/img/camioneta1.mp4",
    "/img/camioneta2.mp4",
    "/img/camioneta3.mp4"
];

const videoPlayer = document.getElementById('video-background');
const videoContainer = document.getElementById('video-container');
let currentVideoIndex = 0;

function playVideo(index) {
    videoPlayer.src = videos[index];
    videoPlayer.play();
}

videoPlayer.addEventListener('ended', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    playVideo(currentVideoIndex);
});

async function suscribirse() {
    var email = document.getElementById("email").value;

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbztJCghU_lYyIPIVb_JuCG4_eFnPu8aHz9nqSPiwdcCFl9gfajOmXPXCJ3EDPKGMO4Q/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + encodeURIComponent(email),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();
      document.getElementById('mensaje').innerHTML = data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  }
        