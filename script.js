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
            <p><strong>Summary:</strong> Physics World Stories is a show hosted by Andrew Glester, who discusses interesting stories with the people behind dark matter, gravitational waves, renewable energy sources’ development, and others.</p>
            <a href="https://podcasts.apple.com/us/podcast/physics-world-stories-podcast/id474208361" target="_blank">Listen</a>
        `,
        "QuantaSciencePodcast": `
            <h2>Quanta Science Podcast</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast looks at the basics of theoretical computer science, theoretical physics and the biological sciences.</p>
            <a href="https://podcasts.apple.com/us/podcast/quanta-science-podcast/id1021340531" target="_blank">Listen</a>
        `,
        "TitaniumPhysicists": `
            <h2>The Titanium Physicists</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Contains tutorials for complicated thought processes, like quantum mechanics as well as lightning and black holes.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-titanium-physicists-podcast/id483978280" target="_blank">Listen</a>
        `,
        "GreatMysteriesOfPhysics": `
            <h2>Great Mysteries of Physics</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Specializes in answers to basic physics questions and digs deeper into major enigmas to which the modern physicists have no answer. This podcast will include the concepts of curled-up dimensions as well as parallel universes.</p>
            <a href="https://podcasts.apple.com/us/podcast/great-mysteries-of-physics/id1671588048" target="_blank">Listen</a>
        `,
        "RelativelyCertain": `
            <h2>Relatively Certain</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> A video from the Joint Quantum Institute, that includes lectures by scientists from the University of Maryland concerning astrophysics and quantum computers.</p>
            <a href="https://podcasts.apple.com/us/podcast/relatively-certain/id611418918" target="_blank">Listen</a>
        `,
        "TheoreticalPhysicsSchoolsASC": `
            <h2>Theoretical Physics Schools (ASC)</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> It is possible to find high level talks concerning ASC in Arnold Sommerfeld Center for Theoretical Physics. The material of this podcast ranges from the purely theoretical string theory to the applied condensed matter physics.</p>
            <a href="https://podcasts.apple.com/us/podcast/theoretical-physics-schools-asc/id415301256" target="_blank">Listen</a>
        `,
        "GreatCoursesPodcast": `
            <h2>The Great Courses Podcast: The Torch</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> These programs are knowledge-based programs that include topics used in colleges, examples of which are subjects in science such as physics. shows researchers, talking about some latest findings such as particle physics, neuroscience, and astronomy.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-torch-the-great-courses-podcast/id670966237" target="_blank">Listen</a>
        `,
        // YouTube Channels
        "PBSSpaceTime": `
            <h2>PBS Space Time</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Radiates on astrophysics, space travel and prospect of science fiction. Matt O’Dowd is the person who uploads videos to this channel. He did post doctorate at Space Telescope Science Institute in National Aeronautics and Space Administration.</p>
            <a href="https://www.youtube.com/c/pbsspacetime" target="_blank">Watch</a>
        `,
        "Veritasium": `
            <h2>Veritasium</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> As an encyclopaedia it spans many areas of science and goes up to the complex areas of physics.</p>
            <a href="https://www.youtube.com/user/1veritasium" target="_blank">Watch</a>
        `,
        "SixtySymbols": `
            <h2>Sixty Symbols</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Provides extended discussions on various numbers of physic and astronomy and astrophysics topics. It includes clips giving synopsis of the black hole, gravitational waves, and how particles were formed.</p>
            <a href="https://www.youtube.com/user/sixtysymbols" target="_blank">Watch</a>
        `,
        "MinutePhysics": `
            <h2>MinutePhysics</h2>
            <p><strong>Viewing Effort:</strong> Easy</p>
            <p><strong>Understanding Required:</strong> Moderate</p>
            <p><strong>Summary:</strong> It is best for quick explanations or reviews because it dissects intricate topics well. It covers virtually every aspect in astronomy and physics.</p>
            <a href="https://www.youtube.com/user/minutephysics" target="_blank">Watch</a>
        `,
        "PerimeterInstitute": `
            <h2>Perimeter Institute for Theoretical Physics</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> It is necessary to supply the theoretical levels and render intensive discussions and arguments on theoretical physics. The Perimeter Institute is dedicated to education and Research in the field of fundamental theoretical physics and one of the best outreach centers in the world.</p>
            <a href="https://www.youtube.com/user/PIOutreach" target="_blank">Watch</a>
        `,
        "MITOpenCourseWare": `
            <h2>MIT OpenCourseWare – Physics</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Lectures at the university level concerning a rather wide range of physics-related topics is necessary. Sharing of content of thousands of MIT courses in the form of publication in media that is accessible to the public.</p>
            <a href="https://www.youtube.com/user/MIT" target="_blank">Watch</a>
        `,
        "StanfordUniversityChannel": `
            <h2>Stanford University Channel</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Includes lectures and presentations and guest speakers mostly from the faculty of Stanford Physics.</p>
            <a href="https://www.youtube.com/user/StanfordUniversity" target="_blank">Watch</a>
        `,
        // Blogs
        "CosmicVariance": `
            <h2>Cosmic Variance</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate</p>
            <p><strong>Summary:</strong> By the authors – physicists, the topics covered are from the sphere of physics and astrophysics. Cosmic Variance is the blog about modern physics, astrophysics, cosmology where all topics are described using simple non-technical language to address non-specialized audiences.</p>
            <a href="https://en.wikipedia.org/wiki/Cosmic_Variance_(blog)" target="_blank">Read</a>
        `,
        "SymmetryMagazine": `
            <h2>Symmetry Magazine</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Other experts tend to present complex topics in the area of particle physics. The physics-related topics in blogging areas include dark matter, machine learning and artificial intelligence.</p>
            <a href="https://www.symmetrymagazine.org/" target="_blank">Read</a>
        `,
        "Astrobites": `
            <h2>Astrobites</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Gives general information about contemporary research. Introduces blue stars, black holes, EVERYTHING about the cosmos.</p>
            <a href="https://astrobites.org/" target="_blank">Read</a>
        `,
        "TheReferenceFrame": `
            <h2>The Reference Frame</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> The blog is all about string theory and some ideas concerning science and nature.</p>
            <a href="https://physicsworld.com/a/blog-life-the-reference-frame/" target="_blank">Read</a>
        `,
        "Backreaction": `
            <h2>Backreaction</h2>
            <p><strong>Reading Effort:</strong> Moderate to High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Conversations that are very detailed, conducted by a theoretical physicist. She speaks about the particles to the past, artificial intelligence, and the strings.</p>
            <a href="https://backreaction.blogspot.com/" target="_blank">Read</a>
        `,
        "QuantumFrontiers": `
            <h2>Quantum Frontiers</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Interaction concerning present knowledge of the latest developments in the field of quantum mechanics.</p>
            <a href="https://quantumfrontiers.com/" target="_blank">Read</a>
        `,
        "StartsWithABang": `
            <h2>Starts With A Bang!</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> These include subjects right from quantum physics, the solar system and even the universe.</p>
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
