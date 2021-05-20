const loginButton = document.querySelector('#loginButton');
const credential = document.querySelector('#credential');
const pesan = document.querySelector('#pesan');

credential.addEventListener('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    loginButton.innerHTML = 'Memvalidasi ...';
    setTimeout(() => {
      loginButton.innerHTML = 'Masuk';
      if (credential.value === 'gosweatgoion') {
        window.localStorage.setItem('credential', 'gosweatgoion');
        pesan.innerHTML = `<div class="alert alert-success">Berhasil masuk. Mohon tunggu ...</div>`;
        setTimeout(() => {
          window.location = './';
        }, 1000);
      } else {
        pesan.innerHTML = `<div class="alert alert-danger">Kode login salah! Silakan coba lagi.</div>`;
        credential.value = '';
      }
    }, 1000);
  }
});

loginButton.addEventListener('click', function () {
  loginButton.innerHTML = 'Memvalidasi ...';
  setTimeout(() => {
    loginButton.innerHTML = 'Masuk';
    if (credential.value === 'gosweatgoion') {
      window.localStorage.setItem('credential', 'gosweatgoion');
      pesan.innerHTML = `<div class="alert alert-success">Berhasil masuk. Mohon tunggu ...</div>`;
      setTimeout(() => {
        window.location = './';
      }, 1000);
    } else {
      pesan.innerHTML = `<div class="alert alert-danger">Kode login salah! Silakan coba lagi.</div>`;
      credential.value = '';
    }
  }, 1000);
});
