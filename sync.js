$(document).ready(function(){

	$(document).keypress(function(e) { switch(e.which) { case 32: $('video').get(0).play(); $('audio').get(0).play(); break;}  });
	

/*	$('video').on('timeupdate', function(event) {
	    var current = Math.round(event.target.currentTime * 1000);
	    var total = Math.round(event.target.duration * 1000);
	
	    if ( ( total - current ) < 20000 ) {
			$(this).fadeOut(20000).next().fadeIn(20000).get(0).play();
		} 
	});
*/

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
   		$('<video controls preload="auto" style="display:none"></video>').insertAfter('video:last-of-type').on('play', vidfade).on('ended', addvid); 		
	}
	
/*	function testvid() {
		$(this).fadeOut(200);
	}
*/

   $('audio').on('ended', function(){ 
   		$('video').fadeOut(5000, function() { 
   			setTimeout(function(){ 
   				$('video').remove();
   			}, 5000); 
   		}); 
   	});
   	
   	$('video').on('play', vidfade).on('ended', addvid);
   	
   	   
/*   $('video').on('play', vidfade).on('ended', function(){	
   		$(this).remove();
   		$('video:last-of-type').load('vid.php source'); 
   		$('<video controls preload="auto" style="display:none"></video>').insertAfter('video:last-of-type'); 
   	});
  	
   $('<video controls preload="auto"><source src="media/Sequence06.mp4" /></video controls>').insertAfter('audio').on('play', vidfade);
 */  	   	

});



/**  if($('audio').attr('canPlayType')){
    
    var timestamps = [],
        last = 0,
        all = 0,
        now = 0,
        old = 0,
        i=0;

    $('video').each(function(o){
      if($(this).attr('start')){
        timestamps.push({
          start : +$(this).attr('start'),
          end : +$(this).attr('end'),
          elm : $(this)
        });
      }
    });
    
    all = timestamps.length;

   $('audio').bind('timeupdate',function(event){
      now = parseInt(this.currentTime);

      if(now > old){
        showsection(now);
      }
      old = now;

    });

    function showsection(t){
      for(i=0;i<all;i++){
        if(t >= timestamps[i].start && t <= timestamps[i].end){
          timestamps[i].elm.fadeIn(5000).each(function(o){
          	$(this).get(0).play();
          	o;          	
          });
        } else {
          timestamps[i].elm.fadeOut(5000);
        }
      }
    };
   
  };
  
**/
    




/** 
$(window).bind('load', function(){
	setTimeout(function(){ 
		$('*[type="hidden"]:nth-of-type(2)').attr('preload', 'auto').each(function(){
			$(this).children('source').attr("src", function() {return this.title;}).attr("title", "");	})	
	;}, 5000)

	setTimeout(function(){ 
		$('*[type="hidden"]:nth-of-type(3)').attr('preload', 'auto').each(function(){
			$(this).children('source').attr("src", function() {return this.title;}).attr("title", "");	})	
	;}, 5000)

	
});

**/