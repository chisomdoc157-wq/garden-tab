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