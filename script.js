function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openModal(resourceId) {
    var modal = document.getElementById("myModal");
    var modalContentPlaceholder = document.getElementById("modal-content-placeholder");
    
    var resourceContent = {
        "PhysicsWorldStories": `
            <h2>Physics World Stories</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> The host of Physics World Stories, Andrew Glester, speaks with the people behind intriguing scientific tales on subjects like dark matter, gravitational waves, and the development of renewable energy sources.</p>
            <a href="https://podcasts.apple.com/us/podcast/physics-world-stories-podcast/id474208361" target="_blank">Listen</a>
        `,
        "QuantaSciencePodcast": `
            <h2>Quanta Science Podcast</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast explores the fundamentals of theoretical computer science, theoretical physics, and the biological sciences.</p>
            <a href="https://podcasts.apple.com/us/podcast/quanta-science-podcast/id1021340531" target="_blank">Listen</a>
        `,
        "TitaniumPhysicists": `
            <h2>The Titanium Physicists</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Explains concepts from advanced physics, such as quantum mechanics, lightning, and black holes.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-titanium-physicists-podcast/id483978280" target="_blank">Listen</a>
        `,
        "GreatMysteriesOfPhysics": `
            <h2>Great Mysteries of Physics</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Focuses on providing answers to elementary physics questions and explores in great detail the main mysteries that still stump the world's top physicists. This podcast will cover curled-up dimensions and parallel universes.</p>
            <a href="https://podcasts.apple.com/us/podcast/great-mysteries-of-physics/id1671588048" target="_blank">Listen</a>
        `,
        "RelativelyCertain": `
            <h2>Relatively Certain</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Produced by the Joint Quantum Institute, featuring talks from University of Maryland scientists on astrophysics to quantum computers.</p>
            <a href="https://podcasts.apple.com/us/podcast/relatively-certain/id611418918" target="_blank">Listen</a>
        `,
        "TheoreticalPhysicsSchoolsASC": `
            <h2>Theoretical Physics Schools (ASC)</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> You can access high-level talks on ASC from the Arnold Sommerfeld Center for Theoretical Physics. From highly mathematical topics like string theory to more practical areas like condensed matter physics, this podcast covers a wide range of topics.</p>
            <a href="https://podcasts.apple.com/us/podcast/theoretical-physics-schools-asc/id415301256" target="_blank">Listen</a>
        `,
        "GreatCoursesPodcast": `
            <h2>The Great Courses Podcast: The Torch</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Features college-level lectures on various scientific topics, including physics. Showcases scientists explaining the latest findings from the fields of astronomy, particle physics, and neuroscience.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-torch-the-great-courses-podcast/id670966237" target="_blank">Listen</a>
        `,
        // YouTube Channels
        "PBSSpaceTime": `
            <h2>PBS Space Time</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Explores the outer reaches of space, astrophysics, and sci-fi possibilities. This YouTube channel is hosted by Matt O'Dowd, who completed his Ph.D. at NASA's Space Telescope Science Institute.</p>
            <a href="https://www.youtube.com/c/pbsspacetime" target="_blank">Watch</a>
        `,
        "Veritasium": `
            <h2>Veritasium</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Covers a wide range of science topics with thorough explanations, often delving into complex physics concepts.</p>
            <a href="https://www.youtube.com/user/1veritasium" target="_blank">Watch</a>
        `,
        "SixtySymbols": `
            <h2>Sixty Symbols</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Features in-depth discussions on various physics and astronomy topics, with expert interviews and detailed explanations.</p>
            <a href="https://www.youtube.com/user/sixtysymbols" target="_blank">Watch</a>
        `,
        "MinutePhysics": `
            <h2>MinutePhysics</h2>
            <p><strong>Viewing Effort:</strong> Easy</p>
            <p><strong>Understanding Required:</strong> Moderate</p>
            <p><strong>Summary:</strong> Provides short, engaging videos that simplify complex physics concepts, making them accessible for quick reviews.</p>
            <a href="https://www.youtube.com/user/minutephysics" target="_blank">Watch</a>
        `,
        "PerimeterInstitute": `
            <h2>Perimeter Institute for Theoretical Physics</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Advanced lectures and discussions on theoretical physics from one of the leading research institutes in the field.</p>
            <a href="https://www.youtube.com/user/PIOutreach" target="_blank">Watch</a>
        `,
        "MITOpenCourseWare": `
            <h2>MIT OpenCourseWare – Physics</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> University-level lectures on a wide range of physics topics, offering comprehensive coverage suitable for students.</p>
            <a href="https://www.youtube.com/user/MIT" target="_blank">Watch</a>
        `,
        "StanfordUniversityChannel": `
            <h2>Stanford University Channel</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Features lectures and seminars from Stanford's physics department, providing advanced insights into various physics subjects.</p>
            <a href="https://www.youtube.com/user/StanfordUniversity" target="_blank">Watch</a>
        `,
        // Blogs
        "CosmicVariance": `
            <h2>Cosmic Variance</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate</p>
            <p><strong>Summary:</strong> Written by physicists, discussing physics and astrophysics. Cosmic Variance focuses on modern physics, astrophysics, and cosmology, at a level accessible to the interested non-scientist.</p>
            <a href="https://en.wikipedia.org/wiki/Cosmic_Variance_(blog)" target="_blank">Read</a>
        `,
        "SymmetryMagazine": `
            <h2>Symmetry Magazine</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Offers engaging stories on particle physics and related fields, written for readers with a solid understanding of the subject.</p>
            <a href="https://www.symmetrymagazine.org/" target="_blank">Read</a>
        `,
        "Astrobites": `
            <h2>Astrobites</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Summarizes current research. Talks about blue stars, black holes, and all about the universe.</p>
            <a href="https://astrobites.org/" target="_blank">Read</a>
        `,
        "TheReferenceFrame": `
            <h2>The Reference Frame</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This blog talks about string theory and has a lot of ideas about science and the environment.</p>
            <a href="https://physicsworld.com/a/blog-life-the-reference-frame/" target="_blank">Read</a>
        `,
        "Backreaction": `
            <h2>Backreaction</h2>
            <p><strong>Reading Effort:</strong> Moderate to High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> In-depth discussions by a theoretical physicist. She discusses topics about sending particles to the past, artificial intelligence, and string theories.</p>
            <a href="https://backreaction.blogspot.com/" target="_blank">Read</a>
        `,
        "QuantumFrontiers": `
            <h2>Quantum Frontiers</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Discusses recent advances in quantum physics.</p>
            <a href="https://quantumfrontiers.com/" target="_blank">Read</a>
        `,
        "StartsWithABang": `
            <h2>Starts With A Bang!</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Discusses topics from quantum physics to the solar system and the universe.</p>
            <a href="https://bigthink.com/starts-with-a-bang/" target="_blank">Read</a>
        `
    };
    
    modalContentPlaceholder.innerHTML = resourceContent[resourceId];
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Automatically open the Podcasts tab on page load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});
