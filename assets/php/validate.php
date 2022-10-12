<?php



if (isset($_POST['email']) && !empty($_POST['email'])) {



  $nome = addslashes($_POST['name']);
  $email = addslashes($_POST['email']);
  $mensagem = addslashes($_POST['message']);


  $to = "contato@besirius.com.br";
  $subject = "Contato - Sirius Educação";
  $body = "Nome: " . $nome . "\r\n" .
    "Email: " . $email . "\r\n" .
    "Mensagem: " . $mensagem;
  $header = "From:bruno@besirius.com.br" . "\r\n" .
    "Reply-To: " . $email . "\e\n" .
    "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $body, $header)) {

    echo ("Email enviado com sucesso!");
  } else {

    echo ("O Email não pode ser enviado");
  }
}



?>

<!-- Form Sirius -->