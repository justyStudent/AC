<?php 

$connection = mysqli_connect('address', 'login', 'password', 'column on table');
if($connection == false){
echo 'Не удалось подключиться к базе данных! <hr>';
echo mysqli_connect_error();
exit();
}
