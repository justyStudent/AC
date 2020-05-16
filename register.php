<!DOCTYPE html>
<html lang="ru">
<?php
$token = bin2hex(random_bytes(32));
setcookie("token", $token, time() + 86400, '/');
require ('includes/db.php');

	$data = $_POST;
	$log = @$data['login'];
	$eml = @$data['email'];
	
	if( isset($data['do_signup']))
	{
			$res1 = mysqli_query($connection, "SELECT * FROM `Users` WHERE `login` = '$log' ");
			$res2 = mysqli_query($connection, "SELECT * FROM `Users` WHERE `email` = '$eml' ");		
			$errors = array();

		if( trim($data['login']) == '' )
		{
			$errors[] = 'Введите логин!';
		}

		if( trim($data['email']) == '' )
		{
			$errors[] = 'Введите ваш электронный адрес!';
		}

		if( trim($data['password']) == '' )
		{
			$errors[] = 'Введите пароль!';
		}

		if( trim($data['password_2']) == '' )
		{
			$errors[] = 'Вы не ввели пароль повторно!';
		}

		if( $data['password_2'] != $data['password'] )
		{
			$errors[] = 'Пароли не совпадают!';
		}

		if( mysqli_num_rows($res1) != 0)
		{
			$errors[] = 'Пользователь с таким  логином уже существует!';
		}

		if( mysqli_num_rows($res2) != 0)
		{
			$errors[] = 'Пользователь с таким  Email уже существует!';
		}

		if( empty($errors) )
		{
			$query = mysqli_query($connection, "INSERT INTO `users` (`login`, `password`, `email`, `token`) VALUES ('".$data['login']."', '".password_hash($data['password'], PASSWORD_DEFAULT)."', '".$data['email']."', '".$token."')");
			header ("Location: main.html");
			exit();
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
		<title>Регистрация</title>
	</head>
		<body background="images\1.png">
			<div class="container mt-5">
					<h1 align="center"><font color="#FFCC00">РЕГИСТРАЦИЯ</font></h1>

				<form align="center" action="/Four/register.php" method="POST">
					<div align="center">					
						<p><font color="#CC9900">Ваш логин:</font></p>
						<input style = "width: 250px; height: 49px;" placeholder="Поле ввода" class="form-control" type="text" name="login" value="<?php echo @$data['login']; ?>">					
					</div>

					<div align="center">
						<p><font color="#CC9900">Ваш Email:</font></p>
						<input style = "width: 250px; height: 49px;" class="form-control" placeholder="Поле ввода" type="email" name="email" value="<?php echo @$data['email']; ?>">
					</div>

					<div align="center">
						<p><font color="#CC9900">Ваш пароль:</font></p>
						<input style = "width: 250px; height: 49px;" autocomplete="off" placeholder="Поле ввода" class="form-control" type="password" name="password">
					</div>

					<div align="center">
						<p><font color="#CC9900">Введите пароль ещё раз:</font></p>
						<input style = "width: 250px; height: 49px;" autocomplete="off" placeholder="Поле ввода" class="form-control" type="password" name="password_2">
					</div>
					<p>
						<div align="center">
							<button class="btn btn-outline-warning" style = "width: 250px; height: 49px;" type="submit" name="do_signup">Зарегистрироваться</button>
						</div>
					</p>
					<p> <a href="/Four/index.php"><font color="#CC9900">Уже зарегистрированы?</font></a> </p>
				</form>
			</div>
		</body>	
</html>
