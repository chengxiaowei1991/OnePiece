var playVideo=document.getElementsByTagName('video')[0];
playVideo.onclick=function(){
	if(playVideo.paused){
        playVideo.play();
    }else{
        playVideo.pause();
    }
}

//var playVideo = document.getdocumentElement;
//W3C
function fullScreen(){
	if (playVideo.requestFullscreen) {
    	playVideo.requestFullscreen();
	}
//FireFox
	else if (playVideo.mozRequestFullScreen) {
    	playVideo.mozRequestFullScreen();
	}
//Chrome等
	else if (playVideo.webkitRequestFullScreen) {
    	playVideo.webkitRequestFullScreen();
	}
//IE11
	else if (elem.msRequestFullscreen) {
    	elem.msRequestFullscreen();
	}
}
function escScreen(){
	if (document.exitFullscreen) {
   		document.exitFullscreen();
	}
	else if (document.mozCancelFullScreen) {
    	document.mozCancelFullScreen();
	}
	else if (document.webkitCancelFullScreen) {
    	document.webkitCancelFullScreen();
	}
	else if (document.msExitFullscreen) {
    	document.msExitFullscreen();
	}
}
playVideo.ondblclick=function(){
	fullScreen();
	escScreen();
}
