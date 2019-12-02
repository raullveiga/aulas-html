
var videoPlayer = document.getElementById("videoPlayer");
var audioPlayer = document.getElementById("audioPlayer");
function playVideo(){
    videoPlayer.play();
}


function pauseVideo(){
    videoPlayer.pause();
    videoPlayer.load();
}

function restartVideo(){
    videoPlayer.currentTime = 0;
}



function playAudio(){
    audioPlayer.play();
}


function pauseAudio(){
    audioPlayer.pause();
    audioPlayer.load();
}

function restartAudio(){
    audioPlayer.currentTime = 0;
}