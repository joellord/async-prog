<?
echo "Before Read";
$fileContents = file_get_contents("./pbnjmaker.js");
//echo $fileContents;
echo "After read";

echo "Before HTTP request\n";
$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,"https://wt-13aebf4eeaa9913542725d4a90e4d49e-0.run.webtask.io/meetupfinder");
$data = curl_exec($ch);
curl_close($ch);
echo $data;
echo "\n";
echo "After HTTP request\n";
?>