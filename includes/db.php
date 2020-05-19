<?php 

$connection = mysqli_connect('95.217.212.188', 'admin', 'owner', 'first_db');
if($connection == false){
echo 'Не удалось подключиться к базе данных! <hr>';
echo mysqli_connect_error();
exit();
}
