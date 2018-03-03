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
      var_dump($_POST);
      foreach ($_POST as $value) {
    ?>
    <li><?php echo $value ?></li>
    <?php
      }
    }

    ?>

  </ul>
</body>
</html>
