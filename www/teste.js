document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    function updateProgress() {
        progress += 1;
        if (progress > 100) {
            progress = 0;
        }
        progressBar.style.width = progress + '%';
    }

    setInterval(updateProgress, 100);
});