<?php
require("dataLayer.php");
header("Content-Type: text/html; charset=utf-8");

# Header required when receiving content from the ajax at the front-end
header('Content-type: application/json');

# Execute the action that is being called in the ajax at the front-end
$action = $_POST['action'];

switch ($action) {
    case 'GET-QUESTIONS':
        getQuestions();
        break;
}

function getQuestions() {
    $conexion = isThereConnection();
    $arrayQuestions = getQuestionsDB();
    $jsonObject = array(
        "connection" => $conexion,
        "response" => $arrayQuestions
    );  
    echo json_encode($jsonObject);
}

?>