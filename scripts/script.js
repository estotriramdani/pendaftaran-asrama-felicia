const registrationPage = document.querySelector('.registration-page');
const resultPage = document.querySelector('.result-page');
const loader = document.querySelector('.loader');

function handleFormChange(name, value) {
  localStorage.setItem(name.toString(), value);
}

function goToResult() {
  Swal.fire({
    title: 'Form selesai diisi',
    text: 'Kamu bisa mengeceknya kembali',
    icon: 'info',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK. Lanjut!!',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location = 'result.html';
    }
  });
}
setTimeout(() => {
  loader.classList.add('opacity');
}, 1000);
setTimeout(() => {
  loader.classList.add('d-none');
}, 1100);

// set default value form
function setLocalStorage() {
  window.location = 'registration.html';
  // page 1
  if (window.localStorage.getItem('no_registrasi') == null) {
    window.localStorage.setItem('no_registrasi', '');
  }
  if (window.localStorage.getItem('prodi') == null) {
    window.localStorage.setItem('prodi', '');
  }
  if (window.localStorage.getItem('nama') == null) {
    window.localStorage.setItem('nama', '');
  }
  if (window.localStorage.getItem('nama_panggilan') == null) {
    window.localStorage.setItem('nama_panggilan', '');
  }
  if (window.localStorage.getItem('ttl') == null) {
    window.localStorage.setItem('ttl', '');
  }
  if (window.localStorage.getItem('jenis_kelamin') == null) {
    window.localStorage.setItem('jenis_kelamin', '');
  }
  if (window.localStorage.getItem('hobi') == null) {
    window.localStorage.setItem('hobi', '');
  }
  if (window.localStorage.getItem('agama') == null) {
    window.localStorage.setItem('agama', '');
  }

  // page 2
  if (window.localStorage.getItem('no_hp') == null) {
    window.localStorage.setItem('no_hp', '');
  }
  if (window.localStorage.getItem('no_wa') == null) {
    window.localStorage.setItem('no_wa', '');
  }
  if (window.localStorage.getItem('kecamatan') == null) {
    window.localStorage.setItem('kecamatan', '');
  }
  if (window.localStorage.getItem('kabupaten_kota') == null) {
    window.localStorage.setItem('kabupaten_kota', '');
  }
  if (window.localStorage.getItem('provinsi') == null) {
    window.localStorage.setItem('provinsi', '');
  }

  // page 3
  if (window.localStorage.getItem('orang_tua') == null) {
    window.localStorage.setItem('orang_tua', '');
  }

  if (window.localStorage.getItem('penghasilan') == null) {
    window.localStorage.setItem('penghasilan', '');
  }

  if (window.localStorage.getItem('jumlah_saudara') == null) {
    window.localStorage.setItem('jumlah_saudara', '');
  }

  if (window.localStorage.getItem('tanggungan_lain') == null) {
    window.localStorage.setItem('tanggungan_lain', '');
  }

  if (window.localStorage.getItem('cerita_keluarga') == null) {
    window.localStorage.setItem('cerita_keluarga', '');
  }

  // page 4
  if (window.localStorage.getItem('sma') == null) {
    window.localStorage.setItem('sma', '');
  }
  if (window.localStorage.getItem('organisasi1') == null) {
    window.localStorage.setItem('organisasi1', '');
  }
  if (window.localStorage.getItem('organisasi2') == null) {
    window.localStorage.setItem('organisasi2', '');
  }
  if (window.localStorage.getItem('kegiatan_lain') == null) {
    window.localStorage.setItem('kegiatan_lain', '');
  }

  // page 4
  if (window.localStorage.getItem('essai') == null) {
    window.localStorage.setItem('essai', '');
  }

  // page 5
  if (window.localStorage.getItem('alasan') == null) {
    window.localStorage.setItem('alasan', '');
  }
}

// default page

const pages = {
  preloaderHeader: `<div class="heading">
  <h2>........</h2>
</div>`,
  preloader: `
  <div class="form-group">
  <input
    type="text"
    class="form-control"
    placeholder="..."
    disabled
  />
  <small class="caption">............ </small>
</div>`,

  pageOne: `<div class="heading">
    <h2>Hai! Kenalan dulu, yuk!</h2>
    <p>Karena tak kenal maka tak sayang...</p>
  </div>
  
  <!-- no_reg -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Nomor Registrasi Pendaftaran Sekolah Vokasi"
      name="no_registrasi"
      value="${window.localStorage.getItem('no_registrasi')}"
    />
    <small class="caption">Cth. 502011380561</small>
  </div>

  <!-- prodi -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Program Studi"
            name="prodi"
            value="${window.localStorage.getItem('prodi')}"
          />
          <small class="caption">Cth. Manajemen Agribisnis</small>
        </div>
  
  <!-- nama -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Nama Lengkap Kamu"
      name="nama"
      value="${window.localStorage.getItem('nama')}"
    />
    <small class="caption">Cth. Esto Triramdani Nurlustiawan</small>
  </div>
  
  <!-- Nama panggilan -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Nama Panggilan"
      name="nama_panggilan"
      value="${window.localStorage.getItem('nama_panggilan')}"
    />
    <small class="caption">Cth. Esto </small>
  </div>
  
  <!-- TTL -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Tempat, Tanggal Lahir"
      name="ttl"
      value="${window.localStorage.getItem('ttl')}"
    />
    <small class="caption">Cth. Bandung, 2 Januari 2000</small>
  </div>
  
  <!-- Jenis Kelamin -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Jenis Kelamin"
      name="jenis_kelamin"
      value="${window.localStorage.getItem('jenis_kelamin')}"
    />
    <small class="caption">Cth. Laki-laki atau Perempuan</small>
  </div>
  
  <!-- hobi -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Hobi (jika lebih dari satu, pisahkan dengan koma)"
      name="hobi"
      value="${window.localStorage.getItem('hobi')}"
    />
    <small class="caption">Cth. Futsal, Voli, Membaca</small>
  </div>
  
  <!-- agama -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Agama"
      name="agama"
      value="${window.localStorage.getItem('agama')}"
    />
    <small class="caption">Cth. Islam</small>
  </div>
  <div class="button-next">
    <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
    <i tabindex="1" class="bi bi-arrow-right-circle-fill" onclick="changePage(2)"></i>
  </div>
  `,
  pageTwo: `
  <div class="heading">
    <h2>Halo, ${window.localStorage.getItem(
      'nama_panggilan'
    )}! Kami butuh kontak kamu...</h2>
    <p>Supaya lebih akrab, kami perlu tahu kontak kamu dan asal daerah kamu...</p>
  </div>
  <!-- No. HP -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Nomor Ponsel"
            name="no_hp"
            value="${window.localStorage.getItem('no_hp')}"
          />
          <small class="caption">Cth. 089772641627</small>
        </div>

        <!-- No. WhatsApp -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Nomor WhatsApp"
            name="no_wa"
            value="${window.localStorage.getItem('no_wa')}"
          />
          <small class="caption">Cth. 089772641627</small>
        </div>

        <!-- Kecamatan (Tempat Tinggal) -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Kecamatan (Tempat Tinggal)"
            name="kecamatan"
            value="${window.localStorage.getItem('kecamatan')}"
          />
          <small class="caption">Cth. Pameungpeuk</small>
        </div>

        <!-- Kabupaten/Kota -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Kabupaten/Kota"
            name="kabupaten_kota"
            value="${window.localStorage.getItem('kabupaten_kota')}"
          />
          <small class="caption">Cth. Bandung Kabupaten</small>
        </div>

        <!-- Provinsi -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Provinsi"
            name="provinsi"
            value="${window.localStorage.getItem('provinsi')}"
          />
          <small class="caption">Cth. Jawa Barat</small>
        </div>
        <div class="button-next">
          <i tabindex="1" class="bi bi-arrow-left-circle-fill" onclick="changePage(1)"></i>
          <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
          <i class="bi bi-arrow-right-circle-fill" onclick="changePage(3)"></i>
        </div>
  `,
  pageThree: `
  <div class="heading">
    <h2>Harga yang paling berharga adalah keluarga...</h2>
    <p>Ceritakan tentang keluargamu, yuk.</p>
  </div>
  <!-- nama orang tua -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Nama Orang Tua Wali"
      name="orang_tua"
      value="${window.localStorage.getItem('orang_tua')}"
    />
    <small class="caption">Cth. Ayah / Ibu <b>atau</b> Nama Wali</small>
  </div>
  
  <div class="form-group">
    <input
      type="number"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Penghasilan orang tua (secara total)"
      name="penghasilan"
      value="${window.localStorage.getItem('penghasilan')}"
    />
    <small class="caption">Cth. 5000000</small>
  </div>

  <!-- jumlah saudara -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Kamu anak ke berapa dari berapa saudara?"
      name="jumlah_saudara"
      value="${window.localStorage.getItem('jumlah_saudara')}"
    />
    <small class="caption">Cth. Anak ke-2 dari 3 bersaudara</small>
  </div>

  <!-- tanggungan lain -->
  <div class="form-group">
    <input
      type="text"
      onchange="handleFormChange(this.name, this.value)"
      class="form-control"
      placeholder="Adakah tanggungan lain dari orang tuamu?"
      value="${window.localStorage.getItem('tanggungan_lain')}"
      name="tanggungan_lain"
    />
    <small class="caption"
      >Isi "-" jika tidak ada. Jika ada, isi jumlah tanggungannya.
      <br />
      Cth. 1 tanggungan (sepupu)
    </small>
  </div>

  <!-- Essai  -->
  <div class="form-group">
    <label for="" class="text-white"
      >Ada yang mau ceritakan tentang keluargamu?</label
    >
    <textarea
      name="cerita_keluarga"
      id="cerita_keluarga"
      cols="30"
      rows="10"
      class="form-control"
      onchange="handleFormChange(this.name, this.value)"
      placeholder="Yuk ceritakan di sini!"
    >${window.localStorage.getItem('cerita_keluarga')}</textarea>
    <small class="caption"> Isi "-" (strip) jika tidak ada.</small>
  </div>
  <div class="button-next">
    <i tabindex="1" class="bi bi-arrow-left-circle-fill" onclick="changePage(2)"></i>
    <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
    <i class="bi bi-arrow-right-circle-fill" onclick="changePage(4)"></i>
  </div>
  `,
  pageFour: `
  <div class="heading">
    <h2>Sekarang isi data kegiatanmu selama sekolah</h2>
    <p>Kegiatan organisasi dan lainnya supaya kami lebih tahu siapa kamu..</p>
  </div>
  <!-- SMA -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Asal SMA/SMK"
            name="sma"
            value="${window.localStorage.getItem('sma')}"
          />
          <small class="caption">Cth. SMAN 1 Dayeuhkolot</small>
        </div>

        <!-- Riwayat Organisasi  -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Riwayat Organisasi 1 (Paling terakhir) - Jabatan"
            name="organisasi1"
            value="${window.localStorage.getItem('organisasi1')}"
          />
          <small class="caption"
            >Cth. OSIS SMAN 1 Dayeuhkolot (2020/2021) - Ketua OSIS
            <br />
            Isi "-" (strip) jika tidak ada.
          </small>
        </div>

        <!-- Riwayat Organisasi 2  -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Riwayat Organisasi 2 (Kedua terakhir) - Jabatan"
            name="organisasi2"
            value="${window.localStorage.getItem('organisasi2')}"
          />
          <small class="caption"
            >Cth. OSIS SMAN 1 Dayeuhkolot (2019/2020) - Ketua Bidang Olahraga
            <br />
            Isi "-" (strip) jika tidak ada.</small
          >
        </div>

        <!-- Kegiatan lain  -->
        <div class="form-group">
          <input
            type="text"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Kegiatan lain (yang terbaik menurut kamu)"
            name="kegiatan_lain"
            value="${window.localStorage.getItem('kegiatan_lain')}"
          />
          <small class="caption"
            >Panitia acara perpisahan SMA (Maret 2021) - Ketua Pelaksana
            <br />
            Isi "-" (strip) jika tidak ada.</small
          >
        </div>
        <div class="button-next">
          <i class="bi bi-arrow-left-circle-fill" onclick="changePage(3)"></i>
          <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
          <i class="bi bi-arrow-right-circle-fill" onclick="changePage(5)"></i>
        </div>
  
  `,
  pageFive: `
  <div class="heading">
    <h2>Kamu pernah dengar kata "asrama", kan?</h2>
    <p>Yuk ceritakan apa yang kamu ketahui tentang asrama! Jangan malu-malu, tulis saja di kolom di bawah ini!</p>
  </div>
  <!-- Essai  -->
        <div class="form-group">
          <label for="" class="text-white">Apa yang kamu tahu tentang asrama?</label>
          <textarea
            name="essai"
            id="essai"
            cols="30"
            rows="10"
            class="form-control"
            onchange="handleFormChange(this.name, this.value)"
          >${window.localStorage.getItem('essai')}</textarea>
        </div>

  <div class="button-next">
    <i class="bi bi-arrow-left-circle-fill" onclick="changePage(4)"></i>
    <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
    <i class="bi bi-arrow-right-circle-fill" onclick="changePage(6)"></i>
  </div>
  `,
  pageSix: `
  <div class="heading">
    <h2>Asrama Felicia IPB</h2>
    <p>Lalu apa yang kamu ketahui tentang Asrama Felicia IPB? Kami punya video profile Asrama Felicia IPB, loh! Cek di <u><a class="text-white" href="https://www.youtube.com/watch?v=n6M-G60gBvM">di sini!</a></u>!</p>
  </div>
        <!-- alasan  -->
        <div class="form-group">
          <label for="" class="text-white"
            >Alasan kamu mendaftar ke Asrama Felicia?</label
          >
          <textarea
            name="alasan"
            id="alasan"
            cols="30"
            rows="10"
            class="form-control"
            onchange="handleFormChange(this.name, this.value)"
          >${window.localStorage.getItem('alasan')}</textarea>
        </div>
  <div class="button-next">
    <i class="bi bi-arrow-left-circle-fill" onclick="changePage(5)"></i>
    <a href="./" class="text-white"><i class="bi bi-house-fill"></i></a>
    <i class="bi bi-check-circle-fill" onclick="goToResult()"></i>
  </div>
  `,
};

registrationPage.innerHTML = pages.pageOne;
function changePage(page) {
  Swal.fire(
    'Data Tersimpan!',
    'Tenang, kamu masih bisa menyunting datanya di akhir form!',
    'success'
  );
  switch (page) {
    case 2:
      registrationPage.innerHTML =
        pages.preloaderHeader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader;
      setTimeout(() => {
        registrationPage.innerHTML = pages.pageTwo;
      }, 500);
      break;
    case 3:
      registrationPage.innerHTML =
        pages.preloaderHeader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader;
      setTimeout(() => {
        registrationPage.innerHTML = pages.pageThree;
      }, 500);
      break;
    case 4:
      registrationPage.innerHTML =
        pages.preloaderHeader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader;
      setTimeout(() => {
        registrationPage.innerHTML = pages.pageFour;
      }, 500);
      break;
    case 5:
      registrationPage.innerHTML =
        pages.preloaderHeader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader;
      setTimeout(() => {
        registrationPage.innerHTML = pages.pageFive;
      }, 500);
      break;
    case 6:
      registrationPage.innerHTML =
        pages.preloaderHeader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader +
        pages.preloader;
      setTimeout(() => {
        registrationPage.innerHTML = pages.pageSix;
      }, 500);
      break;
    default:
      break;
  }
}
