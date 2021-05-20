if (
  window.localStorage.getItem('credential') == null ||
  window.localStorage.getItem('credential') != 'gosweatgoion'
) {
  window.location = 'masuk.php';
}

function logout() {
  window.localStorage.setItem('credential', 'logout');
  window.location = 'masuk.php';
}
