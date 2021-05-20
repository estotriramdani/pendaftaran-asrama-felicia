<?php include_once 'template/top.php' ?>
    <div class="container rounded bg-white shadow-sm p-3 mt-3" style="min-height: 85vh;">
      <div class="row mb-3">
        <div class="col-sm">
          <h1 class="text-dark">Daftar Pendaftar</h1>
        </div>
        <div class="col-sm">
          <!-- served -->
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>No Pendaftaran</th>
              <th>Nama</th>
              <th>Program Studi</th>
              <th>WhatsApp</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <?php $data = mysqli_query($koneksi, "SELECT * FROM pendaftaran_asrama") ?>
            <?php while ($d = mysqli_fetch_array($data)): ?>
            <tr 
              <?php if (strtolower($d['agama']) != 'islam'): ?>
                class="bg-warning text-white"
              <?php endif; ?>
            >
              <td><?= $d['no_pendaftaran']; ?></td>
              <td><?= $d['nama']; ?></td>
              <td><?= $d['prodi']; ?></td>
              <td><a target="_blank" class="btn btn-success" href="https://wa.me/62<?= substr($d['no_wa'], 1); ?>"><i class="bi bi-whatsapp"></i></a></td>
              <td><a class="btn btn-primary shadow-sm" href="detail.php?id=<?= $d['no_pendaftaran']; ?>">Detail</a></td>
            </tr>
            <?php endwhile; ?>
          </tbody>
        </table>
      </div>
    </div>
    <script>
      $(document).ready( function () {
          $('.table').DataTable();
      } );
    </script>

   <?php include_once 'template/bottom.php' ?>