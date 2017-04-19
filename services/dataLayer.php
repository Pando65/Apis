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
    $sql = "SELECT * FROM Question";
    if ($result = mysqli_query($conn, $sql)) {
        $response = array();
        if($result->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($response, $row);
            }
        }
        return $response;
    }
    return null;
}

?>