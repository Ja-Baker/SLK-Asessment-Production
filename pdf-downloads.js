// PDF Download Functions for SLK Curriculum
// Based on the official SLK Modular Therapy Curriculum markdown specification

// Initialize content when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        populateChecklistsContent();
        populateHandoutsContent();
        populateVisualsContent();
        console.log('✅ Resource pages populated successfully');
    } catch (error) {
        console.error('❌ Error populating resource content:', error);
        // Fallback to show basic content
        populateBasicContent();
    }
});

// Fallback function if content fails to load
function populateBasicContent() {
    const sections = ['checklistsContent', 'handoutsContent', 'visualsContent'];
    sections.forEach(sectionId => {
        const container = document.getElementById(sectionId);
        if (container && container.innerHTML.trim() === '') {
            container.innerHTML = `
                <div class="error-message">
                    <p>Content is loading... If this persists, please refresh the page.</p>
                    <button class="download-btn" onclick="location.reload()">Refresh Page</button>
                </div>
            `;
        }
    });
}

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

// Make functions globally available
window.generateFunctionalPDF = generateFunctionalPDF;
window.downloadChecklist = downloadChecklist;
window.downloadHandout = downloadHandout;
window.downloadVisual = downloadVisual;
window.downloadResource = downloadResource;
window.downloadSkillResource = downloadSkillResource;

// Content population functions
function populateChecklistsContent() {
    const container = document.getElementById('checklistsContent');
    if (!container) return;
    
    const checklistsHTML = `
        <div class="step-section">
            <h3>Step 1: General Screening Checklist</h3>
            <p>This will narrow down the specific communication domain(s) that need to be addressed.</p>
            <div class="download-grid">
                <button class="download-btn" onclick="downloadChecklist('screening-general')">
                    📋 Download the Screening Checklist
                </button>
            </div>
        </div>
        
        <div class="step-section">
            <h3>Step 2: Progress Monitoring Tools and In-Depth Checklists</h3>
            <p>Once you have identified the area(s) that you want to pursue, use the corresponding progress monitoring tool and checklist to gather more data. This will help you track progress over time and identify the correct curriculum for this individual.</p>
            
            <div class="monitoring-tools">
                <div class="tool-item">
                    <h4>Speech Sounds</h4>
                    <p>Individuals with speech sound problems have difficulty pronouncing sounds correctly. Their speech is difficult to understand. Fill out the Speech Sounds Progress Monitoring Tool to dive deeper.</p>
                    <button class="download-btn" onclick="downloadChecklist('speech-sounds')">
                        🗣️ Speech Sound Progress Monitoring Tool
                    </button>
                </div>
                
                <div class="tool-item">
                    <h4>Language</h4>
                    <p>Individuals with language difficulties struggle to understand or use words effectively. This can impact their ability to follow directions, express thoughts, or build sentences correctly.</p>
                    <button class="download-btn" onclick="downloadChecklist('language-development')">
                        📝 Language Progress Monitoring Tool
                    </button>
                </div>
                
                <div class="tool-item">
                    <h4>Voice/Resonance</h4>
                    <p>Individuals with voice or resonance concerns may have voices that sound hoarse, too nasal, too quiet, or otherwise unusual.</p>
                    <button class="download-btn" onclick="downloadChecklist('voice-resonance')">
                        🎵 Voice/Resonance Progress Monitoring Tool
                    </button>
                </div>
                
                <div class="tool-item">
                    <h4>Fluency</h4>
                    <p>Individuals with fluency difficulties may experience stuttering or interruptions in their speech.</p>
                    <button class="download-btn" onclick="downloadChecklist('fluency-voice')">
                        🔄 Fluency Progress Monitoring Tool
                    </button>
                </div>
                
                <div class="tool-item">
                    <h4>Functional Communication</h4>
                    <p>Individuals with functional communication difficulties struggle to get their needs met using speech, gestures, or other means of communication.</p>
                    <button class="download-btn" onclick="downloadChecklist('early-communication')">
                        💬 Functional Communication Progress Monitoring Tool
                    </button>
                </div>
                
                <div class="tool-item">
                    <h4>Social Communication</h4>
                    <p>Individuals with social communication challenges may struggle with conversational skills, understanding social cues, or using language appropriately in different social interactions.</p>
                    <button class="download-btn" onclick="downloadChecklist('social-communication')">
                        👥 Social Communication Progress Monitoring Tool
                    </button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = checklistsHTML;
}

function populateHandoutsContent() {
    const container = document.getElementById('handoutsContent');
    if (!container) return;
    
    const handoutsHTML = `
        <div class="resource-grid">
            <div class="resource-card">
                <h4>🏠 Early Communication Home Support</h4>
                <p>Handouts for caregivers supporting early communication development at home.</p>
                <button class="download-btn" onclick="downloadHandout('early-communication-home')">
                    Access Handouts
                </button>
            </div>
            
            <div class="resource-card">
                <h4>🗣️ Speech Sounds Home Practice</h4>
                <p>Home practice activities for speech sound development.</p>
                <button class="download-btn" onclick="downloadHandout('speech-sounds-home')">
                    Access Handouts
                </button>
            </div>
            
            <div class="resource-card">
                <h4>📱 AAC Implementation Guide</h4>
                <p>Comprehensive guide for implementing AAC systems.</p>
                <button class="download-btn" onclick="downloadHandout('aac-implementation')">
                    Access Handouts
                </button>
            </div>
            
            <div class="resource-card">
                <h4>🏫 Classroom Communication Supports</h4>
                <p>Resources for teachers and educational professionals.</p>
                <button class="download-btn" onclick="downloadHandout('classroom-supports')">
                    Access Handouts
                </button>
            </div>
            
            <div class="resource-card">
                <h4>🔄 Fluency Support Strategies</h4>
                <p>Strategies and support materials for fluency challenges.</p>
                <button class="download-btn" onclick="downloadHandout('fluency-support')">
                    Access Handouts
                </button>
            </div>
            
            <div class="resource-card">
                <h4>👥 Social Communication Home Strategies</h4>
                <p>Home-based activities for social communication development.</p>
                <button class="download-btn" onclick="downloadHandout('social-communication-home')">
                    Access Handouts
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = handoutsHTML;
}

function populateVisualsContent() {
    const container = document.getElementById('visualsContent');
    if (!container) return;
    
    const visualsHTML = `
        <div class="resource-grid">
            <div class="resource-card">
                <h4>🗣️ Core Vocabulary Visual Cards</h4>
                <p>Essential visual cards for core vocabulary development and AAC support.</p>
                <button class="download-btn" onclick="downloadVisual('core-vocabulary')">
                    Access Visual Cards
                </button>
            </div>
            
            <div class="resource-card">
                <h4>📅 Visual Schedule Templates</h4>
                <p>Customizable visual schedules for daily routines and activities.</p>
                <button class="download-btn" onclick="downloadVisual('visual-schedules')">
                    Access Schedules
                </button>
            </div>
            
            <div class="resource-card">
                <h4>📖 Social Story Templates</h4>
                <p>Templates for creating personalized social stories and scripts.</p>
                <button class="download-btn" onclick="downloadVisual('social-stories')">
                    Access Stories
                </button>
            </div>
            
            <div class="resource-card">
                <h4>🎯 Choice Boards</h4>
                <p>Visual choice boards for decision-making and communication.</p>
                <button class="download-btn" onclick="downloadVisual('choice-boards')">
                    Access Choice Boards
                </button>
            </div>
            
            <div class="resource-card">
                <h4>😊 Emotion Regulation Visuals</h4>
                <p>Visual supports for emotional regulation and self-calming strategies.</p>
                <button class="download-btn" onclick="downloadVisual('emotion-regulation')">
                    Access Emotion Tools
                </button>
            </div>
            
            <div class="resource-card">
                <h4>🏫 Classroom Communication Aids</h4>
                <p>Visual supports specifically designed for classroom environments.</p>
                <button class="download-btn" onclick="downloadVisual('classroom-aids')">
                    Access Classroom Aids
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = visualsHTML;
}

console.log('✅ PDF download functions loaded and available globally');