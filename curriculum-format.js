// Curriculum Format Structure with Beginner/Intermediate/Advanced Levels
// This file restores the old curriculum format while maintaining all current functionality

// Helper function to create level cards for curriculum pages
function createLevelCard(levelId, title, ageRange, skills) {
    let skillsList = '';
    if (skills && skills.length > 0) {
        skills.forEach(skill => {
            skillsList += `<li>${skill}</li>`;
        });
    }
    
    return `
        <div class="level-card" onclick="toggleLevelContent('${levelId}')">
            <h4>${title}</h4>
            <p class="age-range">${ageRange}</p>
            <ul>${skillsList}</ul>
            <button class="area-btn">Choose ${title.split(':')[0]}</button>
        </div>
    `;
}

// Function to toggle level content visibility
function toggleLevelContent(levelId) {
    // Hide all level contents
    const allContents = document.querySelectorAll('.level-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the selected level content
    const selectedContent = document.getElementById(`${levelId}-content`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        selectedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to generate curriculum page with level selection
function generateCurriculumPage(curriculumData, curriculumName, description) {
    let html = `
        <h2>${curriculumName}</h2>
        <p>${description}</p>
        <div class="level-selection">
    `;
    
    // Add level cards
    const levels = ['beginner', 'intermediate', 'advanced'];
    
    levels.forEach(levelId => {
        const level = curriculumData[levelId];
        if (level) {
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
                    <button class="area-btn" onclick="expandCurriculumLevel('${levelId}')">
                        Choose ${level.title.split(':')[0]}
                    </button>
                </div>
            `;
        }
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(levelId => {
        const level = curriculumData[levelId];
        if (level) {
            html += `
                <div id="${levelId}-section" class="level-section">
                    <div class="expand-header">
                        <span class="arrow">▶</span>
                        <h3>${level.title}</h3>
                    </div>
                    <div class="expand-content">
                        ${level.content}
                    </div>
                </div>
            `;
        }
    });
    
    return html;
}

// Function to expand curriculum level section
function expandCurriculumLevel(levelId) {
    // Close all level sections first
    const allSections = document.querySelectorAll('.level-section');
    allSections.forEach(section => {
        const header = section.querySelector('.expand-header');
        const content = section.querySelector('.expand-content');
        const arrow = section.querySelector('.arrow');
        
        header.classList.remove('active');
        content.classList.remove('active');
        if (arrow) arrow.textContent = '▶';
    });
    
    // Open the selected level section
    const section = document.getElementById(`${levelId}-section`);
    if (section) {
        const header = section.querySelector('.expand-header');
        const content = section.querySelector('.expand-content');
        const arrow = section.querySelector('.arrow');
        
        header.classList.add('active');
        content.classList.add('active');
        if (arrow) arrow.textContent = '▼';
        
        // Scroll to the section
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Enhanced curriculum data structure template
const curriculumTemplate = {
    beginner: {
        title: "Beginner Level: [Title]",
        ageRange: "(Ages: X - Y yrs and beyond)",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        content: `
            <p>Description of beginner level focus and approach.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>Goal text here...</p>
            </div>
            
            <table class="rubric-table">
                <tr>
                    <th>Score</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>5 – Emerging Mastery</td>
                    <td>Description...</td>
                </tr>
                <tr>
                    <td>4 – Strong Progress</td>
                    <td>Description...</td>
                </tr>
                <tr>
                    <td>3 – Developing</td>
                    <td>Description...</td>
                </tr>
                <tr>
                    <td>2 – Emerging Skills</td>
                    <td>Description...</td>
                </tr>
                <tr>
                    <td>1 – Limited/Not Yet Observed</td>
                    <td>Description...</td>
                </tr>
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>Activity description...</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('skillId')">Skill Name</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: [Title]",
        ageRange: "(Ages: X - Y yrs and beyond)",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        content: `
            <p>Description of intermediate level focus and approach.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>Goal text here...</p>
            </div>
            
            <table class="rubric-table">
                <!-- Rubric content -->
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>Activity description...</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('skillId')">Skill Name</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: [Title]",
        ageRange: "(Ages: X - Y yrs and beyond)",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
        content: `
            <p>Description of advanced level focus and approach.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>Goal text here...</p>
            </div>
            
            <table class="rubric-table">
                <!-- Rubric content -->
            </table>
            
            <h4>Therapy Activities:</h4>
            <p>Activity description...</p>
            
            <div class="activity-grid">
                <button class="activity-btn" onclick="showSkill('skillId')">Skill Name</button>
            </div>
        `
    }
};

// Export functions for use in other files
window.generateCurriculumPage = generateCurriculumPage;
window.expandCurriculumLevel = expandCurriculumLevel;
window.createLevelCard = createLevelCard;
window.toggleLevelContent = toggleLevelContent;