// Curriculum Pages with Beginner/Intermediate/Advanced Levels
// Based on SLK Modular Therapy Curriculum Specification

// Early Interactions Curriculum Data
const earlyInteractionsCurriculum = {
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
            <p>To make progress in this area, choose one or more of the suggested activities below.</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-responding-to-name', '_blank')">Responding to Name</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-joint-attention', '_blank')">Joint Attention and Turn Taking</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Understanding and Responding to Communication",
        ageRange: "(Ages: 1-2 yrs and beyond)",
        skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between Two Options"],
        content: `
            <p>At this stage, the child builds on their social engagement skills by learning to understand and respond to simple communication cues. They are learning how to follow directions and make choices, which allows for increased participation in their environment.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.</p>
            </div>
            
            <table class="rubric-table">
                <tr>
                    <th>Score</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>5 – Emerging Mastery</td>
                    <td>Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences, and clearly makes choices between two options using words, gestures, or AAC.</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts, and makes choices between two options when prompted or offered in a structured setting.</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Follows simple directions inconsistently and/or only in familiar routines; shows emerging understanding of yes/no questions; can make a choice when given support or a model.</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Responds to directions only with frequent prompting or modeling; rarely responds to yes/no questions or choices without full assistance.</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Does not follow one-step directions, answer yes/no questions, or make choices between two presented options.</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-following-basic-directions', '_blank')">Following Basic Directions</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/language-skills-answering-yesno-questions', '_blank')">Answering Yes/No Questions</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-making-choices', '_blank')">Making a Choice Between Two Options</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Expanding Social Participation and Interaction",
        ageRange: "(Ages: 1-3 yrs and beyond)",
        skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
        content: `
            <p>At this level, the child strengthens social communication skills and builds the ability to participate in early social routines and engage in longer interactions.</p>
            
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
                    <td>Actively participates in familiar social routines with minimal prompting, maintains attention during multi-turn social interactions, and consistently responds to WH-questions in familiar situations.</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Joins in common social games and routines when prompted, stays engaged in short interactions with support, and responds accurately to some WH-questions with occasional prompts.</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Occasionally participates in social routines with frequent support, briefly attends to back-and-forth interactions, and shows emerging understanding of WH-questions.</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Rarely joins social routines, attention to interaction is fleeting, and WH-questions are typically unanswered or repeated.</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Not yet participating in familiar social routines, minimal engagement in social exchanges, no observable response to WH-questions.</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-social-routines', '_blank')">Participating in Early Social Routines</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/functional-communication-interaction-length', '_blank')">Increase Interaction Length</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/language-skills-answering-mixed-questions', '_blank')">Respond to Wh- Questions</button>
            </div>
        `
    }
};

// Function to populate curriculum pages
function populateCurriculumPage(pageId, curriculumData, title, description) {
    const page = document.getElementById(pageId);
    if (!page) return;
    
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
                <div class="level-card" onclick="toggleCurriculumLevel('${pageId}', '${levelId}')">
                    <h4>${level.title}</h4>
                    <p class="age-range">${level.ageRange}</p>
                    <ul>
            `;
            
            level.skills.forEach(skill => {
                html += `<li>${skill}</li>`;
            });
            
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
                        ${level.content}
                    </div>
                </div>
            `;
        }
    });
    
    page.innerHTML = html;
}

// Function to toggle curriculum level visibility
function toggleCurriculumLevel(pageId, levelId) {
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
}

// Initialize curriculum pages when DOM is ready
function initializeCurriculumPages() {
    // Early Interactions Curriculum
    populateCurriculumPage(
        'earlyInteractions',
        earlyInteractionsCurriculum,
        'Early Interactions Curriculum',
        'This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual\'s current level. You don\'t necessarily need to start at the first level if they have advanced beyond it.'
    );
    
    // Add more curriculums here as needed
}

// Hook into page show event to populate curriculum pages dynamically
const originalShowPage = window.showPage;
window.showPage = function(pageId) {
    // Call original function
    if (originalShowPage) {
        originalShowPage(pageId);
    }
    
    // List of all curriculum pages that need initialization
    const curriculumPages = [
        'earlyInteractions', 'analyticLanguage', 'gestaltLanguage', 'aacCurriculum',
        'articulation', 'phonology', 'cyclesPhonology', 'motorSpeech', 'mumbling',
        'followingDirections', 'sequencing', 'abstractLanguage', 'vocabulary',
        'askingAnswering', 'grammarSyntax', 'literacyFoundations', 'cyclesLanguage',
        'healthyVoice', 'voiceCurriculum', 'resonance', 'prosody', 'fluencyCurriculum',
        'stuttering', 'cluttering', 'wordFinding', 'socialAwareness', 'emotionalRegulation',
        'conversationalSkills', 'selectiveMutism'
    ];
    
    // Initialize curriculum content if it's a curriculum page
    if (curriculumPages.includes(pageId)) {
        setTimeout(() => {
            initializeCurriculumPages();
            
            // Also call any existing populate functions from curriculum-content-2.js
            if (typeof window[`populate${pageId.charAt(0).toUpperCase() + pageId.slice(1)}`] === 'function') {
                window[`populate${pageId.charAt(0).toUpperCase() + pageId.slice(1)}`]();
            }
        }, 100);
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize curriculum pages
    setTimeout(() => {
        initializeCurriculumPages();
    }, 500);
});

// Export functions for global use
window.populateCurriculumPage = populateCurriculumPage;
window.toggleCurriculumLevel = toggleCurriculumLevel;
window.initializeCurriculumPages = initializeCurriculumPages;