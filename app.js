const content = {
    technology: `
        <h2>Technology</h2>
        <p>1. Technology is constantly evolving to improve lives.</p>
        <p>2. Advances in AI are transforming various industries.</p>
        <p>3. Renewable energy technology reduces environmental impact.</p>
        <p>4. Smartphones have revolutionized communication.</p>
        <p>5. Quantum computing offers immense processing power.</p>
        <p>6. Wearable devices enhance personal health monitoring.</p>
        <p>7. Robotics is reshaping manufacturing sectors.</p>
        <p>8. Blockchain ensures secure transactions in finance.</p>
        <p>9. IoT connects devices for smarter homes.</p>
        <p>10. 3D printing impacts manufacturing and medicine.</p>
        <p>11. Data privacy is a growing technological concern.</p>
        <p>12. Cloud computing allows remote data access.</p>
        <p>13. Autonomous vehicles are the future of transport.</p>
        <p>14. Cybersecurity is critical in digital innovation.</p>
        <p>15. Machine learning powers modern AI systems.</p>
        <p>16. The internet of things increases connectivity.</p>
        <p>17. Augmented reality enhances virtual experiences.</p>
        <p>18. VR immerses users in virtual environments.</p>
        <p>19. Biotechnology advances personalized medicine.</p>
        <p>20. E-commerce transforms global trade.</p>
    `,
    science: `
        <h2>Science</h2>
        <p>1. Physics explains the laws of nature.</p>
        <p>2. Chemistry explores the composition of substances.</p>
        <p>3. Biology studies living organisms and ecosystems.</p>
        <p>4. Astronomy examines celestial bodies and the universe.</p>
        <p>5. Earth science explores geological and atmospheric processes.</p>
        <p>6. Genetics uncovers the code of inheritance and traits.</p>
        <p>7. Ecology investigates the relationships among organisms.</p>
        <p>8. Evolution provides insights into species adaptation.</p>
        <p>9. Medicine advances health and disease treatment.</p>
        <p>10. Meteorology studies weather and climate patterns.</p>
        <p>11. Oceanography examines marine environments and life.</p>
        <p>12. Psychology explores human behavior and mind.</p>
        <p>13. Paleontology studies fossils to understand past life.</p>
        <p>14. Neuroscience investigates the brain and nervous system.</p>
        <p>15. Zoology focuses on animal biology and behavior.</p>
        <p>16. Botany studies plant life and its processes.</p>
        <p>17. Immunology examines the body's defense mechanisms.</p>
        <p>18. Quantum physics deals with particles at atomic scales.</p>
        <p>19. Biochemistry bridges biology and chemistry.</p>
        <p>20. Microbiology explores microorganisms' roles in ecosystems.</p>
    `,
    history: `
        <h2>History</h2>
        <p>1. Ancient civilizations laid the foundation of modern society.</p>
        <p>2. The Renaissance sparked cultural and intellectual revival.</p>
        <p>3. The Industrial Revolution transformed global economies.</p>
        <p>4. World Wars reshaped the political world order.</p>
        <p>5. The Roman Empire influenced Western culture and law.</p>
        <p>6. The discovery of the Americas changed global trade.</p>
        <p>7. The Enlightenment fostered democratic ideals.</p>
        <p>8. Ancient Egypt was known for its pyramids and pharaohs.</p>
        <p>9. The Silk Road facilitated cultural exchange across Asia.</p>
        <p>10. The Cold War divided the world along ideological lines.</p>
        <p>11. Feudalism structured medieval European societies.</p>
        <p>12. The French Revolution promoted equality and citizenship.</p>
        <p>13. The printing press revolutionized information sharing.</p>
        <p>14. The Renaissance produced famous artists and thinkers.</p>
        <p>15. The Ottoman Empire spanned three continents.</p>
        <p>16. The American Revolution established a new nation.</p>
        <p>17. Colonialism shaped modern global relations.</p>
        <p>18. The Space Race led to advances in technology.</p>
        <p>19. Ancient Greece contributed to philosophy and science.</p>
        <p>20. The Middle Ages saw the rise of kingdoms and empires.</p>
    `,
    arts: `
        <h2>Arts</h2>
        <p>1. Art reflects cultural heritage and personal expression.</p>
        <p>2. The Renaissance produced masterpieces by Michelangelo.</p>
        <p>3. Impressionism introduced light and color in new ways.</p>
        <p>4. Abstract art emphasizes form over realism.</p>
        <p>5. Cubism broke down subjects into geometric shapes.</p>
        <p>6. Photography became an art form in the 19th century.</p>
        <p>7. Ballet is a classical dance form that originated in Italy.</p>
        <p>8. Modern art challenged traditional boundaries.</p>
        <p>9. The Baroque period produced dramatic, intense art.</p>
        <p>10. Calligraphy is a revered form of artistic writing.</p>
        <p>11. Sculpture gives form to ideas through material.</p>
        <p>12. Theater combines performance and storytelling.</p>
        <p>13. Architecture creates structures of aesthetic value.</p>
        <p>14. Film emerged as a medium for artistic expression.</p>
        <p>15. Music spans genres and cultures worldwide.</p>
        <p>16. Graffiti art conveys urban culture and messages.</p>
        <p>17. Poetry uses language to evoke emotions and imagery.</p>
        <p>18. Dance is a dynamic form of self-expression.</p>
        <p>19. Fashion reflects cultural trends and individuality.</p>
        <p>20. Literature explores human experience and imagination.</p>
    `
};

function showContent(topic) {
    document.getElementById("topic-content").classList.remove("hidden");
    document.getElementById("content-details").innerHTML = content[topic];
    document.querySelector(".categories").style.display = "none";
}

function returnHome() {
    document.getElementById("topic-content").classList.add("hidden");
    document.querySelector(".categories").style.display = "flex";
}
