let player;

const scheduleData = {
    ASEAN_Championship: [
        { time: '19:30 WIB', title: 'Myanmar vs. Indonesia', videoId: '40340' },
        { time: '20:00 WIB', title: 'Laos vs. Vietnam', videoId: '40080' }
    ],
    Liga_Indonesia: [
        { time: '19:00 WIB', title: 'PSS Sleman vs. Persib Bandung', videoId: '23130' }
    ],
    Premier_League_England: [
        { time: '03:00 WIB', title: 'West Ham vs. Wolves', videoId: '11020' }
    ],
    Serie_A_Italia: [
        { time: '02:45 WIB', title: 'Monza vs. Udinese', videoId: '36870' }
    ],
    La_Liga_Spain: [
        { time: '03:00 WIB', title: 'Getafe vs. Espanyol', videoId: '21140' }
    ]
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
                listItem.innerHTML = `${item.time} - ${item.title} <br>
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
                image: 'https://da.gd/c0la6',
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
            <h2>How to Use Geoo Sport</h2>
            <ul>
                <li><strong>Activate Dark Mode</strong> for visual comfort.</li>
                <li><strong>Enter Video ID</strong> and click the button to load the video.</li>
                <li><strong>View the event schedule</strong> and copy the required Video ID for upcoming events.</li>
                <li><strong>Select the appropriate language tutorial.</strong></li>
                <li><strong>Join the Telegram group</strong> for more information.</li>
            </ul>
        `;

        const tutorialSummaryID = `
            <h2>Cara Menggunakan Geoo Sport</h2>
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
