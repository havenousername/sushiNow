<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Design for Bootstrap fonts and icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">

  <!-- Material Design for Bootstrap CSS -->
  <link rel="stylesheet"
    href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
    integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/style.css">
  <!-- favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="./img/favicon/57.png"
    data-mce-href="/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./img/favicon/60.png"
    data-mce-href="/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./img/favicon/72.png"
    data-mce-href="/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./img/favicon/76.png"
    data-mce-href="/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./img/favicon/114.png"
    data-mce-href="/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./img/favicon/120.png"
    data-mce-href="/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./img/favicon/144.png"
    data-mce-href="/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./img/favicon/152.png"
    data-mce-href="/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./img/favicon/180.png"
    data-mce-href="/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="./img/favicon/32.png" sizes="32x32" data-mce-href="/favicon-32x32.png">
  <link rel="icon" type="image/png" href="./img/favicon/192.png" sizes="192x192"
    data-mce-href="/android-chrome-192x192.png">
  <link rel="icon" type="image/png" href="./img/favicon/96.png" sizes="96x96" data-mce-href="/favicon-96x96.png">
  <link rel="icon" type="image/png" href="./img/favicon/16.png" sizes="16x16" data-mce-href="/favicon-16x16.png">
  <title>Personal Cabinet</title>
</head>

<body>
  <h1>Hello, world!</h1>
  <button type="button" class="logIn" id="logOut">Log Out</button>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
  </script>
  <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"
    integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous">
  </script>
  <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"
    integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous">
  </script>
  <script>
    $(document).ready(function () {
      $('body').bootstrapMaterialDesign();
    });
  </script>
  <script src="./js/logout.js"></script>
</body>

</html>