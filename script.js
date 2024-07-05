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
            <p><strong>Summary:</strong> This podcast delves into captivating physics stories and innovations, bringing advanced topics to life through interviews with leading physicists.</p>
            <a href="https://podcasts.apple.com/us/podcast/physics-world-stories-podcast/id474208361" target="_blank">Listen</a>
        `,
        "QuantaSciencePodcast": `
            <h2>Quanta Science Podcast</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Explore in-depth news stories about developments in physics, mathematics, and computer science, presented by Quanta Magazine's editorial team.</p>
            <a href="https://podcasts.apple.com/us/podcast/quanta-science-podcast/id1021340531" target="_blank">Listen</a>
        `,
        "TitaniumPhysicists": `
            <h2>The Titanium Physicists</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Hosted by Dr. Ben Tippett, this podcast explains complex physics concepts in an accessible way, featuring discussions with top physicists.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-titanium-physicists-podcast/id483978280" target="_blank">Listen</a>
        `,
        "GreatMysteriesOfPhysics": `
            <h2>Great Mysteries of Physics</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This series explores fundamental questions in physics, featuring insights from experts in the field.</p>
            <a href="https://podcasts.apple.com/us/podcast/great-mysteries-of-physics/id1671588048" target="_blank">Listen</a>
        `,
        "RelativelyCertain": `
            <h2>Relatively Certain</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Produced by the Joint Quantum Institute, this podcast covers topics from quantum computing to astrophysics, straight from scientists.</p>
            <a href="https://podcasts.apple.com/us/podcast/relatively-certain/id611418918" target="_blank">Listen</a>
        `,
        "TheoreticalPhysicsSchoolsASC": `
            <h2>Theoretical Physics Schools (ASC)</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Advanced discussions from the Arnold Sommerfeld Center for Theoretical Physics, covering a wide range of current topics in theoretical physics.</p>
            <a href="https://podcasts.apple.com/us/podcast/theoretical-physics-schools-asc/id415301256" target="_blank">Listen</a>
        `,
        "GreatCoursesPodcast": `
            <h2>The Great Courses Podcast: The Torch</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Features lectures by top university professors on various scientific topics, offering college-level insights into complex subjects.</p>
            <a href="https://podcasts.apple.com/us/podcast/the-torch-the-great-courses-podcast/id670966237" target="_blank">Listen</a>
        `,
        // YouTube Channels
        "PBSSpaceTime": `
            <h2>PBS Space Time</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Offers in-depth explanations of advanced physics and cosmology topics, suitable for college-level understanding.</p>
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
            <p><strong>Summary:</strong> Written by physicists, this blog covers a range of topics in cosmology and particle physics, suitable for those with a strong background in the field.</p>
            <a href="https://en.wikipedia.org/wiki/Cosmic_Variance_(blog)" target="_blank">Learn More</a>
        `,
        "SymmetryMagazine": `
            <h2>Symmetry Magazine</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Offers engaging stories on particle physics and related fields, written for readers with a solid understanding of the subject.</p>
            <a href="https://www.symmetrymagazine.org/" target="_blank">Learn More</a>
        `,
        "Astrobites": `
            <h2>Astrobites</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> A daily literature journal that summarizes new astrophysics research, ideal for graduate-level students and researchers.</p>
            <a href="https://astrobites.org/" target="_blank">Learn More</a>
        `,
        "TheReferenceFrame": `
            <h2>The Reference Frame</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Provides detailed and technical discussions on various physics topics, suitable for those with deep knowledge of the field.</p>
            <a href="https://physicsworld.com/a/blog-life-the-reference-frame/" target="_blank">Learn More</a>
        `,
        "Backreaction": `
            <h2>Backreaction</h2>
            <p><strong>Reading Effort:</strong> Moderate to High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> In-depth discussions by theoretical physicist Sabine Hossenfelder, covering advanced topics in physics.</p>
            <a href="https://backreaction.blogspot.com/" target="_blank">Learn More</a>
        `,
        "QuantumFrontiers": `
            <h2>Quantum Frontiers</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Discusses recent advances in quantum physics research, written by experts in the field.</p>
            <a href="https://quantumfrontiers.com/" target="_blank">Learn More</a>
        `,
        "StartsWithABang": `
            <h2>Starts With A Bang!</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Accessible yet detailed posts by astrophysicist Ethan Siegel, covering a wide range of cosmological topics.</p>
            <a href="https://bigthink.com/starts-with-a-bang/" target="_blank">Learn More</a>
        `,
        //Books
        "TheElegantUniverse": `
            <h2>The Elegant Universe by Brian Greene</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Explains string theory and the quest for a unified theory, suitable for physics majors and enthusiasts.</p>
            <a href="https://www.goodreads.com/book/show/8049273-the-elegant-universe" target="_blank">Read</a>
        `,
        "TheParticleAtTheEndOfTheUniverse": `
            <h2>The Particle at the End of the Universe by Sean Carroll</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Chronicles the discovery of the Higgs boson, offering insights into particle physics.</p>
            <a href="https://www.goodreads.com/book/show/15744013-the-particle-at-the-end-of-the-universe" target="_blank">Read</a>
        `,
        "BlackHolesAndTimeWarps": `
            <h2>Black Holes and Time Warps by Kip S. Thorne</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Explores the nature of black holes and their implications, written by a leading physicist.</p>
            <a href="https://www.goodreads.com/book/show/17362.Black_Holes_Time_Warps" target="_blank">Read</a>
        `,
        "ABriefHistoryOfTime": `
            <h2>A Brief History of Time by Stephen Hawking</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Discusses the nature of the universe, black holes, and time, making complex concepts accessible.</p>
            <a href="https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time" target="_blank">Read</a>
        `,
        "Gravitation": `
            <h2>Gravitation by Charles W. Misner, Kip S. Thorne, and John Archibald Wheeler</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> A comprehensive textbook on general relativity, essential for advanced physics students.</p>
            <a href="https://www.goodreads.com/book/show/638371.Gravitation" target="_blank">Read</a>
        `,
        "IntroductionToQuantumMechanics": `
            <h2>Introduction to Quantum Mechanics by David J. Griffiths</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Standard undergraduate textbook on quantum mechanics, providing a thorough introduction to the subject.</p>
            <a href="https://www.goodreads.com/book/show/153908.Introduction_to_Quantum_Mechanics" target="_blank">Read</a>
        `,
        "Cosmology": `
            <h2>Cosmology by Steven Weinberg</h2>
            <p><strong>Reading Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Advanced textbook on cosmology by Nobel laureate Steven Weinberg, suitable for graduate students and researchers.</p>
            <a href="https://www.goodreads.com/book/show/20183010" target="_blank">Read</a>
        `
    };
    
    modalContentPlaceholder.innerHTML = resourceContent[resourceId];
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Open the default tab
document.getElementsByClassName("tablink")[0].click();

// Close the modal when clicking anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
