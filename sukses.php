<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="icon" type="image/png" href="favicon.png" />
    <title>Pendaftaran Calon Penghuni Asrama Felicia IPB</title>
  </head>
  <body>
    <div class="loader">
      <div class="loader__image"><img src="img/logo-asrama.png" alt="" /></div>
    </div>
    <div class="screen">
      <div class="welcome-screen pt-5">
        <div class="welcome-screen__content mt-5 text-center w-100">
          <div class="logo mb-5">
            <i style="font-size: 4em" class="bi bi-bookmark-check-fill"></i>
          </div>
          <h2>Pendaftaran Berhasil!</h2>
          
          <p>Nomor Pendaftaran Anda: <strong id="no_pendaftaran">-</strong></p>
          <p class="mb-4 d-block">
            Mohon untuk mencatat/screenshoot nomor pendaftaran.
          </p>
          <p>
            Selanjutnya kami akan menghubungi kamu untuk dilanjutkan pada proses
            pendaftaran berikutnya
          </p>
          <a href="./" class="text-light" style="font-size: 3em"
            ><i class="bi bi-house-fill"></i
          ></a>
        </div>
      </div>
    </div>
    <script src="scripts/jquery-3.6.0.min.js"></script>
    <script src="scripts/script.js"></script>
    <script>
      const no_pendaftaran = document.getElementById('no_pendaftaran');
      no_pendaftaran.innerHTML = window.localStorage.getItem('no_pendaftaran')
    </script>
  </body>
</html>
