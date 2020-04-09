<?php
if ((isset($_POST['ping']) && isset($_POST['download']) && isset($_POST['upload']))) {
$dados = array();

$dados[0] = $_POST['ping'] . " ";
$dados[1] = $_POST['download'] . " ";
$dados[2] = $_POST['upload'];


$pwd = getcwd();

$arquivo = $pwd . "/arquivo/arquivo.log";
file_put_contents($arquivo, $dados, FILE_APPEND);

?>

<html>
<head><title>Página WEB OK!</title></head>
<body><h1><?php 
try {
    echo implode(" | ", $dados);
    
} 
catch (\Throwable $th) {echo "Nada para ver aqui, siga em frente";} 
?></h1>
</body>
</html>


<?php 
}

else {

?>

<html>
<head>
<title>Página WEB Não OK!</title>
</head>
<body>
    <h1><?php echo "Nada para ver aqui, siga em frente";?></h1>
</html>


<?php 
}

?>