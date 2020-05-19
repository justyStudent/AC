<!DOCTYPE html>
<html lang="ru">

<?php 
$token = bin2hex(random_bytes(32));
setcookie("token", $token, time() + 86400, '/');

if(isset($_COOKIE["token"])){
}else {
	header("Refresh:0");
}
require ('includes/db.php');

$data = $_POST;

if( isset($data['do_login']))
 	{
 		$log = $data['login'];		
 		$res1 = mysqli_query($connection, "SELECT * FROM `Users` WHERE `login` = '$log' ");
    	$pass = mysqli_fetch_assoc($res1);
    	$hash = $pass['password'];
    	
 		$errors = array();

	if( trim($data['login']) == '' )
		{
			$errors[] = 'Введите логин!';
		}	
	if( mysqli_num_rows($res1) == 0)
		{
			$errors[] = 'Пользователь с таким логином не зарегистрирован!';
		}
	if( trim($data['password']) == '' )
		{
			$errors[] = 'Введите пароль!';
		}
	if( password_verify($data['password'], $hash))
		{
		}else
		 {
			$errors[] = 'Неверный пароль!';
			}

	if( empty($errors) )
		{
			$result = mysqli_query($connection, "UPDATE `users` SET `token`= '$token' WHERE `login` = '$log' ");
						if($result == 'true'){
						header ("Location: main.html");
						exit();
					}else { echo 'Данные не обновлены! Ошибка настроек сайта!';}
		}else
		{
			echo '<div align="center" style="color: red;">' . array_shift($errors) . '</div><hr>';
		}
 	}	
?>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<title>Авторизация</title>
	</head>
	<body background="images\2.png">
		<div class="container mt-5" align="center">
			<h1 align="center" style = "height: 70px;"><font color="#FFCC00">Авторизация</font></h1>

				<form  action="index.php" method="POST">
					<p>
						<p1></p1>
						<input class="form-control" autocomplete="off" style = "width: 270px; height:50px;" placeholder="Логин" type="text" name="login" value="<?php echo @$data['login']; ?>">
					</p>

					<p>
						<p1></p1>
						<input class="form-control" autocomplete="off" style = "width: 270px; height:50px;" placeholder="Пароль" type="text" name="password" value="<?php echo @$data['password']; ?>">
					</p> 
					<p>
						<button class="btn btn-outline-warning" type="submit" name="do_login" style = "width: 100px; height: 47px;">Войти</button>
					</p>
					<a href="register.php" style="color: #CC9900">Нет аккаунта?</a>					
				</form>
		</div>
	</body>

</html>
