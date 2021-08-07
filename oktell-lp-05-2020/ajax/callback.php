<?php
/**
 * Форма обратного звонка внизу страницы
 */

$mail_to = 'your@yourdomain.ru';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= 'From: <info@oktell.ru>' . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$theme = 'Заявка с сайта oktell.ru';

$phone = $_POST['callback-phone'];
$message='
    <h3>Получена заявка с сайта oktell.ru:</h3>
    <div style="margin:15px 0;padding:20px;border:1px #f2f2f2 solid;">
    <p>Телефон: <b>'.$phone.'</b></p>
    </div>
    ';
mail($mail_to, $theme, $message, $headers);
?>