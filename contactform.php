<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">

    <title>JOSH MALLETT</title>

    <link rel='stylesheet' type='text/css' href='./css/cPHP.css' media='all and (max-width: 464.9px), (min-width: 465px) and (max-width: 740.9px), (min-width:741px) and (max-width:1000.9px), (min-width: 1001px) and (max-width:1368.9px), (min-width: 1369px), (max-height: 510px) and (max-width: 800px)'/>

    <link rel="shortcut icon"  href="favicon.ico" />

    <link rel='stylesheet' type='text/css' href='./css/cPHP.css'/>

    <script>
      setTimeout(function() {
        window.location.href = "https://josh-mallett.com/index.html";
      }, 4000);
    </script>

    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  </head>
  <body>

    <?php
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];
      $recipient = "joshmallett1@gmail.com";
      $subject = $name . " " . " has sent you a contact form message!";
      $formcontent=" From: $name \n Email: $email \n Message:  $message";


      if ($_POST['submit']);
        if ($name != '' && $message !='' && $email != '') {
          if (mail ($recipient, $subject, $formcontent)) {
            echo '<div class="successMsg"> <img src="./images/success.png" alt=""/><br><span>Message sent successfully! Redirecting...</span></div>';
            exit();
          } else {
            echo '<div class="failureMsg"> <img src="./images/success.png" alt=""/><br><span>Something went wrong! Please go back and try again! Redirecting...</span></div>';
            exit();
          }
        }
     ?>



  </body>
</html>
