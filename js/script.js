const clock = document.getElementById('clock');
const greeting = document.getElementById('greeting');

// update the clock and greeting 
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    clock.textContent = `${hours}:${minutes}`;

    const hour = now.getHours();
    if (hour < 12) {
        greeting.textContent = 'Good morning!  Ready to grow? 🌱';
    } else if (hour < 18) {
        greeting.textContent = 'Good afternoon! Keep growing! 🌿';
    } else {
        greeting.textContent = 'Good evening! Rest and recharge! 🌙';
    }
}

// Run immediately and then every second
updateClock();
setInterval(updateClock, 1000);

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (query === ''){ 
        return;
 }

 //  If the input looks like a URL, open it
 if (
    query.includes('.') &&
    !query.includes(' ')
 ){
    let url = query;

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    try {
        const parseurl = new URL(url);

        if (
            parseurl.protocol === 'http:' ||
            parseurl.protocol === 'https:'
        ) {
            window.location.href = parseurl.href;
        }
    } catch {
        // if the URL is invalid, search for it instead
        window.location.href = 
         'https://www.google.com/search?q=' + encodeURIComponent(query);
       }
    } else {
    // Otherwise, search Google
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
});