<?php

function connection() {
    $host = "localhost";
    $username = "root"; //Mysql username
    $password = "root"; // Mysql password
    $db_name = "apisdb"; // Database name

    return new mysqli("$host", "$username", "$password", "$db_name");
}

function isThereConnection() {
    return connection()->ping() != null;
}

function getQuestionsDB() {
    $conn = connection();
    $sql_question = "SELECT * FROM question ORDER BY RAND()";
    if ($questions = mysqli_query($conn, $sql_question)) {
        $response = array();
        while ($q = $questions->fetch_assoc()) {
            // For each question, I will retrieve their answers.
            $sql_answer = "SELECT * FROM answer WHERE id_question = " . $q['id'] . " ORDER BY RAND()";
            if ($answers = mysqli_query($conn, $sql_answer)) {
                $answers_array = array();
                while ($a = $answers->fetch_assoc()) {
                    array_push($answers_array, $a);
                }
                $q["ans"] = $answers_array;
            }
            else {
                return null;
            }
            array_push($response, $q);
        }
        return $response;
    }
    return null;
}

?>