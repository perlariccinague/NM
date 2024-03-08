<?php
    $url = 'https://maltflour.com/_export_table_download_table?action=exportTable&key=c13e6c2a-7883-4e18-9c25-61befdad5a5d';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, false);
    $data = curl_exec($curl);
    curl_close($curl);

?>
