(function() {
    const popunderUrl = 'https://www.profitablecpmrate.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f'; // URL iklan popunder
    const windowName = 'popunder';
    const windowFeatures = 'width=800,height=600,left=100,top=100';

    // Fungsi untuk membuka popunder
    const openPopunder = () => {
        const popunder = window.open(popunderUrl, windowName, windowFeatures);
        if (popunder) {
            popunder.blur();
            window.focus();
            popunder.opener = null;
        } else {
            showNotification();
        }
    };

    // Fungsi untuk menampilkan notifikasi UI
    const showNotification = () => {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.classList.add('show');
            setTimeout(() => notification.classList.remove('show'), 5000);
        } else {
            console.error('Element dengan ID "notification" tidak ditemukan.');
        }
    };

    // Menambahkan event listener pada klik pertama pengguna
    document.addEventListener('click', (event) => {
        openPopunder();
        document.removeEventListener('click', arguments.callee);
    }, { once: true });
})();
