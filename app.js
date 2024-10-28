document.addEventListener("DOMContentLoaded", () => {
    const homeSections = document.getElementById('home-sections');
    const contentSections = document.querySelectorAll('.content-section');
    const homeLinks = document.querySelectorAll('#home-sections a');
    const returnButtons = document.querySelectorAll('#return-home');
    // Show content for selected section and hide home sections
    homeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default anchor behavior
            const sectionId = link.getAttribute('data-section');
            homeSections.style.display = 'none';
            contentSections.forEach(section => {
                section.style.display = 'none';  // Hide all sections
            });
            document.getElementById(sectionId).style.display = 'block';  // Show selected section
        });
    });
    // Return to the home page
    returnButtons.forEach(button => {
        button.addEventListener('click', () => {
            homeSections.style.display = 'flex';
            contentSections.forEach(section => {
                section.style.display = 'none';  // Hide all sections
            });
        });
    });
});
