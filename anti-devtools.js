
// File: anti-devtools.js

(function () {
    // Deteksi aktivitas DevTools
    const detectDevTools = function () {
        let devToolsOpen = false;

        const checkDevTools = function () {
            const start = performance.now();
            debugger; // Debugger statement untuk mendeteksi inspeksi
            const end = performance.now();

            if (end - start > 100) { // Jika debugger berjalan, delay waktu meningkat
                devToolsOpen = true;
                handleDevToolsDetection();
            }
        };

        // Periksa setiap 1 detik
        setInterval(checkDevTools, 1000);
    };

    // Tindakan ketika DevTools terdeteksi
    const handleDevToolsDetection = function () {
        alert('DevTools detected. You will be redirected.');
        
        // Log aktivitas ke server (opsional)
        fetch('/log-devtools-usage', { 
            method: 'POST', 
            body: JSON.stringify({ event: 'devtools_detected', timestamp: new Date() }),
            headers: { 'Content-Type': 'application/json' }
        });

        // Redirect ke halaman kosong
        window.location.href = 'https://moustacheoverloadwar.com/r9zuqx1t33?key=e658a26ee78d379ec5445db129fbad0b';
    };

    // Matikan klik kanan
    const preventRightClick = function () {
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
    };

    // Cegah shortcut keyboard umum untuk membuka DevTools
    const preventKeyShortcuts = function () {
        document.addEventListener('keydown', (event) => {
            if (
                (event.ctrlKey && event.shiftKey && event.key === 'I') || // Ctrl+Shift+I
                (event.ctrlKey && event.shiftKey && event.key === 'J') || // Ctrl+Shift+J
                (event.ctrlKey && event.key === 'U') || // Ctrl+U
                (event.key === 'F12') // F12
            ) {
                event.preventDefault();
                alert('DevTools is disabled.');
            }
        });
    };

    // Persempit akses DOM dan console
    const obfuscatePage = function () {
        // Lindungi document.cookie
        Object.defineProperty(document, 'cookie', {
            get: () => '',
            set: () => {},
        });

        // Lindungi akses ke console
        Object.defineProperty(window, 'console', {
            get: () => {
                throw new Error('Console access is disabled.');
            },
        });
    };

    // Eksekusi semua fungsi pencegahan
    detectDevTools();
    preventRightClick();
    preventKeyShortcuts();
    obfuscatePage();
})();
