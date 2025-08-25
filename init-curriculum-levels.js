// Initialize All Curriculum Pages with Beginner/Intermediate/Advanced Levels
// This script ensures all curriculum pages properly display the three-level format

// Wait for all scripts to load
window.addEventListener('load', function() {
    console.log('Initializing curriculum pages with levels...');
    
    // Function to populate a curriculum page with level cards
    function populateCurriculumWithLevels(pageId, curriculumData, title, description) {
        const page = document.getElementById(pageId);
        if (!page || !curriculumData) {
            console.log(`Page ${pageId} not found or no data`);
            return;
        }
        
        // Check if already populated
        if (page.innerHTML.trim() !== '') {
            console.log(`Page ${pageId} already has content`);
            return;
        }
        
        let html = `
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="level-selection">
        `;
        
        // Add level cards
        const levels = ['beginner', 'intermediate', 'advanced'];
        levels.forEach(levelId => {
            const level = curriculumData[levelId];
            if (level) {
                html += `
                    <div class="level-card" onclick="toggleLevelDisplay('${pageId}', '${levelId}')">
                        <h4>${level.title}</h4>
                        <p class="age-range">${level.ageRange || ''}</p>
                        <ul>
                `;
                
                if (level.skills && Array.isArray(level.skills)) {
                    level.skills.forEach(skill => {
                        html += `<li>${skill}</li>`;
                    });
                }
                
                html += `
                        </ul>
                        <button class="area-btn">Choose ${level.title.split(':')[0]}</button>
                    </div>
                `;
            }
        });
        
        html += `</div>`;
        
        // Add level content sections
        levels.forEach(levelId => {
            const level = curriculumData[levelId];
            if (level) {
                html += `
                    <div id="${pageId}-${levelId}-content" class="level-content">
                        <div class="level-details">
                            ${level.content || ''}
                        </div>
                    </div>
                `;
            }
        });
        
        page.innerHTML = html;
        console.log(`Populated ${pageId} with level format`);
    }
    
    // Function to toggle level display
    window.toggleLevelDisplay = function(pageId, levelId) {
        // Hide all level contents for this curriculum
        const allContents = document.querySelectorAll(`#${pageId} .level-content`);
        allContents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Show the selected level content
        const selectedContent = document.getElementById(`${pageId}-${levelId}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
            selectedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    // Override showPage to populate curriculum pages
    const originalShowPage = window.showPage;
    window.showPage = function(pageId) {
        console.log(`Showing page: ${pageId}`);
        
        // Call original function
        if (originalShowPage) {
            originalShowPage.apply(this, arguments);
        }
        
        // Check if curriculum data exists and populate
        setTimeout(() => {
            // Check for curriculum data from curriculum-content-2.js
            if (window.curriculumContent) {
                switch(pageId) {
                    case 'abstractLanguage':
                        if (window.curriculumContent.abstractLanguage) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.abstractLanguage,
                                'Abstract Language Curriculum',
                                'This curriculum helps individuals understand and use figurative language, make inferences, and grasp non-literal meanings in communication.'
                            );
                        }
                        break;
                        
                    case 'grammarSyntax':
                        if (window.curriculumContent.grammarSyntax) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.grammarSyntax,
                                'Grammar & Syntax Curriculum',
                                'This curriculum builds grammatical accuracy and sentence complexity through structured practice with grammar rules and sentence construction.'
                            );
                        }
                        break;
                        
                    case 'vocabulary':
                        if (window.curriculumContent.vocabulary) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.vocabulary,
                                'Vocabulary Curriculum',
                                'This curriculum expands vocabulary knowledge and usage, helping individuals learn and use new words effectively in various contexts.'
                            );
                        }
                        break;
                        
                    case 'literacyFoundations':
                        if (window.curriculumContent.literacyFoundations) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.literacyFoundations,
                                'Language Foundations for Literacy Curriculum',
                                'This curriculum develops the language skills that support reading and writing success, including phonological awareness, narrative skills, and academic vocabulary.'
                            );
                        }
                        break;
                        
                    case 'cyclesLanguage':
                        if (window.curriculumContent.cyclesLanguage) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.cyclesLanguage,
                                'Cycles Approach for Language Curriculum',
                                'This curriculum uses a cyclical approach to address multiple language areas systematically, rotating through different skill areas to provide comprehensive language support.'
                            );
                        }
                        break;
                        
                    case 'cyclesPhonology':
                        if (window.curriculumContent.cyclesPhonology) {
                            populateCurriculumWithLevels(
                                pageId,
                                window.curriculumContent.cyclesPhonology,
                                'Cycles Approach for Phonology Curriculum',
                                'This curriculum uses a cyclical approach to address multiple phonological processes, working on each pattern for short periods before cycling to the next.'
                            );
                        }
                        break;
                }
            }
            
            // Check for early interactions curriculum from curriculum-pages-with-levels.js
            if (pageId === 'earlyInteractions' && window.earlyInteractionsCurriculum) {
                populateCurriculumWithLevels(
                    pageId,
                    window.earlyInteractionsCurriculum,
                    'Early Interactions Curriculum',
                    'This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual\'s current level.'
                );
            }
        }, 200);
    };
});

console.log('Curriculum level initialization script loaded');