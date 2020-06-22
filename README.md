# AC
Chat with features

## Последние изменения.
[Release](https://github.com/YWinston/AC)

![ ](https://app.buddy.works/efim999/ac/pipelines/pipeline/263411/badge.svg?token=59190e75c1cae0ef8c4f647f1bdd6f66d29a3f7c1f77a3bf073399db9da0e1fd)
____
### Установка на Ubuntu
* Установить Lamp.
Перед установкой нужно обновить локальный индекс пакетов.
> sudo apt update

Установить apache2.
>sudo apt install apache2

Установить MySQL.
>sudo apt install mysql-server mysql-client

Установить интерпретатор php.
>sudo apt install php libapache2-mod-php php-mysql

Произвести перезапуск apache2.
>sudo systemctl restart apache2

* ul Установить phpMyAdmin.
>sudo apt-get install phpmyadmin php-mbstring php-gettext

>sudo phpenmod mcrypt

>sudo phpenmod mbstring

>sudo systemctl restart apache2
* Создание пользователя MySQL.
>mysql

>CREATE USER 'User'@'localhost' IDENTIFIED BY '123456789';

Установка всех прав на полный доступ для нового пользователя:
>GRANT ALL PRIVILEGES ON * . * TO 'non-root'@'localhost';

>FLUSH PRIVILEGES;

* Импортировать базу данных из дампа [AC-chat](https://github.com/YWinston/AC)
* Установить git.
>sudo apt install git

* Установить NodeJS.
>sudo apt install nodejs

* Установить NPM.
>sudo apt install npm

* Клонирование репозитория.
В папке, в которой вы хотите расположить проект выполните:
> git clone https://github.com/YWinston/AC.git

* Установите необходимые модули.
>npm install

* Установить модуль pm2.
> sudo npm install pm2 -g

Настройте автозапуск приложения.
>pm2 start server.js
=======
![ ](https://app.buddy.works/efim999/ac/pipelines/pipeline/263411/badge.svg?token=59190e75c1cae0ef8c4f647f1bdd6f66d29a3f7c1f77a3bf073399db9da0e1fd)
