<?php
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
    exit;
}

// Get JSON or FormData input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// Extract & sanitize input fields
$clientName  = isset($data['clientName']) ? trim(filter_var($data['clientName'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)) : '';
$clientEmail = isset($data['clientEmail']) ? trim(filter_var($data['clientEmail'], FILTER_SANITIZE_EMAIL)) : '';
$projectType = isset($data['projectType']) ? trim(filter_var($data['projectType'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)) : 'Web Development';
$budget      = isset($data['budget']) ? trim(filter_var($data['budget'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)) : 'N/A';
$timeline    = isset($data['timeline']) ? trim(filter_var($data['timeline'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)) : 'N/A';
$message     = isset($data['message']) ? trim(filter_var($data['message'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)) : '';

// Validation
if (empty($clientName) || empty($clientEmail) || !filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid name and email address.'
    ]);
    exit;
}

$adminEmail = 'imranertaza12@gmail.com';
$submittedAt = date('F j, Y, g:i a');

// ==========================================
// 1. Email to Admin / Developer (Imran)
// ==========================================
$adminSubject = "New Project Collaboration Inquiry from " . $clientName;

$adminHtmlBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Project Inquiry</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #0f0f0f; color: #ffffff; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 30px; border-radius: 10px; border: 1px solid #ff2a4b;">
        <h2 style="color: #ff2a4b; margin-top: 0;">New Project Inquiry Received</h2>
        <hr style="border: 0; height: 1px; background: #333; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; color: #dddddd;">
            <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0;">' . htmlspecialchars($clientName) . '</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Client Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:' . htmlspecialchars($clientEmail) . '" style="color: #ff2a4b;">' . htmlspecialchars($clientEmail) . '</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Project Type:</td>
                <td style="padding: 8px 0;">' . htmlspecialchars($projectType) . '</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Estimated Budget:</td>
                <td style="padding: 8px 0;">' . htmlspecialchars($budget) . '</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px 0;">' . htmlspecialchars($timeline) . '</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Project Notes:</td>
                <td style="padding: 8px 0; line-height: 1.5;">' . nl2br(htmlspecialchars($message)) . '</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Submission Time:</td>
                <td style="padding: 8px 0;">' . $submittedAt . '</td>
            </tr>
        </table>
    </div>
</body>
</html>';

$adminHeaders  = "MIME-Version: 1.0" . "\r\n";
$adminHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$adminHeaders .= "From: Syed Imran Ertaza Portfolio <noreply@imran.dev>" . "\r\n";
$adminHeaders .= "Reply-To: " . $clientEmail . "\r\n";

// ==========================================
// 2. Confirmation Email to Client
// ==========================================
$clientSubject = "Thank you for your project inquiry - Syed Imran Ertaza";

$clientHtmlBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Inquiry Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #0f0f0f; color: #ffffff; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 30px; border-radius: 10px; border: 1px solid #333333;">
        <h2 style="color: #ffffff; margin-top: 0;">Dear ' . htmlspecialchars($clientName) . ',</h2>
        <p style="color: #cccccc; line-height: 1.6; font-size: 16px;">
            Thank you for reaching out! Your project inquiry has been successfully received.
        </p>
        <div style="background-color: #111111; padding: 20px; border-radius: 8px; border-left: 4px solid #ff2a4b; margin: 20px 0;">
            <h4 style="color: #ff2a4b; margin-top: 0; margin-bottom: 10px;">Summary of Inquiry:</h4>
            <p style="margin: 5px 0; color: #dddddd;"><strong>Project Type:</strong> ' . htmlspecialchars($projectType) . '</p>
            <p style="margin: 5px 0; color: #dddddd;"><strong>Estimated Budget:</strong> ' . htmlspecialchars($budget) . '</p>
            <p style="margin: 5px 0; color: #dddddd;"><strong>Estimated Timeline:</strong> ' . htmlspecialchars($timeline) . '</p>
        </div>
        <p style="color: #cccccc; line-height: 1.6; font-size: 15px;">
            I will review your project details and get back to you within 24 hours to discuss how we can bring your vision to life.
        </p>
        <br>
        <p style="color: #ffffff; margin-bottom: 5px; font-weight: bold;">Best regards,</p>
        <p style="color: #ff2a4b; margin-top: 0; font-weight: bold; font-size: 16px;">Syed Imran Ertaza</p>
        <p style="color: #888888; font-size: 14px; margin-top: 0;">Full-Stack Web Developer<br>Email: imranertaza12@gmail.com | Phone: +8801924329315<br>GitHub: https://github.com/imranertaza | YouTube: https://www.youtube.com/@codefixx</p>
    </div>
</body>
</html>';

$clientHeaders  = "MIME-Version: 1.0" . "\r\n";
$clientHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$clientHeaders .= "From: Syed Imran Ertaza <imranertaza12@gmail.com>" . "\r\n";
$clientHeaders .= "Reply-To: imranertaza12@gmail.com" . "\r\n";

// Send emails using PHP mail() function
$mailAdminSent  = @mail($adminEmail, $adminSubject, $adminHtmlBody, $adminHeaders);
$mailClientSent = @mail($clientEmail, $clientSubject, $clientHtmlBody, $clientHeaders);

// Respond with JSON success message
echo json_encode([
    'success' => true,
    'message' => 'Your message has been successfully sent to Imran and he will get back to you soon.',
    'data' => [
        'clientName'  => $clientName,
        'clientEmail' => $clientEmail,
        'projectType' => $projectType,
        'budget'      => $budget,
        'adminMail'   => $mailAdminSent,
        'clientMail'  => $mailClientSent
    ]
]);
