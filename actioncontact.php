<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Envoi contact Bulko</title>
</head>
<body>
  <ul>
    <?php

    if(isset($_POST)){
      foreach ($_POST as $key => $value) {
    ?>
    <li><strong><?php echo $key ?> : </strong><?php echo addslashes($value); ?></li>
    <?php

    // En transformant les values des inputs avec addslashes, les ', ", \, et NUL sont échappés
      }
    }

    ?>

  </ul>
</body>
</html>
