(function() {
    const popunderUrl = 'https://moustacheoverloadwar.com/btsxayzi?key=e922c27573a304432866608a00059d17'; // URL iklan popunder
    const windowName = 'popunder';
    const windowFeatures = 'width=800,height=600,left=100,top=100';

    // Fungsi untuk membuka popunder
    function openPopunder() {
        let popunder = window.open(popunderUrl, windowName, windowFeatures);

        if (popunder) {
            // Jika berhasil, fokus kembali ke jendela utama
            popunder.blur();
            window.focus();
            popunder.opener = null;
        } else {
            // Jika gagal, tampilkan notifikasi UI
            showNotification();
        }
    }

    // Fungsi untuk menampilkan notifikasi UI
    function showNotification() {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.classList.add('show');

            // Sembunyikan notifikasi setelah 5 detik
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        } else {
            console.error('Element dengan ID "notification" tidak ditemukan.');
        }
    }

    // Menambahkan event listener pada klik pertama pengguna
    document.addEventListener('click', function handler(event) {
        openPopunder();

        // Menghapus event listener setelah popunder terbuka
        document.removeEventListener('click', handler);
    });
})();
