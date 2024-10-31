async function fetchLinks() {
    const response = await fetch('links.json');
    return await response.json();
}

function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');
}

function loadLinks() {
    fetchLinks().then(data => {
        const downloadLinksContainer = document.getElementById('download-links');
        data.downloads.forEach(link => {
            const button = document.createElement('a');
            button.href = link.url;
            button.download = link.name;
            button.innerHTML = `<button>${link.name}</button>`;
            downloadLinksContainer.appendChild(button);
        });

        const youtubeLinksContainer = document.getElementById('youtube-links');
        data.youtube.forEach(link => {
            const button = document.createElement('a');
            button.href = link.url;
            button.target = '_blank';
            button.innerHTML = `<button>${link.name}</button>`;
            youtubeLinksContainer.appendChild(button);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLinks();
});