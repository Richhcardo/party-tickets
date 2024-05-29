<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page d'administration pour valider les tickets.">
    <meta name="author" content="Ton Nom">
    <title>Admin - Valider les tickets</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Admin - Valider les tickets</h1>
    <form action="validate_ticket.php" method="post">
        <label for="ticket_id">ID du ticket :</label>
        <input type="text" id="ticket_id" name="ticket_id" required>
        <input type="submit" value="Valider">
    </form>
</body>
</html>
?>