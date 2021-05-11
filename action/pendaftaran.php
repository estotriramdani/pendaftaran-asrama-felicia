<?php 
session_start();
include_once 'koneksi.php';

$no_pendaftaran = date('Ymdhis');
$no_registrasi = $_POST['no_registrasi'];
$prodi = $_POST['prodi'];
$nama = $_POST['nama'];
$nama_panggilan = $_POST['nama_panggilan'];
$ttl = $_POST['ttl'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$hobi = $_POST['hobi'];
$agama = $_POST['agama'];

$no_hp = $_POST['no_hp'];
$no_wa = $_POST['no_wa'];
$kecamatan = $_POST['kecamatan'];
$kabupaten_kota = $_POST['kabupaten_kota'];
$provinsi = $_POST['provinsi'];

$orang_tua = $_POST['orang_tua'];
$penghasilan = $_POST['penghasilan'];
$jumlah_saudara = $_POST['jumlah_saudara'];
$tanggungan_lain = $_POST['tanggungan_lain'];
$cerita_keluarga = $_POST['cerita_keluarga'];

$sma = $_POST['sma'];
$organisasi1 = $_POST['organisasi1'];
$organisasi2 = $_POST['organisasi2'];
$kegiatan_lain = $_POST['kegiatan_lain'];
$essai = $_POST['essai'];
$alasan = $_POST['alasan'];

$result = mysqli_query($koneksi, "INSERT INTO pendaftaran_asrama VALUES('$no_pendaftaran', '$no_registrasi', '$prodi', '$nama', '$nama_panggilan', '$ttl', '$jenis_kelamin', '$hobi', '$agama', '$no_hp', '$no_wa', '$kecamatan', '$kabupaten_kota', '$provinsi', '$orang_tua', '$penghasilan', '$jumlah_saudara', '$tanggungan_lain', '$cerita_keluarga', '$sma', '$organisasi1', '$organisasi2', '$kegiatan_lain', '$essai', '$alasan')");

$_SESSION['no_pendaftaran'] = $no_pendaftaran;
if ($result) {
   ?>
   <script>
     window.localStorage.setItem('no_pendaftaran', '<?= $no_pendaftaran; ?>')
   window.location  = '../sukses.php';
   </script>
   <?php 
}

?>