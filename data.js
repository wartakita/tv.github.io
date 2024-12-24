// Fungsi untuk memformat tanggal ke model "24 December 2024"
function formatDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

// Fungsi untuk memuat data dari JSON
async function loadMatches() {
    try {
        document.getElementById('loader').style.display = 'block'; // Tampilkan loader
        const cache = sessionStorage.getItem('matches');
        const matches = cache ? JSON.parse(cache) : await fetchMatches();

        if (!cache) {
            sessionStorage.setItem('matches', JSON.stringify(matches));
        }

        renderMatches(matches);
        populateFilters(matches);
        filterMatches();
        updateCountdown();
        setInterval(updateCountdown, 1000); // Update countdown setiap detik
    } catch (error) {
        console.error("Failed to load matches:", error);
        document.getElementById('noMatches').classList.add('show');
    } finally {
        document.getElementById('loader').style.display = 'none'; // Sembunyikan loader
    }
}

async function fetchMatches() {
    const response = await fetch('https://wartakita.github.io/tv.github.io/matches.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}

function renderMatches(matches) {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan data baru

    matches.forEach(match => {
        const streamUrl = `https://warning.hayo-pencuri-sk21xyz.workers.dev/https://play1nm.hnyongshun.cn/live/ballbar_${match.videoId}.m3u8`;
        const now = new Date();
        const matchTime = new Date(`${match.date}T${match.time}`);

        const isLive = now >= matchTime && now <= new Date(matchTime.getTime() + 2 * 60 * 60 * 1000); // Pertandingan berlangsung selama 2 jam

        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.setAttribute('data-date', match.date.toLowerCase());
        card.setAttribute('data-league', match.league.toLowerCase());
        card.setAttribute('data-teams', match.teams.toLowerCase());

        const countdownTimer = !isLive ? `<span class="countdown" data-timer="${match.date}T${match.time}">Starting Soon...</span>` : '';

        card.innerHTML = `
            <div class="match-info">
                <span class="date"><i class="fas fa-calendar-alt"></i> ${formatDate(match.date)}</span>
                <span class="teams"><i class="fas fa-users"></i> ${match.teams}</span>
                <span class="details"><i class="fas fa-clock"></i> ${match.time} | ${match.league}</span>
                ${isLive ? '<span class="live"><i class="fas fa-broadcast-tower"></i> Live Now</span>' : countdownTimer}
            </div>
            <button class="watch-button" onclick="playMatch('${streamUrl}')">
                <i class="fas fa-play-circle"></i> Watch
            </button>
        `;
        container.appendChild(card);
    });
}

// Fungsi untuk memperbarui countdown
function updateCountdown() {
    const countdownElements = document.querySelectorAll('[data-timer]');
    const now = new Date();

    countdownElements.forEach(element => {
        const matchTime = new Date(element.getAttribute('data-timer'));
        const diff = matchTime - now;

        if (diff <= 0) {
            element.textContent = ''; // Hapus countdown jika waktu telah berlalu
        } else {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            element.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    });
}

// Mulai JW Player
function playMatch(streamUrl) {
    jwplayer("jwplayerContainer").setup({
        file: streamUrl,
        width: "100%",
        aspectratio: "16:9",
        image: "https://da.gd/NfRUC",
    });

    document.getElementById("jwplayerContainer").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Fungsi untuk mengisi filter berdasarkan data JSON
function populateFilters(matches) {
    const dateFilter = document.getElementById('dateFilter');
    const leagueFilter = document.getElementById('leagueFilter');

    // Bersihkan opsi filter sebelumnya
    dateFilter.innerHTML = '<option value="">Filter by Date</option>';
    leagueFilter.innerHTML = '<option value="">Filter by League</option>';

    // Tambahkan opsi berdasarkan data unik dari JSON
    const uniqueDates = [...new Set(matches.map(match => match.date))];
    const uniqueLeagues = [...new Set(matches.map(match => match.league))];

    uniqueDates.forEach(date => {
        const option = document.createElement('option');
        option.value = date.toLowerCase();
        option.textContent = formatDate(date);
        dateFilter.appendChild(option);
    });

    uniqueLeagues.forEach(league => {
        const option = document.createElement('option');
        option.value = league.toLowerCase();
        option.textContent = league;
        leagueFilter.appendChild(option);
    });
}

// Fungsi untuk memfilter kartu pertandingan
function filterMatches() {
    const dateFilter = document.getElementById('dateFilter').value.toLowerCase();
    const leagueFilter = document.getElementById('leagueFilter').value.toLowerCase();
    const teamSearch = document.getElementById('teamSearch').value.toLowerCase();

    const cards = document.querySelectorAll('.schedule-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardDate = card.getAttribute('data-date');
        const cardLeague = card.getAttribute('data-league');
        const cardTeams = card.getAttribute('data-teams');

        const matchesDate = !dateFilter || cardDate === dateFilter;
        const matchesLeague = !leagueFilter || cardLeague === leagueFilter;
        const matchesTeams = !teamSearch || cardTeams.includes(teamSearch);

        if (matchesDate && matchesLeague && matchesTeams) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const noMatches = document.getElementById('noMatches');
    if (visibleCount === 0) {
        noMatches.classList.add('show');
    } else {
        noMatches.classList.remove('show');
    }
}

// Fungsi untuk mereset filter
function resetFilters() {
    document.getElementById('dateFilter').value = '';
    document.getElementById('leagueFilter').value = '';
    document.getElementById('teamSearch').value = '';
    filterMatches();
}

// Debounce untuk meningkatkan performa filter
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Event Listener
document.getElementById('teamSearch').addEventListener('input', debounce(filterMatches, 300));
document.getElementById('dateFilter').addEventListener('change', filterMatches);
document.getElementById('leagueFilter').addEventListener('change', filterMatches);

// Panggil loadMatches setelah dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', loadMatches);
