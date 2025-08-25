// PDF Download Functions for SLK Assessment Tool
// Based on the official SLK Modular Therapy Curriculum markdown specification

// Main PDF generation function that handles all download types
function generateFunctionalPDF(type, resourceId) {
    const pdfData = getPDFData(type, resourceId);
    
    if (pdfData && pdfData.url) {
        // If we have a real URL (from the markdown spec), open it
        window.open(pdfData.url, '_blank');
        
        // Show success message
        showDownloadMessage(`Opening ${pdfData.title}...`, 'success');
    } else {
        // Generate a placeholder PDF with content
        generatePlaceholderPDF(type, resourceId);
    }
}

// Get PDF data based on type and resource ID from the markdown specifications
function getPDFData(type, resourceId) {
    const pdfDatabase = {
        // Screening Checklists (from Page 4 of the markdown)
        checklist: {
            'screening-general': {
                title: 'Speech Language Screening Checklist',
                url: 'https://www.dropbox.com/scl/fi/n6wvrdzk812tzu87z3704/Speech_Language_Screening_Checklist.pdf?rlkey=hj9wq00r0s1ypl4bfwvrea69o&dl=0'
            },
            'speech-sounds': {
                title: 'Speech Sound Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/o6q8oucn96p33git5q62u/Speech_Sound_Progress_Monitoring_Tool.pdf?rlkey=a0myfmo3j8bhpb3a38objn4p6&dl=0'
            },
            'language-development': {
                title: 'Language Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/59l86kz4udmmv5d3zline/Language_Progress_Monitoring_Tool.pdf?rlkey=u5g0ary94fptp8bgfs6vh6l4w&dl=0'
            },
            'voice-resonance': {
                title: 'Voice/Resonance Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/wogx8yo1zuf97pnul4rlz/Voice-Resonance_Progress_Monitoring_Tool.pdf?rlkey=0d428rej37hfe3nwj181x6hz8&dl=0'
            },
            'fluency-voice': {
                title: 'Fluency Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/g7km69459qicdiyqkq0oa/Fluency_Progress_Monitoring_Tool.pdf?rlkey=ianc9quid0oft8pg99tfyrmya&dl=0'
            },
            'early-communication': {
                title: 'Functional Communication Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/zpwztvvcv2lwxtjs50if7/Functional_Communication_Progress_Monitoring_Tool.pdf?rlkey=1k7k46ra8xn6860kxi0h8q1rw&dl=0'
            },
            'social-communication': {
                title: 'Social Communication Progress Monitoring Tool and Checklist',
                url: 'https://www.dropbox.com/scl/fi/1hq6jek4t9d0ccb0v5z4f/Social_Communication_Progress_Monitoring_Tool.pdf?rlkey=cv4pa4kpj50cm8vjjb6af9tkw&dl=0'
            },
            'aac-assessment': {
                title: 'AAC Assessment Checklist',
                url: null // Placeholder for future implementation
            }
        },
        
        // Handouts (from Page 5 - links to hub.speechandlanguagekids.com)
        handout: {
            'early-communication-home': {
                title: 'Early Communication Home Support Handout',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'speech-sounds-home': {
                title: 'Speech Sounds Home Practice Handout',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'aac-implementation': {
                title: 'AAC Implementation Guide',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'classroom-supports': {
                title: 'Classroom Communication Supports',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'fluency-support': {
                title: 'Fluency Support Strategies',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            },
            'social-communication-home': {
                title: 'Social Communication Home Strategies',
                url: 'https://hub.speechandlanguagekids.com/spaces/13217776/content'
            }
        },
        
        // Visual Supports (from Page 6 - links to hub.speechandlanguagekids.com)
        visual: {
            'core-vocabulary': {
                title: 'Core Vocabulary Visual Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'visual-schedules': {
                title: 'Visual Schedule Templates',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'social-stories': {
                title: 'Social Story Templates',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'emotion-cards': {
                title: 'Emotion Recognition Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'speech-sound-cues': {
                title: 'Speech Sound Visual Cues',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            },
            'aac-symbols': {
                title: 'AAC Symbol Cards',
                url: 'https://hub.speechandlanguagekids.com/spaces/17816743/content'
            }
        }
    };
    
    if (pdfDatabase[type] && pdfDatabase[type][resourceId]) {
        return pdfDatabase[type][resourceId];
    }
    
    return null;
}

// Generate placeholder PDF when no real URL is available
function generatePlaceholderPDF(type, resourceId) {
    const resourceName = resourceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    
    showDownloadMessage(`${typeName}: ${resourceName} - This resource is being prepared and will be available soon.`, 'info');
}

// Show download status messages
function showDownloadMessage(message, messageType = 'info') {
    // Create message element if it doesn't exist
    let messageDiv = document.getElementById('download-message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'download-message';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        document.body.appendChild(messageDiv);
    }
    
    // Set message type styles
    const styles = {
        success: 'background-color: #4CAF50;',
        info: 'background-color: #2196F3;',
        warning: 'background-color: #FF9800;',
        error: 'background-color: #f44336;'
    };
    
    messageDiv.style.cssText += styles[messageType] || styles.info;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Download specific checklist types
function downloadChecklist(type) {
    generateFunctionalPDF('checklist', type);
}

// Download specific handout types  
function downloadHandout(type) {
    generateFunctionalPDF('handout', type);
}

// Download specific visual support types
function downloadVisual(type) {
    generateFunctionalPDF('visual', type);
}

// Download curriculum-specific resources
function downloadResource(curriculum, resourceType) {
    generateFunctionalPDF('resource', `${curriculum}-${resourceType}`);
}

// Download skill-specific resources
function downloadSkillResource(skillId, resourceType) {
    generateFunctionalPDF('skill', `${skillId}-${resourceType}`);
}

// Function to populate resource content on pages
function populateResourceContent() {
    // Populate Screening Checklists
    const checklistsContent = document.getElementById('checklistsContent');
    if (checklistsContent && checklistsContent.querySelector('.loading-content')) {
        checklistsContent.innerHTML = `
            <div class="resource-grid">
                <div class="resource-card">
                    <h3>📋 General Screening</h3>
                    <p>Comprehensive speech and language screening tool for initial assessments.</p>
                    <button class="download-btn" onclick="downloadChecklist('screening-general')">
                        Download General Screening Checklist
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🗣️ Speech Sounds</h3>
                    <p>Monitor progress in articulation and phonological development.</p>
                    <button class="download-btn" onclick="downloadChecklist('speech-sounds')">
                        Download Speech Sounds Checklist
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>📚 Language Skills</h3>
                    <p>Track receptive and expressive language development milestones.</p>
                    <button class="download-btn" onclick="downloadChecklist('language-skills')">
                        Download Language Skills Checklist
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🎭 Social Communication</h3>
                    <p>Assess pragmatic language and social interaction skills.</p>
                    <button class="download-btn" onclick="downloadChecklist('social-communication')">
                        Download Social Communication Checklist
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🔊 Voice & Fluency</h3>
                    <p>Screen for voice quality issues and fluency disorders.</p>
                    <button class="download-btn" onclick="downloadChecklist('fluency-voice')">
                        Download Voice & Fluency Checklist
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>💬 Functional Communication</h3>
                    <p>Evaluate basic communication needs and functional skills.</p>
                    <button class="download-btn" onclick="downloadChecklist('functional-communication')">
                        Download Functional Communication Checklist
                    </button>
                </div>
            </div>
        `;
    }
    
    // Populate Handouts
    const handoutsContent = document.getElementById('handoutsContent');
    if (handoutsContent && handoutsContent.querySelector('.loading-content')) {
        handoutsContent.innerHTML = `
            <div class="resource-grid">
                <div class="resource-card">
                    <h3>🏠 Home Practice Strategies</h3>
                    <p>Evidence-based strategies for parents to support speech and language at home.</p>
                    <button class="download-btn" onclick="downloadHandout('home-strategies')">
                        Download Home Strategies
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🎓 Classroom Support</h3>
                    <p>Techniques for teachers to support students with communication challenges.</p>
                    <button class="download-btn" onclick="downloadHandout('classroom-support')">
                        Download Classroom Guide
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🧩 AAC Introduction</h3>
                    <p>Introduction to augmentative and alternative communication for families.</p>
                    <button class="download-btn" onclick="downloadHandout('aac-intro')">
                        Download AAC Guide
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>📖 Language Development</h3>
                    <p>Milestones and tips for supporting language development by age.</p>
                    <button class="download-btn" onclick="downloadHandout('language-development')">
                        Download Development Guide
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🎯 Speech Sound Development</h3>
                    <p>When to expect different speech sounds and how to practice them.</p>
                    <button class="download-btn" onclick="downloadHandout('speech-development')">
                        Download Speech Sound Guide
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>💭 Social Communication Tips</h3>
                    <p>Supporting social skills and pragmatic language development.</p>
                    <button class="download-btn" onclick="downloadHandout('social-tips')">
                        Download Social Skills Guide
                    </button>
                </div>
            </div>
        `;
    }
    
    // Populate Visuals
    const visualsContent = document.getElementById('visualsContent');
    if (visualsContent && visualsContent.querySelector('.loading-content')) {
        visualsContent.innerHTML = `
            <div class="resource-grid">
                <div class="resource-card">
                    <h3>📅 Visual Schedules</h3>
                    <p>Customizable visual schedules for daily routines and transitions.</p>
                    <button class="download-btn" onclick="downloadVisual('visual-schedules')">
                        Download Visual Schedules
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🎨 Choice Boards</h3>
                    <p>Visual choice boards for requesting and decision-making.</p>
                    <button class="download-btn" onclick="downloadVisual('choice-boards')">
                        Download Choice Boards
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>😊 Emotion Cards</h3>
                    <p>Visual supports for identifying and expressing emotions.</p>
                    <button class="download-btn" onclick="downloadVisual('emotion-cards')">
                        Download Emotion Cards
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🔤 First/Then Boards</h3>
                    <p>Visual supports for sequencing and transitions.</p>
                    <button class="download-btn" onclick="downloadVisual('first-then')">
                        Download First/Then Boards
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>🚦 Behavior Supports</h3>
                    <p>Visual cues for behavior expectations and self-regulation.</p>
                    <button class="download-btn" onclick="downloadVisual('behavior-supports')">
                        Download Behavior Visuals
                    </button>
                </div>
                
                <div class="resource-card">
                    <h3>💬 Communication Boards</h3>
                    <p>Basic communication boards for functional communication.</p>
                    <button class="download-btn" onclick="downloadVisual('communication-boards')">
                        Download Communication Boards
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize content when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateResourceContent);
} else {
    // DOM is already loaded, populate immediately
    populateResourceContent();
}

// Also populate when page becomes visible (for async loading)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        populateResourceContent();
    }
});

// Make functions globally available
window.generateFunctionalPDF = generateFunctionalPDF;
window.downloadChecklist = downloadChecklist;
window.downloadHandout = downloadHandout;
window.downloadVisual = downloadVisual;
window.downloadResource = downloadResource;
window.downloadSkillResource = downloadSkillResource;
window.populateResourceContent = populateResourceContent;

console.log('✅ PDF download functions loaded and available globally');