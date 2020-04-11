<?php
if ((isset($_POST['ping']) && isset($_POST['download']) && isset($_POST['upload']))) {
    $dados = array();

    $dados[0] = $_POST['ping'] . " ";
    $dados[1] = $_POST['download'] . " ";
    $dados[2] = $_POST['upload'] . "\n";


    $pwd = getcwd();

    $arquivo = $pwd . "/arquivo/arquivo.log";
    file_put_contents($arquivo, $dados, FILE_APPEND);

    $dados[0] = "Ping: " . $_POST['ping'] . "ms <br>";
    $dados[1] = "Download: " . $_POST['download'] . "Mbps <br>";
    $dados[2] = "Upload: " . $_POST['upload'] . "Mbps <br>";
?>

    <html>

    <head>
        <title>Página WEB OK!</title>
    </head>

    <body>
        <h1><?php
            try {
                for ($i = 0; $i < 3; $i++) {
                    echo $dados[$i];
                }
            } catch (\Throwable $th) {
                echo "Nada para ver aqui, siga em frente";
            } finally {
                sleep(5);
                echo "<script>window.close();</script>";
            }
            ?></h1>
    </body>

    </html>


<?php
} else {

?>

    <html>

    <head>
        <title>Página WEB Não OK!</title>
    </head>

    <body>
        <h1><?php echo "Nada para ver aqui, siga em frente"; ?></h1>

    </html>


<?php
}

?>