function showContent(topic) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    if (topic === 'home') {
        document.querySelector('.link-box').style.display = 'flex'; // Show links
    } else {
        document.querySelector('.link-box').style.display = 'none'; // Hide links
        document.getElementById(topic).style.display = 'block'; // Show selected section
    }
}
