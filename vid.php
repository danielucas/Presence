<?php function random_vid($dir = 'media') {
    $files = glob($dir . '/*.mp4*');
    $file = array_rand($files);
    return $files[$file];
} 
function random_ogg($dir = 'media') {
    $files = glob($dir . '/*.ogv*');
    $file = array_rand($files);
    return $files[$file];
}
function random_webm($dir = 'media') {
    $files = glob($dir . '/*.webm*');
    $file = array_rand($files);
    return $files[$file];
}
?>

<source src="<?php echo random_vid(); ?>" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
<source src="<?php echo random_webm(); ?>" type='video/webm; codecs="vp8.0, vorbis"' />
<source src="<?php echo random_ogg(); ?>" type='video/ogg; codecs="theora, vorbis"' />