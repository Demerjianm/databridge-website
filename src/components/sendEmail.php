<?php
if(isset($_POST['email'])) {
 

    $email_to = "Sales@databridgemgmt.com";
    $email_subject = "Received Email from Customer";
 

 
     
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // not required
     
 
    $email_message .= "First Name: ".clean_string($name)."\n"
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
  
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
 
<?php
 
}
?>
