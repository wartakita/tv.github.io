document.addEventListener("DOMContentLoaded", function() {
    // Membuat elemen iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'main-iframe';
    iframe.src = 'https://player.kick.com/pisangg';
    iframe.frameBorder = '0';
    iframe.sandbox = 'allow-scripts allow-same-origin';
    iframe.allowFullscreen = true;
    iframe.title = 'Iframe Konten Utama';

    // Menambahkan iframe ke kontainer
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.appendChild(iframe);
});
