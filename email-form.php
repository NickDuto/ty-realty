<?php


  if(!isset($_POST['submit']))
    {
      echo "Error; Form must be submitted.";
    }
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $phone = $_POST['phone'];

  if(empty($name)||empty($visitor_email))
    {
      echo "Name and email are required.";
      exit;
    }

    $email_from = 'derrickduto@gmail.com';

  	$email_subject = "New Form submission";

  	$email_body = "You have received a new message from the user $name.\n".
                              "Here is the message:\n $message".

    $to = "derrickduto@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
 ?>
