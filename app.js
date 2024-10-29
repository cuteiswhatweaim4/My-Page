// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Select all subtopic links
    const links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Confirm the navigation (optional)
            const confirmNavigation = confirm("Do you want to go to " + link.textContent + "?");
            if (!confirmNavigation) {
                event.preventDefault(); // Prevent the default action if user cancels
            }
        });
    });
});
