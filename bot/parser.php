<?php
	include('simple_html_dom.php');
	include('curl_query.php');

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$input = json_decode(file_get_contents('php://input'), true);
		$text = $input['text'];

		if($text = "news"){
			$A =  Array();
			$html 	 =  curl_get('https://yandex.ru');
			$dom  	 =  str_get_html($html);
			$i   	 =  1;
			$news = $dom->find('.news__item-content');
			foreach($news as $point){
				$A[$i] = $point->plaintext;
				$i++;
			}
		}
		$json = json_encode($A, JSON_UNESCAPED_UNICODE);
		echo $json;
	}
?>