<html>    
<head>
    <!--  JQuery  -->
    <script src="scripts/jquery.js" type="text/javascript"> </script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.0.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.22/jquery-ui.js"></script>
    <!-- Materialize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/css/materialize.min.css">
    <!-- Iconos -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Animate CSS -->
    <link rel="stylesheet" href="./styles/animate.min.css">
    <!-- Materialize JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js"></script>
    <!--  CSS propio  -->
    <link rel="stylesheet" type="text/css" href="./styles/styles.css">
    <!-- Iconos IONICONS -->
    <!--<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">-->
    <!--  JS propio  -->
    <script src="scripts/transitions.js" type="text/javascript"> </script>
    <?php
    if ($page === 'index') {
    ?>
    	<script src="scripts/index-script.js" type="text/javascript"> </script>
    <?php
    }
    else if ($page === 'evaluate') {
    ?>
		<script src="scripts/evaluate-script.js" type="text/javascript"> </script>
    <?php
    }
    else if ($page === 'explore') {
    ?>
    	<script src="scripts/explore-script.js" type="text/javascript"> </script>
    <?php
    }
    else if ($page === 'learn') {
    ?>
    	<script src="scripts/learn-script.js" type="text/javascript"> </script>
    <?php
    }
    else if ($page === 'team') {
    ?>

    <?php
    }
    ?>

    <!-- Acentos -->
    <meta charset="utf-8">    
    <title>APIS Quimica</title>
</head>

<body>
  <div class="navbar-fixed">
      <nav>
          <div class="nav-wrapper teal darken-2">
              <a href="index.php" class="brand-logo">Proyecto Quimica</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
          <?php
          if ($page === 'index') {
          ?>
                  <li><a href="learn.php">Aprende</a></li>
                  <li><a href="explore.php">Explora</a></li>
                  <li><a href="evaluate.php">Evalua</a></li>
                  <li><a href="team.php">Equipo</a></li>
          <?php
          }
          else if ($page === 'evaluate') {
          ?>
                  <li><a href="learn.php">Aprende</a></li>
                  <li><a href="explore.php">Explora</a></li>
                  <li class="active"><a href="evaluate.php">Evalua</a></li>
                  <li><a href="team.php">Equipo</a></li>
          <?php
          }
          else if ($page === 'explore') {
          ?>
                  <li><a href="learn.php">Aprende</a></li>
                  <li class="active"><a href="explore.php">Explora</a></li>
                  <li><a href="evaluate.php">Evalua</a></li>
                  <li><a href="team.php">Equipo</a></li>
          <?php
          }
          else if ($page === 'learn') {
          ?>
                  <li class="active"><a href="learn.php">Aprende</a></li>
                  <li><a href="explore.php">Explora</a></li>
                  <li><a href="evaluate.php">Evalua</a></li>
                  <li><a href="team.php">Equipo</a></li>
          <?php
          }
          else if ($page === 'team') {
          ?>
                  <li><a href="learn.php">Aprende</a></li>
                  <li><a href="explore.php">Explora</a></li>
                  <li><a href="evaluate.php">Evalua</a></li>
                  <li class="active"><a href="team.php">Equipo</a></li>
          <?php
          }
          ?>

              </ul>
          </div>
      </nav>
    </div>
    <br>