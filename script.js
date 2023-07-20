document.getElementById("formContoh").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Buat objek data dengan nilai yang diambil
    const data = {
        nama: nama,
        email: email,
        pesan: pesan
    };

    // Konversi data menjadi format JSON
    const jsonData = JSON.stringify(data);

    // Kirimkan data ke tempat tujuan, misalnya server atau berkas lain
    // Di sini, kita hanya mencetak data ke konsol untuk tujuan contoh
    console.log(jsonData);
});
