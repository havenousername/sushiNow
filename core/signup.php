<?php
require_once 'config.php';

$surname = trim($_POST['surname']);
$name = trim($_POST['name']);
$pass = trim($_POST['password']);
$email = trim($_POST['email']);
$birthday = trim($_POST['birthday']);
$sex = trim($_POST['sex']);

if ($surname =='' OR $name =='' OR $pass=='' OR $email=='' OR $birthday=='' OR $sex ==''){
    echo 2;
    die;
}
if (!(filter_var($email, FILTER_VALIDATE_EMAIL))) {
    echo 3;
    die;
}
if (!preg_match('~\d~', $pass) || ! preg_match('~[a-zа-яё]~', $pass) || ! preg_match('~[A-ZА-ЯЁ]~', $pass)) {
    echo 4;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, surname, email, password, birthday, sex) VALUES ('".$name."', '".$surname."', '".$email."', '".$pass."', '".$birthday."', '".$sex."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>