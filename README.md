# AC
Chat with features
____
### Руководство по установки для пользователя:
Перейдите по адресу [AC.com](http://95.217.212.188/AC/)
Пройдите регистрацию.
Следуйте дальнейшим инструкциям.
### Руководство по установке для разработчика:
#### Установка на Ubuntu
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
### Система документирования.
Для документации кода используется система JSDoc. Ссылка для просмотра документации: [JSDoc](http://95.217.212.188:8000/global.html#listen)
Автоматическая генерация документации API реализована с помощью системы Swagger-jsdoc. Сслыка для просмотра документации API: [API](http://95.217.212.188:8000/api/)
