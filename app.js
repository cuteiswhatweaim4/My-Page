function showContent(section) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    // Show the clicked section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
