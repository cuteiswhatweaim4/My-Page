function showContent(topic) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    
    if (topic === 'home') {
        document.querySelector('.main-links').style.display = 'block'; // Show main links
    } else {
        document.querySelector('.main-links').style.display = 'none'; // Hide main links
        document.getElementById(topic).style.display = 'block'; // Show selected section
    }
}
