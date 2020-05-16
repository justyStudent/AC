<?php 

require ('includes/db.php');


if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $input = json_decode(file_get_contents('php://input'), true);
    $token = $input['text'];
    
    $result	= mysqli_query($connection, "SELECT `login` FROM `users` WHERE `token` = '$token' ");
    
    if(mysqli_num_rows($result) != 0){
		$result	= mysqli_fetch_assoc($result);
		$login = $result['login'];
	}else{
		setcookie("token", "");
		$login = "quit";	
	}
	
	echo $login;
	exit();
}

?>