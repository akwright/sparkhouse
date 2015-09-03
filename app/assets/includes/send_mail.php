<?php
  $name  = $_REQUEST['name'];
  $email = $_REQUEST['email'];

  if ( isset($name) && isset($email) ) {
    $toEmail = "alexander.k.wright@gmail.com";
    $fromEmail = $email;
    $subject = "New inquiry!";
    $comment = "This is the body of the email.";
    if ( isset($_REQUEST['message']) ) {
      $comment .= "Also, here is the message from $fromEmail:\r\n$_REQUEST['message']";
    }

    mail($toEmail, "$subject", $comment, "From:" . $fromEmail);

    echo "Thank you for getting in touch with us. We'll get back to you within a day!";
  }
?>