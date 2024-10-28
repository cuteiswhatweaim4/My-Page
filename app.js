function showContent(section) {
    // Hide all sections
    const sections = document.querySelectorAll('main > article');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    // Show the clicked section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Optional: Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.querySelector('main > article');
    if (firstSection) {
        firstSection.style.display = 'block';
    }
});
