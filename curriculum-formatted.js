// Complete Curriculum Data with Old Repository Format
window.curriculumData = {
    // FUNCTIONAL COMMUNICATION (Pages 14-17)
    earlyInteractions: {
        title: "Early Interactions Curriculum",
        description: "This curriculum will encourage the individual to engage, respond, and participate in social interactions. Choose the level below that best fits this individual's current level. You don't necessarily need to start at the first level if they have advanced beyond it.",
        levels: [
            {
                id: "beginnerEI",
                title: "Beginner Level",
                subtitle: "Building Awareness and Engagement",
                ageRange: "(Ages: 9-15 months and beyond)",
                skills: ["Responding to Name", "Joint Attention", "Basic Turn Taking"],
                content: {
                    description: "At this level, the focus is on helping the child become more engaged in communication and interactions with others. Many children who struggle with communication may not yet respond to their name consistently or participate in shared activities. Therapy at this level uses play-based strategies to encourage engagement and increase responsiveness to social interactions.",
                    goal: "By the end of the reporting period, ____ will improve social awareness and engagement skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Consistently responds to name, actively shares attention during play (e.g., looks between object and adult, points/showing), and initiates or participates in turn-taking activities with minimal support."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Responds to name in most settings; shares joint attention with adult support (e.g., follows gaze or pointing); participates in familiar turn-taking routines but may need reminders or prompts to stay engaged."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Inconsistently responds to name; shows some awareness of shared activities but rarely shifts attention between people and objects; may imitate turn-taking actions but needs frequent support to participate."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Rarely responds to name; joint attention is limited or absent (focuses only on object or person, not both); turn-taking occurs only with high levels of prompting and modeling."
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Does not respond to name; no observable joint attention; does not engage in or attempt turn-taking activities even with adult modeling."
                        }
                    ],
                    activities: [
                        { id: "respondingToName", title: "Responding to Name" },
                        { id: "jointAttention", title: "Joint Attention and Turn Taking" }
                    ]
                }
            },
            {
                id: "intermediateEI",
                title: "Intermediate Level",
                subtitle: "Understanding and Responding to Communication",
                ageRange: "(Ages: 1-2 yrs and beyond)",
                skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between two Options"],
                content: {
                    description: "At this stage, the child builds on their social engagement skills by learning to understand and respond to simple communication cues. They are learning how to follow directions and make choices, which allows for increased participation in their environment.",
                    goal: "By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences, and clearly makes choices between two options using words, gestures, or AAC."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts, and makes choices between two options when prompted or offered in a structured setting."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Follows simple directions inconsistently and/or only in familiar routines; shows emerging understanding of yes/no questions; can make a choice when given support or a model."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Responds to directions only with frequent prompting or modeling; rarely responds to yes/no questions or choices without full assistance."
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Does not follow one-step directions, answer yes/no questions, or make choices between two presented options."
                        }
                    ],
                    activities: [
                        { id: "followingBasicDirections", title: "Following Basic Directions" },
                        { id: "answeringYesNo", title: "Answering Yes/No Questions" },
                        { id: "makingChoice", title: "Making a Choice Between Two Options" }
                    ]
                }
            },
            {
                id: "advancedEI",
                title: "Advanced Level",
                subtitle: "Expanding Social Participation and Interaction",
                ageRange: "(Ages: 1-3 yrs and beyond)",
                skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
                content: {
                    description: "At this level, the child strengthens social communication skills and builds the ability to participate in early social routines and engage in longer interactions.",
                    goal: "By the end of the reporting period, ____ will improve social participation and interaction by achieving at least a 4 out of 5 on the following rubric.",
                    rubric: [
                        {
                            score: 5,
                            title: "Emerging Mastery",
                            description: "Actively participates in familiar social routines with minimal prompting, maintains attention during multi-turn interactions, and consistently responds to WH- questions."
                        },
                        {
                            score: 4,
                            title: "Strong Progress",
                            description: "Joins in common social games when prompted, stays engaged in short interactions, and responds to some WH- questions with occasional prompts."
                        },
                        {
                            score: 3,
                            title: "Developing",
                            description: "Occasionally participates in social routines with support, briefly attends to interactions, and shows emerging understanding of WH- questions."
                        },
                        {
                            score: 2,
                            title: "Emerging Skills",
                            description: "Rarely joins social routines, attention to interaction is fleeting, and WH- questions are typically unanswered."
                        },
                        {
                            score: 1,
                            title: "Limited/Not Yet Observed",
                            description: "Not yet participating in familiar social routines, minimal engagement in social exchanges, and no observable response to WH- questions."
                        }
                    ],
                    activities: [
                        { id: "socialRoutines", title: "Participating in Early Social Routines" },
                        { id: "interactionLength", title: "Increase Interaction Length" },
                        { id: "whQuestions", title: "Respond to Wh- Questions" }
                    ]
                }
            }
        ]
    }
    // Additional curriculums would follow the same format...
};

// Function to render curriculum page
function renderCurriculumPage(curriculumId) {
    const curriculum = window.curriculumData[curriculumId];
    if (!curriculum) return '';

    let html = `
        <h2>${curriculum.title}</h2>
        <p class="curriculum-description">${curriculum.description}</p>
        <div class="curriculum-levels">
    `;

    curriculum.levels.forEach(level => {
        html += `
            <div class="level-card">
                <div class="level-header" onclick="toggleLevel('${level.id}')">
                    <h3>${level.title}: ${level.subtitle}</h3>
                    <p class="age-range">${level.ageRange}</p>
                    <ul class="skills-preview">
                        ${level.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    <button class="level-btn">Choose ${level.title}</button>
                </div>
                <div id="${level.id}" class="level-content" style="display: none;">
                    ${renderLevelContent(level)}
                </div>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

// Function to render level content
function renderLevelContent(level) {
    let html = `
        <div class="level-details">
            <p>${level.content.description}</p>
            
            <div class="sample-goal">
                <h4>Sample Goal:</h4>
                <p>${level.content.goal}</p>
            </div>
    `;

    // Add rubric if it exists
    if (level.content.rubric) {
        html += `
            <div class="rubric">
                <h4>Scoring Rubric:</h4>
                <table class="rubric-table">
                    <thead>
                        <tr>
                            <th>Score</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        level.content.rubric.forEach(item => {
            html += `
                <tr>
                    <td class="score">${item.score} – ${item.title}</td>
                    <td>${item.description}</td>
                </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
            </div>
        `;
    }

    // Add therapy activities
    if (level.content.activities && level.content.activities.length > 0) {
        html += `
            <div class="therapy-activities">
                <h4>Therapy Activities:</h4>
                <p>To make progress in this area, ${level.content.activities.length > 1 ? 'choose one or more of the suggested activities below' : 'use the suggested activity below'}:</p>
                <div class="activity-buttons">
        `;

        level.content.activities.forEach(activity => {
            html += `<button class="activity-btn" onclick="showSkillPage('${activity.id}')">${activity.title}</button>`;
        });

        html += `
                </div>
            </div>
        `;
    }

    html += `
        </div>
    `;

    return html;
}

// Function to toggle level content
function toggleLevel(levelId) {
    const levelContent = document.getElementById(levelId);
    const allLevelContents = document.querySelectorAll('.level-content');
    
    // Hide all other level contents
    allLevelContents.forEach(content => {
        if (content.id !== levelId) {
            content.style.display = 'none';
        }
    });
    
    // Toggle the selected level content
    if (levelContent) {
        levelContent.style.display = levelContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to show skill page (placeholder - implement based on your skill pages)
function showSkillPage(skillId) {
    // This would navigate to the appropriate skill page
    // For now, just show an alert
    console.log('Navigating to skill:', skillId);
    // You can implement the actual navigation here
    // For example: showPage(skillId);
}

// Hook into the existing showPage function to render curriculum when needed
const originalShowPage = window.showPage;
window.showPage = function(pageNumber) {
    // Call original showPage function
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
            const contentDiv = document.getElementById('content');
            if (!contentDiv) return;

            const activePage = contentDiv.querySelector('.page.active');
            if (!activePage) return;

            // Clear existing content but keep the page structure
            const existingContent = activePage.querySelector('.curriculum-content');
            if (existingContent) {
                existingContent.remove();
            }

            // Create curriculum content container
            const curriculumContent = document.createElement('div');
            curriculumContent.className = 'curriculum-content';
            curriculumContent.innerHTML = renderCurriculumPage(curriculumId);

            activePage.appendChild(curriculumContent);
        }, 100);
    }
};

// Export for testing
window.renderCurriculumPage = renderCurriculumPage;
window.toggleLevel = toggleLevel;
window.showSkillPage = showSkillPage;