<?php
  require 'phpmailerautoload.php';

  if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

    $name = strip_tags( trim( $_POST['name'] ) );
    if ( preg_match('/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/', $_POST['email'] ) ) {
      $email = trim( $_POST['email'] );
    }

    if ( isset($_POST['services']) ) {
      $servicesArray = $_POST['services'];
    }

    $mail = new PHPMailer;

    $mail->From = 'inquiry@sparkhouse.com';
    $mail->FromName = 'Sparkhouse Bot';
    $mail->addAddress('hello@akwright.com', 'Alex Wright');
    $mail->addAddress('gabe@sparkhousestudios.com', 'Gabe Kwakyi');
    $mail->addAddress('gregory@sparkhousestudios.com', 'Greg Klein');

    $mail->Subject = 'You have a new inquiry!';

    $mail->Body    = 'It\'s our time to spark!<br><br>';
    $mail->Body   .= '<p><b>Inquirer:</b> ' . $name . '</p>';
    $mail->Body   .= '<p><b>Inquirer Email:</b> ' . $email . '</p>';
    $mail->Body   .= '<p><b>Services Interested In:</b><br>';

    $count = count($servicesArray);
    for ( $i = 0; $i < $count; $i++ ) {
      $mail->Body .= '- ' . $servicesArray[$i];
      if ($i < ($count - 1) ) {
        $mail->Body .= '<br>';
      }
    }

    $mail->Body   .= '</p>';
    if ( isset($_POST['message']) ) {
      $message = htmlentities ( trim( $_POST['message'] ), ENT_NOQUOTES );
      $mail->Body .= '<p><b>Inquirer Message:</b><br>' . $message; 
    }
    $mail->Body   .= '<br><br><i>keep it juicy</i>';

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->AltBody = 'It\'s our time to spark!\r\n\r\n';
    $mail->AltBody.= 'Inquirer: ' . $name . '\r\n';
    $mail->AltBody.= 'Inquirer Email: ' . $email . '\r\n';
    $mail->AltBody.= 'Services Interested In:\r\n';

    $count = count($servicesArray);
    for ( $i = 0; $i < $count; $i++ ) {
      $mail->AltBody .= '- ' . $servicesArray[$i];
      if ($i < ($count - 1) ) {
        $mail->AltBody .= '\r\n';
      }
    }

    $mail->AltBody.= '\r\n';
    if ( isset($_POST['message']) ) {
      $message = htmlentities ( trim( $_POST['message'] ), ENT_NOQUOTES );
      $mail->AltBody .= 'Inquirer Message:\r\n' . $message; 
    }

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
  } else {
    echo "Failure!";
  }
?>