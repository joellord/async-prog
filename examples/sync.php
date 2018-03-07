<?php
  
echo("Before reading file\n");
$fileContents = file_get_contents("sample.txt");
echo("After file read\n");

echo("Before HTTP request\n");
$ch = curl_init("https://swapi.co/api/planets/1/"); 
$data = curl_exec($ch);
curl_close($ch);
echo("After HTTP request\n");