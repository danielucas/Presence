$(document).ready(function(){
var audio = document.getElementsByTagName('audio')[0];
var video = document.getElementsByTagName('video')[0];

function playOrPause() { if (audio.paused) { audio.play(); } else { audio.pause();} }
function playPause() { if (video.paused) { video.play(); } else { video.pause();} }

function vidResize(){var modWidth = $('video').width()/2; $('video').css('margin-left', -modWidth); }

function vidfade() {
	$(this).on('timeupdate', function(event) {
	    var current = Math.round(event.target.currentTime * 1000);
	    var total = Math.round(event.target.duration * 1000);
	
	    if ( ( total - current ) < 20000 ) {
			$(this).fadeOut(20000).next().fadeIn(20000).get(0).play();
		} 
	});
}

function addvid() {
	$(this).remove();
	$('video:last-of-type').load('vid.php source'); 
	$('<video controls preload="auto" style="display:none"></video>').insertAfter('video:last-of-type').ready(vidResize).on('play', vidfade).on('ended', addvid); 		
}

$(document).keydown(function(e){
    if (e.keyCode == 32) {
        $('audio').each(playOrPause);
        $('video').each(playPause)
    }
});

$('.controls').on('click', function() { $('audio').each(playOrPause); $('video').each(playPause) });

$('audio').on('ended', function(){ 
	$('video').fadeOut(5000, function() { 
		setTimeout(function(){ 
			$('video').remove();
		}, 5000); 
	}); 
});

$('video').on('play', vidfade).on('ended', addvid);
$(window).on('resize', vidResize);
$('video').ready(setTimeout(function(){ $('#vid').each(vidResize).addClass('ready'); $('.controls').fadeIn(); },1000)); 
});