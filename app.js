document.getElementById('fetchBtn').addEventListener('click', async () => {
    const urlInput = document.getElementById('urlInput').value;
    if (urlInput) {
        const linkInfo = await fetchLinkInfo(urlInput);
        displayLinkInfo(linkInfo);
    } else {
        alert("Please enter a URL!");
    }
});

async function fetchLinkInfo(url) {
    // For this example, just mock the response
    // In production, replace this with a backend call to get real metadata
    return {
        title: 'Example Site',
        description: 'This is an example site.',
        url: url
    };
}

function displayLinkInfo(info) {
    const container = document.getElementById('linkInfoContainer');
    container.innerHTML = `
    <h3>${info.title}</h3>
    <p>${info.description}</p>
    <a href="${info.url}" target="_blank">Visit Site</a>
  `;
}

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}
