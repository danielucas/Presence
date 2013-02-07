<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" lang="en-US" dir="ltr">
<![endif]-->
<!--[if IE 7]>
<html id="ie7" lang="en-US" dir="ltr">
<![endif]-->
<!--[if IE 8]>
<html id="ie8" lang="en-US" dir="ltr">>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html lang="en-US" dir="ltr">
<!--<![endif]-->
<head>
<title>PRESENCE</title>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="play.js"></script>
<link rel="stylesheet" href="style.css" type="text/css" media="screen">

<?php function random_vid($dir = 'media'){$files = glob($dir . '/*.mp4*'); $file = array_rand($files);return $files[$file];} 
function random_ogg($dir = 'media') { $files = glob($dir . '/*.ogv*'); $file = array_rand($files); return $files[$file]; }
function random_webm($dir = 'media') { $files = glob($dir . '/*.webm*'); $file = array_rand($files); return $files[$file]; }
?>
</head>
<body>

<h1 class="title">PRESENCE</h1>
<h3 class="controls" style="display:none">Play/Pause</h3>
<h4 class="credits">a SPECULUM project <br><br>video & audio - yana tutunik / / jQuery & php - daniel lucas</h4>

<video preload="auto" id="vid" >
  <source src="<?php echo random_vid(); ?>" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source src="<?php echo random_webm(); ?>" type='video/webm; codecs="vp8.0, vorbis"' />
  <source src="<?php echo random_ogg(); ?>" type='video/ogg; codecs="theora, vorbis"' />
</video>

<video preload="auto" style="display:none" >
  <source src="<?php echo random_vid(); ?>" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  <source src="<?php echo random_webm(); ?>" type='video/webm; codecs="vp8.0, vorbis"' />
  <source src="<?php echo random_ogg(); ?>" type='video/ogg; codecs="theora, vorbis"' />
</video>

<video preload="auto" style="display:none">
</video>

<audio id="audio" height="100" width="400">
  <source src="media/PUSHING-FINAL-2013.mp3" type="audio/mpeg">
  <source src="media/PUSHING-FINAL-2013.ogg" type="audio/ogg">
  <embed height="100" width="400" src="media/PUSHING-FINAL-2013.mp3">
</audio>
</body>
</html>