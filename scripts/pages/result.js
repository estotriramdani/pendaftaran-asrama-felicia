const loader = document.querySelector('.loader');
setTimeout(() => {
  loader.classList.add('opacity');
}, 1000);
setTimeout(() => {
  loader.classList.add('d-none');
}, 1100);

const resultPage = document.querySelector('.result-page');
resultPage.innerHTML = `
  <form action="action/pendaftaran.php" method="POST">
        <div class="heading">
          <h2>Silakan cek lagi datanya, ya!</h2>
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
          <small class="caption">Cth. Islam</small>
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
            required
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
            required
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
            required
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
            required
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
            required
          />
          <small class="caption">Cth. Jawa Barat</small>
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
            required
          />
          <small class="caption">Cth. Ayah / Ibu <b>atau</b> Nama Wali</small>
        </div>

        <!-- penghasilan -->
        <div class="form-group">
          <input
            type="number"
            onchange="handleFormChange(this.name, this.value)"
            class="form-control"
            placeholder="Penghasil orang tua (secara total)"
            name="penghasilan"
            value="${window.localStorage.getItem('penghasilan')}"
            required
          />
          <small class="caption">Cth. 5000 000</small>
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
            required
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
            name="tanggungan_lain"
            value="${window.localStorage.getItem('tanggungan_lain')}"
            required
          />
          <small class="caption"
            >Isi "-" jika tidak ada. Jika ada, isi jumlah tanggungannya.
            <br />
            Cth. 1 tanggungan (sepupu)
          </small>
        </div>

        <!-- Cerita keluarga  -->
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
            required
          >${window.localStorage.getItem('cerita_keluarga')}</textarea>
          <small class="caption"> Isi "-" (strip) jika tidak ada.</small>
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
            required
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
            required
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
            required
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
            required
          />
          <small class="caption"
            >Panitia acara perpisahan SMA (Maret 2021) - Ketua Pelaksana
            <br />
            Isi "-" (strip) jika tidak ada.</small
          >
        </div>

        <!-- Essai  -->
        <div class="form-group">
          <label for="" class="text-white">Apa yang kamu tentang asrama?</label>
          <textarea
            name="essai"
            id="essai"
            cols="30"
            rows="10"
            class="form-control"
            onchange="handleFormChange(this.name, this.value)"
            required
          >${window.localStorage.getItem('essai')}</textarea>
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
            required
          >${window.localStorage.getItem('alasan')}</textarea>
        </div>
        <p>Yuk segera daftar!</p>
        <button class="btn btn-light text-center" type="submit">Daftar Sekarang!</button>
        <a href="./" class="float-right text-info btn btn-light"><i class="bi bi-house-fill"></i></a>
        </form> 
      
`;
