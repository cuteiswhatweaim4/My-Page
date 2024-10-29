// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all topic links
    const topicLinks = document.querySelectorAll("nav ul li a");
    // Select all topic content sections
    const topicContents = document.querySelectorAll(".topic-content");
    // Select the main content area
    const mainContent = document.querySelector("main");

    // Function to hide all topic content
    function hideAllTopics() {
        topicContents.forEach(function (content) {
            content.style.display = "none"; // Hide all topic content
        });
    }

    // Add click event listeners to each topic link
    topicLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const topicId = this.getAttribute("data-topic"); // Get the topic id

            hideAllTopics(); // Hide all topics first

            const selectedContent = document.getElementById(topicId);
            if (selectedContent) {
                selectedContent.style.display = "block"; // Show the selected topic content
            }
        });
    });

    // Create a button to go back to the main page
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Homepage";
    backButton.onclick = function () {
        hideAllTopics(); // Hide all topics
        mainContent.style.display = "block"; // Show the main content again
    };

    // Append the back button to the main content area
    mainContent.appendChild(backButton);
});
