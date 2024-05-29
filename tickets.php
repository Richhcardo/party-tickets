<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Liste des tickets virtuels pour la fête.">
    <meta name="author" content="Ton Nom">
    <title>Tickets Virtuels</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Tickets Virtuels</h1>
    <ul>
        <?php
        $tickets = file('tickets.txt', FILE_IGNORE_NEW_LINES);
        foreach ($tickets as $ticket) {
            list($name, $ticketId, $status) = explode(",", $ticket);
            echo "<li>$name: $ticketId ($status)</li>";
        }
        ?>
    </ul>
    <a href="index.php">Retour à l'accueil</a>
</body>
</html>
?>