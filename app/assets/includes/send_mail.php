<?php
  if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

    $name = strip_tags( trim( $_POST['name'] ) );
    if ( preg_match('/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/', $_POST['email'] ) ) {
      $email = trim( $_POST['email'] );
    }

    if ( isset($_POST['services']) ) {
      $servicesArray = $_POST['services'];
    }

    if ( isset($_POST['message']) ) {
      $message = htmlentities ( trim( $_POST['message'] ), ENT_NOQUOTES );
    }

    //Include the phpmailer functions
    require_once( 'phpmailer-config.php' );

    $to = array(
      'Alex Wright'     => 'hello@akwright.com',
      'Gabe Kwakyi'     => 'gabe@sparkhouselabs.com',
      'Gregory Klein'   => 'gregory@sparkhouselabs.com',
      'Nico Grossfield' => 'nico@sparkhouselabs.com'
    );
    
    //Send the message assigned to a var so we can output
    $status = send_message( 'inquiry@sparkhouselabs.com', 'Sparkhouse Bot', $to, 'You have a new inquiry!', $name, $email, $servicesArray, $message );

    echo $status;
  } else {
    echo "Failure!";
  }
?>