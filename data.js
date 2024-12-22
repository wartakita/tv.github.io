fetch('//wartakita.github.io/tv.github.io/schedule.json')
    .then(response => response.json())
    .then(data => {
        const scheduleList = document.getElementById('scheduleList');
        const categoryFilter = document.getElementById('categoryFilter');
        const categories = new Set();

        data.forEach(match => {
            categories.add(match.category);

            const matchItem = document.createElement('li');
            matchItem.classList.add('match-item');
            matchItem.dataset.videoId = match.videoId;
            matchItem.dataset.matchTitle = match.matchTitle;
            matchItem.dataset.category = match.category;

            matchItem.innerHTML = `
                        <div class="match-info">
                            <span><strong>${match.date}</strong></span>
                            <span>${match.match}</span>
                            <span>${match.kickOff}</span>
                            <span>${match.league}</span>
                        </div>
                        <button class="match-btn" onclick="tontonMatch('${match.videoId}', '${match.match}')">
                            <i class="fas fa-play"></i> Watch
                        </button>
                    `;
            scheduleList.appendChild(matchItem);
        });

        // Populate category dropdown
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Filter functionality
        const filterInput = document.getElementById('filterInput');
        filterInput.addEventListener('input', applyFilters);
        categoryFilter.addEventListener('change', applyFilters);

        function applyFilters() {
            const filterValue = filterInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const matchItems = document.querySelectorAll('.match-item');
            let matchFound = false;

            matchItems.forEach(item => {
                const matchTitle = item.querySelector('.match-info span:nth-child(2)').textContent.toLowerCase();
                const league = item.querySelector('.match-info span:nth-child(4)').textContent.toLowerCase();
                const category = item.dataset.category;

                const matchesTextFilter = matchTitle.includes(filterValue) || league.includes(filterValue);
                const matchesCategoryFilter = selectedCategory === 'all' || category === selectedCategory;

                if (matchesTextFilter && matchesCategoryFilter) {
                    item.style.display = '';
                    matchFound = true;
                } else {
                    item.style.display = 'none';
                }
            });

            document.querySelector('.no-results').style.display = matchFound ? 'none' : 'block';
        }
    })
    .catch(error => console.error('Error fetching schedule:', error));

function tontonMatch(videoId, matchTitle) {
    const videoContainer = document.getElementById('video-container');
    const matchTitleElem = document.getElementById('match-title');

    matchTitleElem.textContent = matchTitle;
    videoContainer.style.opacity = '1';

    jwplayer('video-player').setup({
        file: `https://warning.hayo-pencuri-sk21xyz.workers.dev/https://play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`,
        image: 'https://da.gd/NfRUC',
        width: '100%',
        height: '100%',
        autostart: true
    });

    videoContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}
