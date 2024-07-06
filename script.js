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
            <p><strong>Summary:</strong> Podcast hosted by Andrew Glester, who discusses stories with the people behind dark matter, gravitational waves, renewable energy sources, and more (Glester).</p>
            <a href="https://podcasts.apple.com/us/podcast/physics-world-stories-podcast/id474208361" target="_blank">Listen</a>
        `,
        "QuantaSciencePodcast": `
            <h2>Quanta Science Podcast</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast covers the basics of theoretical computer science and theoretical physics ("Quanta Science Podcast").</p>
            <a href="https://podcasts.apple.com/us/podcast/quanta-science-podcast/id1021340531" target="_blank">Listen</a>
        `,
        "TitaniumPhysicists": `
            <h2>The Titanium Physicists</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> The Titanium Physicists contains interesting topics, like quantum mechanics, lightning, and black holes (Tippett).</p>
            <a href="https://podcasts.apple.com/us/podcast/the-titanium-physicists-podcast/id483978280" target="_blank">Listen</a>
        `,
        "GreatMysteriesOfPhysics": `
            <h2>Great Mysteries of Physics</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast answers basic physics questions and digs deeper into problems that the modern physicists have no answer to. This podcast includes concepts of curled-up dimensions and parallel universes (Frankel).</p>
            <a href="https://podcasts.apple.com/us/podcast/great-mysteries-of-physics/id1671588048" target="_blank">Listen</a>
        `,
        "RelativelyCertain": `
            <h2>Relatively Certain</h2>
            <p><strong>Listening Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Relatively Certain includes lectures by scientists from the University of Maryland covering the topics of astrophysics and quantum computers ("Relatively Certain").</p>
            <a href="https://podcasts.apple.com/us/podcast/relatively-certain/id611418918" target="_blank">Listen</a>
        `,
        "TheoreticalPhysicsSchoolsASC": `
            <h2>Theoretical Physics Schools (ASC)</h2>
            <p><strong>Listening Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast ranges from theoretical string theory to applied condensed matter physics ("Theoretical Physics Schools").</p>
            <a href="https://podcasts.apple.com/us/podcast/theoretical-physics-schools-asc/id415301256" target="_blank">Listen</a>
        `,
        "TheCrisisInPhysics": `
            <h2>The Crisis in Physics</h2>
            <p><strong>Listening Effort:</strong> Moderate to High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This podcast covers what situation fundamental physics is in right now (Carroll).</p>
            <a href="https://www.preposterousuniverse.com/podcast/2023/07/31/245-solo-the-crisis-in-physics/" target="_blank">Listen</a>
        `,
        // YouTube Channels
        "PBSSpaceTime": `
            <h2>PBS Space Time</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> This youtube channel covers topics on astrophysics, space travel, and science fiction. Matt O’Dowd, the person who uploads videos to this channel, got his Ph.D. at NASA's Space Telescope Science Institute (O'Dowd).</p>
            <a href="https://www.youtube.com/c/pbsspacetime" target="_blank">Watch</a>
        `,
        "Veritasium": `
            <h2>Veritasium</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Veritasium spans across many areas of science and goes up to the complex areas of physics ("Veritasium").</p>
            <a href="https://www.youtube.com/user/1veritasium" target="_blank">Watch</a>
        `,
        "SixtySymbols": `
            <h2>Sixty Symbols</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Sixty symbols includes discussions on various physic, astronomy, and astrophysics topics. This youtube channel includes mathematical equations of how particles were formed ("Sixty Symbols").</p>
            <a href="https://www.youtube.com/user/sixtysymbols" target="_blank">Watch</a>
        `,
        "MinutePhysics": `
            <h2>MinutePhysics</h2>
            <p><strong>Viewing Effort:</strong> Low</p>
            <p><strong>Understanding Required:</strong> Moderate</p>
            <p><strong>Summary:</strong> MinutePhysics is great for quick explanations. It covers virtually every aspect in astronomy and physics (Reich).</p>
            <a href="https://www.youtube.com/user/minutephysics" target="_blank">Watch</a>
        `,
        "PerimeterInstitute": `
            <h2>Perimeter Institute for Theoretical Physics</h2>
            <p><strong>Viewing Effort:</strong> High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> The Perimeter Institute is dedicated to education and research in the field of fundamental theoretical physics and is one of the best educational outreach centers in the world ("Perimeter Institute for Theoretical Physics").</p>
            <a href="https://www.youtube.com/user/PIOutreach" target="_blank">Watch</a>
        `,
        "TheScienceAsylum": `
            <h2>The Science Asylum</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> The Science Asylum covers topics from physics to astronomy and has intriguing videos (Lucid).</p>
            <a href="https://www.youtube.com/user/TheScienceAsylum/videos" target="_blank">Watch</a>
        `,
        "DrPhysicsA": `
            <h2>DrPhysicsA</h2>
            <p><strong>Viewing Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> A series of physics videos that give a basic introduction to the topics covered. These videos assume basic knowledge of algebra, calculus, and some general physics  (“DrPhysicsA”).</p>
            <a href="https://www.youtube.com/user/DrPhysicsA/videos" target="_blank">Watch</a>
        `,
        // Blogs
        "CosmicVariance": `
            <h2>Cosmic Variance</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Low</p>
            <p><strong>Summary:</strong> Cosmic Variance is a blog about modern physics, astrophysics, and cosmology where all topics are described using simple and easy to understand language. ("Cosmic Variance").</p>
            <a href="https://web.archive.org/web/20080407203546/http://cosmicvariance.com:80/" target="_blank">Read</a>
        `,
        "SymmetryMagazine": `
            <h2>Symmetry Magazine</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Symmetry Magazine features topics of dark matter, machine learning and artificial intelligence ("Symmetry Magazine").</p>
            <a href="https://www.symmetrymagazine.org/" target="_blank">Read</a>
        `,
        "Astrobites": `
            <h2>Astrobites</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Astrobites gives general information about contemporary research and it also introduces blue stars, black holes, and everything else about the cosmos (Golay).</p>
            <a href="https://astrobites.org/" target="_blank">Read</a>
        `,
        "FlippingPhysics": `
            <h2>Flipping Physics</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> The Flipping Physics blog is about the fundamentals of physics taught by a physics teacher (Thomas-Palmer).</p>
            <a href="https://www.flippingphysics.com/blog" target="_blank">Read</a>
        `,
        "Backreaction": `
            <h2>Backreaction</h2>
            <p><strong>Reading Effort:</strong> Moderate to High</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> Backreaction includes conversations by a theoretical physicist. She speaks about sending particles to the past, artificial intelligence, and string theory (Hossenfelder).</p>
            <a href="https://backreaction.blogspot.com/" target="_blank">Read</a>
        `,
        "QuantumFrontiers": `
            <h2>Quantum Frontiers</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> High</p>
            <p><strong>Summary:</strong> The Quantum Frontiers blog features the latest developments in the field of quantum mechanics (Halpern).</p>
            <a href="https://quantumfrontiers.com/" target="_blank">Read</a>
        `,
        "StartsWithABang": `
            <h2>Starts With A Bang!</h2>
            <p><strong>Reading Effort:</strong> Moderate</p>
            <p><strong>Understanding Required:</strong> Moderate to High</p>
            <p><strong>Summary:</strong> Starts With A Bang includes subjects from quantum physics to the solar system and the universe (Siegel).</p>
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
