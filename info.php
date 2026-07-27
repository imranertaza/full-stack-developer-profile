<?php
phpinfo();


$sent = mail(
    'imranertaza12@gmail.com',
    'PHP mail() Test',
    'This is a test email from PHP mail().',
    'From: no-reply@dnationsoft.com'
);

echo $sent ? '✅ mail() returned TRUE' : '❌ mail() returned FALSE';
?>
