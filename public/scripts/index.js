const videos = [
    "../img/camioneta1.mp4",
    "../img/camioneta2.mp4",
    "../img/camioneta3.mp4"
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

// Iniciar la reproducción del primer video al cargar la página
playVideo(currentVideoIndex);
