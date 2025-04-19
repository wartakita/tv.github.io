function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.addEventListener("DOMContentLoaded", function() {
    const srcParam = getParameterByName('src');

    const iframe = document.createElement('iframe');
    iframe.id = 'main-iframe';
    iframe.src = srcParam || ' ';
    iframe.frameBorder = '0';
    iframe.sandbox = 'allow-scripts allow-same-origin';
    iframe.allowFullscreen = true;
    iframe.title = 'Iframe Konten Utama';

    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.appendChild(iframe);
});
