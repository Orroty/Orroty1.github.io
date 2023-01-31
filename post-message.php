 <?php
 function ins($author,$message,$datet)
            require __DIR__. '/db.php';
            $pdo = db();
            $sql = "INSERT INTO messages (author, message, timet) VALUES (:name, :message, :datet)";

       ?>

 <?php
 function getmes()
            require __DIR__. '/db.php';
            $pdo = db();
            $result = $mysqli->query("SELECT * FROM (SELECT * FROM messages ORDER BY id DESC LIMIT 10) ORDER BY id ASC");
            return $result;
       ?>