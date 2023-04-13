<?php
  $text = $_POST['text'];
  $file = fopen('saved.txt', 'a');
  fwrite($file, $text . "\n");
  fclose($file);
