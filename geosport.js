let player;

// Menambahkan tanggal acara untuk setiap item jadwal
const scheduleData = {
    Liga1Indonesia: [{
            time: '15:30',
            title: 'Madura United vs. Semen Padang',
            videoId: '40001',
            date: '10-12-2024'
        },
        {
            time: '19:00',
            title: 'Persija Jakarta vs. Borneo',
            videoId: '40002',
            date: '10-12-2024'
        }
    ],
    ChampionsLeague: [{
            time: '00:45',
            title: 'D. Zagreb vs. Celtic',
            videoId: '50001',
            date: '11-12-2024'
        },
        {
            time: '00:45',
            title: 'Girona vs. Liverpool',
            videoId: '50002',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Atalanta vs. Real Madrid',
            videoId: '50003',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Bayer Leverkusen vs. Inter',
            videoId: '50004',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Brest vs. PSV',
            videoId: '50005',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Club Brugge KV vs. Sporting CP',
            videoId: '50006',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'RB Leipzig vs. Aston Villa',
            videoId: '50007',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Salzburg vs. PSG',
            videoId: '50008',
            date: '11-12-2024'
        },
        {
            time: '03:00',
            title: 'Shakhtar Donetsk vs. Bayern Munich',
            videoId: '50009',
            date: '11-12-2024'
        }
    ],
    EuropaLeague: [{
        time: '22:30',
        title: 'Fenerbahce vs. Ath Bilbao',
        videoId: '60001',
        date: '11-12-2024'
    }]
};

function loadSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';

    for (const category in scheduleData) {
        const categoryContainer = document.createElement('div');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle);

        const ul = document.createElement('ul');
        scheduleData[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-title', item.title.toLowerCase());
            listItem.setAttribute('data-category', category.toLowerCase());
            listItem.innerHTML = `${item.time} - ${item.title} on ${item.date} <br>
                    <span>Video ID: ${item.videoId}</span>
                    <button class="copy-btn" onclick="copyToClipboard('${item.videoId}')">
                        <i class="fas fa-copy"></i> Copy Video ID
                    </button>`;
            ul.appendChild(listItem);
        });

        categoryContainer.appendChild(ul);
        scheduleList.appendChild(categoryContainer);
    }
}

function searchSchedule() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const scheduleList = document.getElementById('scheduleList');
    const allItems = scheduleList.querySelectorAll('li');

    allItems.forEach(item => {
        const title = item.getAttribute('data-title');
        const category = item.getAttribute('data-category');
        if (title.includes(searchInput) || category.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Video ID copied to clipboard!');
}

document.addEventListener('DOMContentLoaded', () => {
    loadSchedule();
});

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Video ID copied to clipboard!');
}

document.addEventListener('DOMContentLoaded', () => {
    loadSchedule();
    startClock();
});

function startClock() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }, 1000);
}

function loadPlayer() {
    const videoId = document.getElementById('videoId').value.trim();

    if (isNaN(videoId) || videoId.length < 4 || videoId.length > 8) {
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    // Inisialisasi JW Player
    jwplayer('player').setup({
        file: `https://12a001a90a8c45927f7710a6ee02e8e6.v.smtcdns.net/play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`,
        image: 'https://da.gd/NfRUC',
        width: '100%',
        height: 'auto',
        autostart: true
    });

    document.getElementById('error-message').style.display = 'none';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function showTutorial(language) {
    const tutorialContent = document.getElementById('tutorialContent');
    const tutorialSummary = `
            <h2>How to Use Geoo Sport App</h2>
            <ul>
                <li><strong>Activate Dark Mode</strong> for visual comfort.</li>
                <li><strong>Enter Video ID</strong> and click the button to load the video.</li>
                <li><strong>View the event schedule</strong> and copy the required Video ID for upcoming events.</li>
                <li><strong>Select the appropriate language tutorial.</strong></li>
                <li><strong>Join the Telegram group</strong> for more information.</li>
            </ul>
        `;

    const tutorialSummaryID = `
            <h2>Cara Menggunakan Aplikasi Geoo Sport</h2>
            <ul>
                <li><strong>Aktifkan Mode Gelap</strong> untuk kenyamanan visual.</li>
                <li><strong>Masukkan Video ID</strong> dan klik tombol untuk memuat video.</li>
                <li><strong>Lihat jadwal acara</strong> dan salin Video ID yang diperlukan untuk acara mendatang.</li>
                <li><strong>Pilih tutorial bahasa</strong> yang sesuai.</li>
                <li><strong>Bergabung dengan grup Telegram</strong> untuk informasi lebih lanjut.</li>
            </ul>
        `;

    if (language === 'en') {
        tutorialContent.innerHTML = tutorialSummary;
    } else {
        tutorialContent.innerHTML = tutorialSummaryID;
    }
}
