<?php 

$connection = mysqli_connect('127.0.0.1', 'root', '', 'first_db');
if($connection == false){
echo 'Не удалось подключиться к базе данных! <hr>';
echo mysqli_connect_error();
exit();
}