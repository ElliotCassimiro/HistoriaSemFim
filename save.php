<?php
$text = $_POST['form_Historia'];
$file = fopen('saved.txt', 'a');
fwrite($file, $text . "\n");
fclose($file);
header('Location: index.php');
exit();
