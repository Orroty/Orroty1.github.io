<?php
function db() {
    $dsn = "mysql:dbname=messages_db;host=127.0.0.1;port=3306";
    $user = "root";
    $password = "";
    return new \PDO($dsn, $user, $password);
}
?>