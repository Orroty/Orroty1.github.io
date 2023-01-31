
<?php
    header('Location:index.php');
    $xmldoc = new DOMDocument();
    $xmldoc->load('xml\XMLFile.xml');

    $newAct = $_POST['message'];

    $root = $xmldoc->firstChild;



    $xmldoc->save('xml\XMLFile.xml');
?>