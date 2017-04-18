<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['firstname'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "luca.guarro@gmail.com";
$subject = "New Message";

mail($to, $subject, $message, "From: " . $firstname . $lastname);
echo "Your Message has been sent";

?>