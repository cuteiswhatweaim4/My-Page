function loadContent(topic) {
    const contentSection = document.getElementById('contentSection');
    const contentDiv = document.getElementById('content');

    // Clear previous content
    contentDiv.innerHTML = '';

    // Define content for each topic with interesting facts
    const contentMap = {
        technology: `
            <h2>Technology</h2>
            <p>Did you know that the first computer programmer was Ada Lovelace? In the mid-1800s, she created algorithms for Charles Babbage's early mechanical general-purpose computer.</p>
            <p>The world's first smartphone, IBM's Simon, was released in 1994 and featured a touchscreen, email capability, and even apps!</p>
            <p>As of 2021, more people have access to mobile phones than clean water, highlighting the rapid spread of technology across the globe.</p>
        `,
        science: `
            <h2>Science</h2>
            <p>Did you know that water can exist in three states: solid, liquid, and gas? This is known as the water cycle, which is essential for life on Earth.</p>
            <p>The human body contains about 60% water, which is vital for maintaining bodily functions such as temperature regulation and joint lubrication.</p>
            <p>Light takes approximately 8 minutes and 20 seconds to travel from the Sun to Earth, illustrating the vastness of space.</p>
        `,
        history: `
            <h2>History</h2>
            <p>The Great Wall of China is over 13,000 miles long and was built over several dynasties to protect against invasions.</p>
            <p>Did you know that the shortest war in history was between Britain and Zanzibar on August 27, 1896? It lasted only 38 minutes!</p>
            <p>Ancient Egypt is famous for its pyramids, but did you know they were originally covered in shiny white limestone, making them sparkle in the sun?</p>
        `,
        arts: `
            <h2>Arts</h2>
            <p>The Mona Lisa, painted by Leonardo da Vinci, is famous for its enigmatic smile and has been stolen and recovered multiple times since its creation.</p>
            <p>Vincent van Gogh only sold one painting during his lifetime, but today, his works are among the most expensive ever sold.</p>
            <p>The term "Renaissance" means "rebirth" and refers to the period in Europe from the 14th to the 17th century that saw a renewed interest in art and science.</p>
        `,
    };

    // Load content based on the selected topic
    contentDiv.innerHTML = contentMap[topic] || '<p>Content not found.</p>';
    
    // Show the content section
    contentSection.style.display = 'block';
}

function returnToHome() {
    // Hide the content section
    document.getElementById('contentSection').style.display = 'none';
}
