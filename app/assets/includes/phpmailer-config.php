<?php
/**
 * phpmailer-config.php
 * Provides assistive function to use PHPMailer class
 *
 * @author Bennett Stone
 * @link phpdevtips.com
 * @version 1.0
 * @date 10-Jul-2014
 * @package PHPMailer Demo
 **/

/**
 * Send messages using phpmailer
 * For SMTP, define user, pass, location, and port in global index.php or config.php
 *
 * @access public
 * @param string sender email
 * @param string receiver email
 * @param string subject
 * @param string message
 * @return string error
 * @return bool success
 */
function send_message( $from, $fromName, $to, $subject, $iname, $iemail, $iservices, $imessage ) {
    //Include the phpmailer files
    require_once( 'phpmailerautoload.php' );

    //Initiate the mailer class
    $mail = new PHPMailer();

    //Set the sender and receiver email addresses
    $mail->SetFrom( $from, $fromName );
    
    //We 'can' send to an array, in which case you'll want to explode at comma or line break
    foreach ($to as $name => $address) {
        $mail->addAddress( $address, $name );
    }

    //Set the message subject
    $mail->Subject = $subject;
  
    $message = file_get_contents( 'job-inquiry-email.php' );

    $count = count($iservices);
    $servicesString = '';

    for ( $i = 0; $i < $count; $i++ ) {
      $servicesString .= '<li>' . $iservices[$i] . '</li>';
    }

    $replacements = array(
        '({inquirer_name})' => $iname,
        '({inquirer_email})' => $iemail,
        '({inquirer_interests})' => $servicesString,
        '({inquirer_message})' => nl2br( stripslashes( $imessage ) )
    );
    $message = preg_replace( array_keys( $replacements ), array_values( $replacements ), $message );
    
    //Make the generic plaintext separately

    $plaintext = 'New Job Inquiry!\r\n\r\n';
    $plaintext.= 'Gentlemen — It\'s game time.\r\n';
    $plaintext.= 'Inquirer: ' . $iname . '\r\n';
    $plaintext.= 'Inquirer Email: ' . $iemail . '\r\n';
    $plaintext.= 'Services Interested In:\r\n';

    $count2 = count($iservices);
    for ( $j = 0; $j < $count2; $j++ ) {
      $plaintext .= '- ' . $iservices[$i];
      if ($i < ($count2 - 1) ) {
        $plaintext .= '\r\n';
      }
    }

    $plaintext.= '\r\n';
    $plaintext .= 'Inquirer Message:\r\n' . $imessage;

    //Send the message as HTML
    $mail->MsgHTML( stripslashes( $message ) ); 
    //Set the plain text version just in case
    $mail->AltBody = $plaintext;

    //Display success or error messages
    if( !$mail->Send() ) {
        return 'Message send failure: ' . $mail->ErrorInfo;
    } else {
        return 'Message has been sent.';
    }

}

/* End of file phpmailer-config.php */