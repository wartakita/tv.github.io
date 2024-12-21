// Memuat jadwal pertandingan dari file JSON
fetch('//wartakita.github.io/tv.github.io/schedule.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#scheduleTable tbody');
        data.forEach(match => {
            const row = document.createElement('tr');
            row.dataset.videoId = match.videoId;
            row.dataset.matchTitle = match.matchTitle;

            row.innerHTML = `
                <td>${match.date}</td>
                <td>${match.match}</td>
                <td>${match.kickOff}</td>
                <td>${match.league}</td>
                <td><button class="tonton-btn" onclick="tontonMatch('${match.videoId}', '${match.match}')"><i class="fas fa-play"></i> Watch</button></td>
            `;
            tableBody.appendChild(row);
        });

        // Menambahkan event listener pencarian setelah data dimuat
        const filterInput = document.getElementById('filterInput');
        filterInput.addEventListener('input', function() {
            const filterValue = filterInput.value.toLowerCase();
            const rows = document.querySelectorAll('#scheduleTable tbody tr');
            let matchFound = false;

            rows.forEach(row => {
                const matchTitle = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
                const league = row.querySelector('td:nth-child(4)').textContent.toLowerCase();

                if (matchTitle.includes(filterValue) || league.includes(filterValue)) {
                    row.style.display = ''; // Menampilkan baris
                    matchFound = true;
                } else {
                    row.style.display = 'none'; // Menyembunyikan baris
                }
            });

            document.querySelector('.no-results').style.display = matchFound ? 'none' : 'block';
        });
    })
    .catch(error => {
        console.error('Error loading schedule:', error);
    });

// Fungsi untuk menonton pertandingan
function tontonMatch(videoId, matchTitle) {
    const player = jwplayer('video-player');
    player.setup({
        file: `https://warning.hayo-pencuri-sk21xyz.workers.dev/https://play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`,
        image: 'https://da.gd/NfRUC',
        autostart: true,
    });

    document.getElementById('match-title').textContent = matchTitle;
    document.getElementById('video-container').style.opacity = 1;

    // Scroll ke video player
    const videoContainer = document.getElementById('video-container');
    videoContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Filter pencarian jadwal pertandingan
const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('input', function() {
    const filterValue = filterInput.value.toLowerCase();
    const rows = document.querySelectorAll('#scheduleTable tbody tr');
    let matchFound = false;
    rows.forEach(row => {
        const matchTitle = row.dataset.matchTitle.toLowerCase();
        if (matchTitle.includes(filterValue)) {
            row.style.display = '';
            matchFound = true;
        } else {
            row.style.display = 'none';
        }
    });
    document.querySelector('.no-results').style.display = matchFound ? 'none' : 'block';
});
