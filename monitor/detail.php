<?php include_once 'template/top.php' ?>

<div class="container p-3 mt-3 bg-light shadow-sm rounded">
  <h1 class="mb-3">Detail</h1>

  <div class="table-responsive">
    <?php $data = mysqli_query($koneksi, "SELECT * FROM pendaftaran_asrama WHERE no_pendaftaran = '".$_GET['id']."'") ?>
    <?php while ($d = mysqli_fetch_array($data)): ?>
    <h4>Personal Info</h4>
    <table class="table">
      <tbody>
        <tr>
          <td>Nama</td>
          <td><?= $d['nama']; ?></td>
        </tr>
        <tr>
          <td>No Pendaftaran</td>
          <td><?= $d['no_pendaftaran']; ?></td>
        </tr>
        <tr>
          <td>No Registrasi (Vokasi)</td>
          <td><?= $d['no_registrasi']; ?></td>
        </tr>
        <tr>
          <td>Prodi</td>
          <td><?= $d['prodi']; ?></td>
        </tr>
        <tr>
          <td>Panggilan</td>
          <td><?= $d['nama_panggilan']; ?></td>
        </tr>
        <tr>
          <td>TTL</td>
          <td><?= $d['ttl']; ?></td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td><?= $d['jenis_kelamin']; ?></td>
        </tr>
        <tr>
          <td>Hobi</td>
          <td><?= $d['hobi']; ?></td>
        </tr>
        <tr>
          <td>Agama</td>
          <td><?= $d['agama']; ?></td>
        </tr>
      </tbody>
    </table>
    <h4>Kontak dan Alamat</h4>
    <table class="table">
      <tbody>
        <tr>
          <td>No. HP</td>
          <td><?= $d['no_hp']; ?></td>
        </tr>
        <tr>
          <td>No WA</td>
          <td><?= $d['no_wa']; ?></td>
        </tr>
        <tr>
          <td>Kecamatan</td>
          <td><?= $d['kecamatan']; ?></td>
        </tr>
        <tr>
          <td>Kab/Kota</td>
          <td><?= $d['kabupaten_kota']; ?></td>
        </tr>
        <tr>
          <td>Provinsi</td>
          <td><?= $d['provinsi']; ?></td>
        </tr>
      </tbody>
    </table>
    <h4>Informasi Keluarga</h4>
    <table class="table">
      <tbody>
        <tr>
          <td>Orang Tua</td>
          <td><?= $d['orang_tua']; ?></td>
        </tr>
        <tr>
          <td>Penghasilan</td>
          <td><?= $d['penghasilan']; ?></td>
        </tr>
        <tr>
          <td>Jumlah Saudara</td>
          <td><?= $d['jumlah_saudara']; ?></td>
        </tr>
        <tr>
          <td>Cerita Keluarga</td>
          <td><?= $d['cerita_keluarga']; ?></td>
        </tr>
      </tbody>
    </table>
    <h4>Kegiatan di Sekolah</h4>
    <table class="table">
      <tbody>
        <tr>
          <td>Asal Sekolah</td>
          <td><?= $d['sma']; ?></td>
        </tr>
        <tr>
          <td>Pengalaman Organisasi 1</td>
          <td><?= $d['organisasi1']; ?></td>
        </tr>
        <tr>
          <td>Pengalaman Organisasi 2</td>
          <td><?= $d['organisasi2']; ?></td>
        </tr>
        <tr>
          <td>Kegiatan Lain</td>
          <td><?= $d['kegiatan_lain']; ?></td>
        </tr>
      </tbody>
    </table>
    <h4>Tulisan Pendek</h4>
    <table class="table">
      <tbody>
        <tr>
          <td>Essai Asrama (Pendek)</td>
          <td><?= $d['essai']; ?></td>
        </tr>
        <tr>
          <td>Alasan Masuk Asrama</td>
          <td><?= $d['alasan']; ?></td>
        </tr>
      </tbody>
    </table>
    <?php endwhile; ?>
  </div>
  <a href="./" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Kembali</a>

</div>
<?php include_once 'template/bottom.php' ?>