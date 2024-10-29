function loadContent(topic) {
    document.querySelector('.categories').style.display = 'none';
    const contentSection = document.getElementById('contentSection');
    const content = document.getElementById('content');
    contentSection.style.display = 'block';

    const topics = {
        technology: `
            <h2>Technology</h2>
            <p>1. Technology is revolutionizing every industry.</p>
            <!-- Add 19 more sentences here -->
        `,
        science: `
            <h2>Science</h2>
            <p>1. Science explains natural phenomena and advances knowledge.</p>
            <!-- Add 19 more sentences here -->
        `,
        history: `
            <h2>History</h2>
            <p>1. History preserves humanity's past for future generations.</p>
            <!-- Add 19 more sentences here -->
        `,
        arts: `
            <h2>Arts</h2>
            <p>1. Art embodies cultural expression and personal creativity.</p>
            <!-- Add 19 more sentences here -->
        `
    };

    content.innerHTML = topics[topic];
    document.body.className = topic;
}

function returnToHome() {
    document.getElementById('contentSection').style.display = 'none';
    document.querySelector('.categories').style.display = 'flex';
}
