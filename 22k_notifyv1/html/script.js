window.addEventListener('message', function(event) {
    if (event.data.action === 'notify') {
        const notifications = document.getElementById('notifications');
        
        const notify = document.createElement('div');
        notify.classList.add('notify');

        notify.innerHTML = `
            <div class="notify-title">${event.data.title}</div>
            <div class="notify-text">${event.data.text}</div>
        `;

        notifications.appendChild(notify);

        setTimeout(() => {
            notify.style.transition = "all 0.5s ease";
            notify.style.opacity = "0";
            notify.style.transform = "translateY(-20px)";
            setTimeout(() => notify.remove(), 500);
        }, event.data.duration);
    }
});
