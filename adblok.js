(function ignielAdBlock() {
    const script = document.currentScript;
    const adPub = script.getAttribute('data-pub') || 'xxxx';
    const adTitle = script.getAttribute('data-title') || 'AdBlock Terdeteksi';
    const adText = script.getAttribute('data-text') || 'Harap nonaktifkan AdBlock Anda untuk melanjutkan mendukung konten kami.';
    const adButtonText = 'Saya Mengerti';

    const ad = document.createElement('script');
    ad.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${adPub}`;
    ad.async = true;
    ad.setAttribute('crossorigin', 'anonymous');

    ad.onerror = function() {
        showAdBlockWarning();
    };

    document.head.appendChild(ad);

    // Fungsi untuk menampilkan peringatan
    function showAdBlockWarning() {
        const existingBlock = document.querySelector('.ignielAdBlock');
        if (existingBlock) return; // Mencegah duplikasi

        const container = document.createElement('div');
        container.className = 'ignielAdBlock';
        container.innerHTML = `
          <div class="adblock-inner">
            <div class="adblock-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="#ff5858"/>
                    <stop offset="100%" stop-color="#f09819"/>
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="30" fill="url(#gradient)" stroke="#ffffff" stroke-width="4"/>
                <path 
                  d="M20 20L44 44M20 44L44 20" 
                  stroke="#ffffff" 
                  stroke-width="6" 
                  stroke-linecap="round"/>
              </svg>
            </div>
            <h1>${adTitle}</h1>
            <p>${adText}</p>
            <button onclick="tryToClose()"> ${adButtonText} </button>
          </div>`;
        document.body.append(container);

        document.body.style.overflow = 'hidden';
    }

    // Fungsi mencoba menutup, tetapi jika AdBlock masih aktif, peringatan muncul lagi
    window.tryToClose = function() {
        const adBlock = document.querySelector('.ignielAdBlock');
        if (adBlock) {
            adBlock.remove();
            document.body.style.overflow = 'auto';
        }

        // Cek ulang jika AdBlock masih aktif
        setTimeout(() => {
            const testScript = document.createElement('script');
            testScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${adPub}`;
            testScript.async = true;
            testScript.onerror = function() {
                showAdBlockWarning(); // Munculkan lagi jika masih ada AdBlock
            };
            document.head.appendChild(testScript);
        }, 1000);
    };
})();
