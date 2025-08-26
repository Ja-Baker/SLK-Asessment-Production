// Curriculum implementation matching old repository format exactly

// Curriculum content data
window.curriculumContent = {
    earlyInteractions: {
        title: "Early Interactions Curriculum",
        description: "This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.",
        beginner: {
            title: "Beginner Level: Building Awareness and Engagement",
            ageRange: "(Ages: 9-15 months and beyond)",
            skills: ["Responding to Name", "Joint Attention", "Basic Turn Taking"],
            content: `
                <p>At this level, the focus is on helping the child become more engaged in communication and interactions with others. Many children who struggle with communication may not yet respond to their name consistently or participate in shared activities. Therapy at this level uses play-based strategies to encourage engagement and increase responsiveness to social interactions.</p>
                
                <div class="goal-box">
                    <h4>Sample Goal:</h4>
                    <p>By the end of the reporting period, ____ will improve social awareness and engagement skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.</p>
                </div>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>5 – Emerging Mastery</td>
                        <td>Consistently responds to name, actively shares attention during play (e.g., looks between object and adult, points/showing), and initiates or participates in turn-taking activities with minimal support.</td>
                    </tr>
                    <tr>
                        <td>4 – Strong Progress</td>
                        <td>Responds to name in most settings; shares joint attention with adult support (e.g., follows gaze or pointing); participates in familiar turn-taking routines but may need reminders or prompts to stay engaged.</td>
                    </tr>
                    <tr>
                        <td>3 – Developing</td>
                        <td>Inconsistently responds to name; shows some awareness of shared activities but rarely shifts attention between people and objects; may imitate turn-taking actions but needs frequent support to participate.</td>
                    </tr>
                    <tr>
                        <td>2 – Emerging Skills</td>
                        <td>Rarely responds to name; joint attention is limited or absent (focuses only on object or person, not both); turn-taking occurs only with high levels of prompting and modeling.</td>
                    </tr>
                    <tr>
                        <td>1 – Limited/Not Yet Observed</td>
                        <td>Does not respond to name; no observable joint attention; does not engage in or attempt turn-taking activities even with adult modeling.</td>
                    </tr>
                </table>
                
                <h4>Therapy Activities:</h4>
                <p>To make progress in this area, choose one or more of the suggested activities below. You can present them in any order and skip any activities the individual has already mastered.</p>
                
                <div class="activity-grid">
                    <button class="activity-btn" onclick="showSkill('respondingToName')">Responding to Name</button>
                    <button class="activity-btn" onclick="showSkill('jointAttention')">Joint Attention and Turn Taking</button>
                </div>
            `
        },
        intermediate: {
            title: "Intermediate Level: Understanding and Responding to Communication",
            ageRange: "(Ages: 1-2 yrs and beyond)",
            skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between two Options"],
            content: `
                <p>At this stage, the child builds on their social engagement skills by learning to understand and respond to simple communication cues.</p>
                
                <div class="goal-box">
                    <h4>Sample Goal:</h4>
                    <p>By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric.</p>
                </div>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>5 – Emerging Mastery</td>
                        <td>Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences.</td>
                    </tr>
                    <tr>
                        <td>4 – Strong Progress</td>
                        <td>Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts.</td>
                    </tr>
                    <tr>
                        <td>3 – Developing</td>
                        <td>Follows simple directions inconsistently; shows emerging understanding of yes/no questions.</td>
                    </tr>
                    <tr>
                        <td>2 – Emerging Skills</td>
                        <td>Responds to directions only with frequent prompting; rarely responds to yes/no questions without assistance.</td>
                    </tr>
                    <tr>
                        <td>1 – Limited/Not Yet Observed</td>
                        <td>Does not follow one-step directions or answer yes/no questions.</td>
                    </tr>
                </table>
                
                <h4>Therapy Activities:</h4>
                <p>To make progress in this area, choose one or more of the suggested activities below.</p>
                
                <div class="activity-grid">
                    <button class="activity-btn" onclick="showSkill('followingBasicDirections')">Following Basic Directions</button>
                    <button class="activity-btn" onclick="showSkill('answeringYesNo')">Answering Yes/No Questions</button>
                    <button class="activity-btn" onclick="showSkill('makingChoices')">Making a Choice Between Two Options</button>
                </div>
            `
        },
        advanced: {
            title: "Advanced Level: Expanding Social Participation",
            ageRange: "(Ages: 1-3 yrs and beyond)",
            skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
            content: `
                <p>At this level, the child strengthens social communication skills and builds the ability to participate in early social routines.</p>
                
                <div class="goal-box">
                    <h4>Sample Goal:</h4>
                    <p>By the end of the reporting period, ____ will improve social participation and interaction by achieving at least a 4 out of 5 on the following rubric.</p>
                </div>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>5 – Emerging Mastery</td>
                        <td>Actively participates in familiar social routines with minimal prompting, maintains attention during multi-turn interactions.</td>
                    </tr>
                    <tr>
                        <td>4 – Strong Progress</td>
                        <td>Joins in common social games and routines when prompted, stays engaged in short interactions with support.</td>
                    </tr>
                    <tr>
                        <td>3 – Developing</td>
                        <td>Occasionally participates in social routines with frequent support, briefly attends to back-and-forth interactions.</td>
                    </tr>
                    <tr>
                        <td>2 – Emerging Skills</td>
                        <td>Rarely joins social routines, attention to interaction is fleeting.</td>
                    </tr>
                    <tr>
                        <td>1 – Limited/Not Yet Observed</td>
                        <td>Not yet participating in familiar social routines, minimal engagement in social exchanges.</td>
                    </tr>
                </table>
                
                <h4>Therapy Activities:</h4>
                <p>To make progress in this area, choose one or more of the suggested activities below.</p>
                
                <div class="activity-grid">
                    <button class="activity-btn" onclick="showSkill('socialRoutines')">Participating in Early Social Routines</button>
                    <button class="activity-btn" onclick="showSkill('interactionLength')">Increase Interaction Length</button>
                    <button class="activity-btn" onclick="showSkill('whQuestions')">Respond to Wh- Questions</button>
                </div>
            `
        }
    }
    // Add other curriculums here as needed
};

// Function to render curriculum page - matching old repository format exactly
function renderCurriculum(curriculumId) {
    const data = window.curriculumContent[curriculumId];
    if (!data) return;

    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;

    const activePage = contentDiv.querySelector('.page.active');
    if (!activePage) return;

    // Build HTML matching old repository format exactly
    let html = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <div class="level-selection">
    `;

    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    levels.forEach(levelId => {
        const level = data[levelId];
        if (!level) return;
        
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('${curriculumId}', '${levelId}')">
                    Choose ${level.title.split(':')[0]}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level (hidden by default)
    levels.forEach(levelId => {
        const level = data[levelId];
        if (!level) return;
        
        html += `
            <div id="${curriculumId}-${levelId}" class="expandable-section">
                <div class="expand-header" onclick="toggleExpand(this)">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });

    activePage.innerHTML = html;
}

// Function to show curriculum level - matches old repository behavior
window.showCurriculumLevel = function(curriculumId, level) {
    const levelSection = document.getElementById(curriculumId + '-' + level);
    if (levelSection) {
        const header = levelSection.querySelector('.expand-header');
        const content = levelSection.querySelector('.expand-content');
        
        if (header && content) {
            // Close all other sections
            document.querySelectorAll('.expand-content.active').forEach(c => {
                if (c !== content) {
                    c.classList.remove('active');
                    c.previousElementSibling.classList.remove('active');
                    c.previousElementSibling.querySelector('.arrow').textContent = '▶';
                }
            });
            
            // Toggle this section
            header.classList.add('active');
            content.classList.add('active');
            header.querySelector('.arrow').textContent = '▼';
            
            // Scroll to the section
            setTimeout(() => {
                levelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
};

// Function to toggle expand/collapse
window.toggleExpand = function(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    
    header.classList.toggle('active');
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        arrow.textContent = '▼';
    } else {
        arrow.textContent = '▶';
    }
};

// Function to handle skill navigation
window.showSkill = function(skillId) {
    // Navigate to skill page
    if (window.showPage) {
        window.showPage(skillId);
    }
};

// Hook into existing page navigation
const originalShowPage = window.showPage;
window.showPage = function(pageNumber) {
    // Call original function
    if (originalShowPage) {
        originalShowPage(pageNumber);
    }

    // Map page numbers to curriculum IDs
    const pageToCurriculum = {
        14: 'earlyInteractions',
        15: 'analyticLanguage',
        16: 'gestaltLanguage',
        17: 'aacCurriculum',
        18: 'articulation',
        19: 'phonology',
        20: 'motorSpeech',
        21: 'mumbling',
        22: 'cyclesPhonology',
        23: 'followingDirections',
        24: 'askingAnswering',
        25: 'sequencing',
        26: 'abstractLanguage',
        27: 'grammarSyntax',
        28: 'vocabulary',
        29: 'literacyFoundations',
        30: 'cyclesLanguage',
        31: 'healthyVoice',
        32: 'voiceCurriculum',
        33: 'resonance',
        34: 'prosody',
        35: 'socialAwareness',
        36: 'emotionalRegulation',
        37: 'conversationalSkills',
        38: 'selectiveMutism',
        39: 'foundationsFluency',
        40: 'wordFinding',
        41: 'stuttering',
        42: 'cluttering'
    };

    const curriculumId = pageToCurriculum[pageNumber];
    if (curriculumId) {
        setTimeout(() => {
            renderCurriculum(curriculumId);
        }, 100);
    }
};