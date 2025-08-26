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
            // Complete curriculum mapping for ALL pages
            const curriculumMapping = {
                // From curriculum-content-2.js
                'abstractLanguage': {
                    dataSource: 'curriculumContent',
                    dataKey: 'abstractLanguage',
                    title: 'Abstract Language Curriculum',
                    description: 'This curriculum helps individuals understand and use figurative language, make inferences, and grasp non-literal meanings in communication.'
                },
                'grammarSyntax': {
                    dataSource: 'curriculumContent',
                    dataKey: 'grammarSyntax',
                    title: 'Grammar & Syntax Curriculum',
                    description: 'This curriculum builds grammatical accuracy and sentence complexity through structured practice with grammar rules and sentence construction.'
                },
                'vocabulary': {
                    dataSource: 'curriculumContent',
                    dataKey: 'vocabulary',
                    title: 'Vocabulary Curriculum',
                    description: 'This curriculum expands vocabulary knowledge and usage, helping individuals learn and use new words effectively in various contexts.'
                },
                'literacyFoundations': {
                    dataSource: 'curriculumContent',
                    dataKey: 'literacyFoundations',
                    title: 'Language Foundations for Literacy Curriculum',
                    description: 'This curriculum develops the language skills that support reading and writing success, including phonological awareness, narrative skills, and academic vocabulary.'
                },
                'cyclesLanguage': {
                    dataSource: 'curriculumContent',
                    dataKey: 'cyclesLanguage',
                    title: 'Cycles Approach for Language Curriculum',
                    description: 'This curriculum uses a cyclical approach to address multiple language areas systematically, rotating through different skill areas to provide comprehensive language support.'
                },
                'cyclesPhonology': {
                    dataSource: 'curriculumContent',
                    dataKey: 'cyclesPhonology',
                    title: 'Cycles Approach for Phonology Curriculum',
                    description: 'This curriculum uses a cyclical approach to address multiple phonological processes, working on each pattern for short periods before cycling to the next.'
                },
                
                // From all-curriculum-data.js
                'foundationsFluency': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'foundationsFluency',
                    title: 'Foundations for Fluency Curriculum',
                    description: 'Fluent speech isn\'t just about getting words out smoothly—it\'s about having the physical control, emotional confidence, and flexibility to communicate effectively in any situation.'
                },
                'stuttering': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'stuttering',
                    title: 'Stuttering Curriculum',
                    description: 'This curriculum provides structured strategies to support smoother, more confident communication for individuals who stutter.'
                },
                'wordFinding': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'wordFinding',
                    title: 'Word Finding/Word Retrieval Curriculum',
                    description: 'This curriculum helps individuals who struggle with finding the right words, reducing hesitation and pauses due to word retrieval difficulties.'
                },
                'cluttering': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'cluttering',
                    title: 'Cluttering Curriculum',
                    description: 'This curriculum addresses speech that tends to be too fast, disorganized, or difficult to understand, providing strategies to improve clarity and self-monitoring.'
                },
                
                // From curriculum-pages-with-levels.js
                'earlyInteractions': {
                    dataSource: 'earlyInteractionsCurriculum',
                    dataKey: null,
                    title: 'Early Interactions Curriculum',
                    description: 'This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual\'s current level.'
                },
                
                // From all-curriculum-data.js - Additional curriculums
                'analyticLanguage': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'analyticLanguage',
                    title: 'Analytic Language Processor Curriculum (First Words)',
                    description: 'This curriculum is designed for children who learn language analytically, building vocabulary one word at a time and progressing through natural developmental stages.'
                },
                'gestaltLanguage': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'gestaltLanguage',
                    title: 'Gestalt Language Processor Curriculum (Shaping Echolalia)',
                    description: 'This curriculum supports children who learn language in chunks (gestalts), using echolalia and scripts as stepping stones to self-generated speech.'
                },
                'aacCurriculum': {
                    dataSource: 'allCurriculumData',
                    dataKey: 'aacCurriculum',
                    title: 'Early Augmentative/Alternative Communication (AAC) Curriculum',
                    description: 'This curriculum provides comprehensive AAC support for individuals who use picture boards, speech-generating devices, or other alternative communication methods.'
                }
            };
            
            // Check if this page has curriculum data
            if (curriculumMapping[pageId]) {
                const mapping = curriculumMapping[pageId];
                let curriculumData = null;
                
                // Get data from appropriate source
                if (mapping.dataSource === 'curriculumContent' && window.curriculumContent) {
                    curriculumData = window.curriculumContent[mapping.dataKey];
                } else if (mapping.dataSource === 'allCurriculumData' && window.allCurriculumData) {
                    curriculumData = window.allCurriculumData[mapping.dataKey];
                } else if (mapping.dataSource === 'earlyInteractionsCurriculum' && window.earlyInteractionsCurriculum) {
                    curriculumData = window.earlyInteractionsCurriculum;
                }
                
                // Populate the curriculum page if data exists
                if (curriculumData) {
                    populateCurriculumWithLevels(
                        pageId,
                        curriculumData,
                        mapping.title,
                        mapping.description
                    );
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