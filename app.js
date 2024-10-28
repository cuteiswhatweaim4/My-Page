function showContent(topic) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('show'); // Hide all sections
        section.setAttribute('aria-hidden', 'true'); // Hide from screen readers
    });
    const selectedSection = document.getElementById(topic);
    selectedSection.classList.add('show'); // Show selected section
    selectedSection.setAttribute('aria-hidden', 'false'); // Show to screen readers
}

function showHome() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('show'); // Hide all sections
        section.setAttribute('aria-hidden', 'true'); // Hide from screen readers
    });
    document.querySelector('.link-box').style.display = 'block'; // Show link box
}
