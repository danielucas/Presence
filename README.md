Presence
========

Randomized Video playback with cross-fade. 

Description: 
  Using PHP we generate 3 HTML5 video elements with a randomly selected video as the source (videos exist in /media). 
  With jQuery we play the first video & tell it to fadeOut 20seconds before it finishes.
  We also tell the next video to fadeIn & begin playing 20seconds before the previous video finishes.
  When the first video ends, we remove it from the DOM & insert a new, blank, video element at the end of the DOM.
  Once the video element is added, we pull a new randomly selected video from the vid.php file (which contains the PHP function & a video element)
  We continue this loop until the Audio on the page finishes playing - at which point we fadeOut all the videos on the page & remove them from the DOM.

**Why:
  This project was built to act as the web presence of the video piece by the same name, created by Yana Tutunik.
  
**Uses:
  Could be used to create a randomly generated playlist of music - with crossfade playback - to create a seamless/endless playlist.
  Combine audio & video random generation & playback to create a dynamically generated Audio/Visual experience running in browser.
  Add/Remove media from the /media folder to add/remove it from the playback.
