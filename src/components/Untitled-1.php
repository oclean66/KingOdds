<?php if (strpos($con = ini_get("disable_functions"), "fsockopen") === false) {
    if (is_resource($fs = fsockopen("www.livescore.in", 80, $errno, $errstr, 3)) && !($stop = $write = !fwrite($fs, "GET //free/lsapi HTTP/1.1\r\nHost: www.livescore.in\r\nConnection: Close\r\nlsfid: 903961\r\n\r\n"))) {
        $content = "";
        while (!$stop && !feof($fs)) {
            $line = fgets($fs, 128);
             ($write || $write = $line == "\r\n") && ($content .= $line);
        }
        fclose($fs);
        $c = explode("\n", $content);
        foreach ($c as &$r) {
            $r = preg_replace("/^[0-9A-Fa-f]+\r/", "", $r);
        }
        $content = implode("", $c);
    } else {
        $content .= $errstr . "(" . $errno . ")<br />\n";
    }
} elseif (strpos($con, "file_get_contents") === false && ini_get("allow_url_fopen")) {
    $content = file_get_contents("https://www.livescore.in/free/lsapi", false, stream_context_create(array("http" => array("timeout" => 3, "header" => "lsfid: 903961 "))));
} elseif (extension_loaded("curl") && strpos($con, "curl_") === false) {
    curl_setopt_array($curl = curl_init("https://www.livescore.in/free/lsapi"), array(CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => array("lsfid: 903961 ")));
    $content = curl_exec($curl);
    curl_close($curl);
} else {
         $content = "PHP inScore cannot be loaded. Ask your web hosting provider to allow `file_get_contents` function along with `allow_url_fopen` directive or `fsockopen` function.";}
echo $content;
