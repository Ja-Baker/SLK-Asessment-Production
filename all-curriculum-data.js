// Complete Curriculum Data for ALL Curriculum Pages
// Based on SLK Modular Therapy Curriculum (1).md - Pages 14-42+

// Foundations for Fluency Curriculum (Page 39)
const foundationsForFluencyCurriculum = {
    beginner: {
        title: "Beginner Level: Breath-Speech Coordination",
        ageRange: "(Ages: 5-8 yrs and beyond)",
        skills: ["Coordinating Breath with Speech"],
        content: `
            <p>At the Beginner Level, the individual will learn how to use diaphragmatic breathing and coordinate the inhalation and exhalation cycle to support speech.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will engage in a 10-minute conversation on a familiar topic, demonstrating controlled breath support by using diaphragmatic breathing with no more than two incidents of disrupted breathing patterns (e.g., breathing mid-sentence, shallow or tension-filled breaths) as measured by the speech-language pathologist on 3 consecutive data collection days.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/fluency-coordinating-breath-with-speech', '_blank')">Coordinating Breath with Speech</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Managing Reactions to Fluency Struggles",
        ageRange: "(Ages: 7-10 yrs and beyond)",
        skills: ["Improving Awareness of Stuttering", "Dealing with Negative Emotions Regarding Stuttering"],
        content: `
            <p>Our emotions have a direct impact on fluency—anxiety, frustration, or pressure can make speech feel more difficult, while confidence and relaxation can support smoother communication. This level focuses on building confidence, reducing anxiety, and shifting one's mindset around speech.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate increased self-awareness and coping skills related to stuttering by: (a) accurately identifying and describing personal stuttering patterns and triggers across two sessions, and (b) participating in guided activities targeting at least four evidence-based strategies for managing emotional reactions to stuttering.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/fluency-self-awareness', '_blank')">Improving Self-Awareness of Stuttering</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/fluency-emotional-regulation', '_blank')">Dealing with Negative Emotions Regarding Stuttering</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Self-Monitoring and Carryover of Fluency Strategies",
        ageRange: "(Ages: 10-15 yrs and beyond)",
        skills: ["Integrating Fluency Strategies into Real-World Communication"],
        content: `
            <p>At this level, the focus shifts from learning structured fluency techniques to integrating them seamlessly into real-world communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate self-monitoring and carry-over of fluency strategies by achieving at least a 4 out of 5 on the following self-rating scale over the preceding two weeks.</p>
                
                <table class="rubric-table">
                    <tr>
                        <th>Score</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>5 – Consistently Confident & Flexible</td>
                        <td>I consistently used fluency strategies in real-world situations, adjusted my speech when needed, and felt confident communicating—even when I stuttered.</td>
                    </tr>
                    <tr>
                        <td>4 – Mostly Confident</td>
                        <td>I used my strategies in most situations, felt comfortable speaking, and adjusted when I noticed tension—but occasionally forgot strategies or avoided a situation before catching myself.</td>
                    </tr>
                    <tr>
                        <td>3 – Growing Awareness</td>
                        <td>I know my fluency strategies and sometimes used them, but often realized afterward that I didn't apply them or relied on one tool too heavily. I'm becoming more aware of my triggers and reactions.</td>
                    </tr>
                    <tr>
                        <td>2 – Inconsistent Use</td>
                        <td>I've learned some fluency strategies but rarely remembered to use them in the moment. I often noticed tension, frustration, or avoidance before remembering to use a strategy.</td>
                    </tr>
                    <tr>
                        <td>1 – Not Yet Using Tools</td>
                        <td>I didn't think much about fluency strategies during or after speaking. I sometimes avoided talking or became overwhelmed, but I'm open to learning more.</td>
                    </tr>
                </table>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/fluency-real-world-strategies', '_blank')">Integrating Fluency Strategies in Real-World Communication</button>
            </div>
        `
    }
};

// Stuttering Curriculum (Page 41)
const stutteringCurriculum = {
    beginner: {
        title: "Beginner Level: Understanding and Accepting Stuttering",
        ageRange: "(Ages: 5-8 yrs and beyond)",
        skills: ["Building Awareness of Stuttering", "Reducing Secondary Behaviors"],
        content: `
            <p>At this level, therapy focuses on helping individuals understand what stuttering is and reducing any harmful secondary behaviors or tension that may have developed.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate understanding of stuttering and reduced secondary behaviors by accurately identifying when stuttering occurs and showing decreased physical tension during speech in 80% of observed speaking opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-awareness', '_blank')">Building Awareness of Stuttering</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-secondary-behaviors', '_blank')">Reducing Secondary Behaviors</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Fluency Shaping Techniques",
        ageRange: "(Ages: 8-12 yrs and beyond)",
        skills: ["Easy Speech", "Smooth Speech Techniques", "Rate Control"],
        content: `
            <p>This level introduces structured techniques for producing smoother speech while maintaining naturalness and confidence.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate fluency shaping techniques by using easy speech, smooth transitions, and appropriate rate control in structured speaking activities with 85% success rate.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-easy-speech', '_blank')">Easy Speech</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-smooth-speech', '_blank')">Smooth Speech Techniques</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-rate-control', '_blank')">Rate Control</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Stuttering Modification and Advocacy",
        ageRange: "(Ages: 10+ yrs and beyond)",
        skills: ["Stuttering Modification", "Self-Advocacy", "Communication Confidence"],
        content: `
            <p>At the advanced level, individuals learn to modify moments of stuttering when they occur and develop strong self-advocacy skills for various communication situations.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate advanced stuttering management by successfully using stuttering modification techniques in 90% of stuttering moments and effectively advocating for communication needs in academic and social settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-modification', '_blank')">Stuttering Modification</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-self-advocacy', '_blank')">Self-Advocacy</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/stuttering-confidence', '_blank')">Communication Confidence</button>
            </div>
        `
    }
};

// Word Finding/Word Retrieval Curriculum (Page 40)
const wordFindingCurriculum = {
    beginner: {
        title: "Beginner Level: Basic Word Retrieval Strategies",
        ageRange: "(Ages: 5-8 yrs and beyond)",
        skills: ["Semantic Cueing", "Phonetic Cueing", "Visual Strategies"],
        content: `
            <p>This level focuses on teaching basic strategies to help individuals retrieve words more efficiently when they experience word-finding difficulties.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will use word retrieval strategies (semantic and phonetic cues) to find target words within 5 seconds in 80% of opportunities during structured activities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-semantic-cues', '_blank')">Semantic Cueing</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-phonetic-cues', '_blank')">Phonetic Cueing</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-visual-strategies', '_blank')">Visual Strategies</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Advanced Retrieval Strategies",
        ageRange: "(Ages: 8-12 yrs and beyond)",
        skills: ["Circumlocution", "Association Strategies", "Self-Monitoring"],
        content: `
            <p>This level builds on basic strategies and introduces more sophisticated approaches to word retrieval, including circumlocution and self-monitoring techniques.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate advanced word retrieval strategies by using circumlocution and association techniques to communicate intended messages when specific words cannot be retrieved, succeeding in 85% of conversational exchanges.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-circumlocution', '_blank')">Circumlocution</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-associations', '_blank')">Association Strategies</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-self-monitoring', '_blank')">Self-Monitoring</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Functional Communication Strategies",
        ageRange: "(Ages: 10+ yrs and beyond)",
        skills: ["Compensatory Strategies", "Discourse Management", "Academic Applications"],
        content: `
            <p>At this level, individuals learn to apply word-finding strategies in complex, real-world communication situations including academic and social contexts.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will effectively manage word-finding difficulties in academic and social situations by implementing compensatory strategies and maintaining fluent discourse in 90% of observed communication opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-compensatory-strategies', '_blank')">Compensatory Strategies</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-discourse-management', '_blank')">Discourse Management</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/word-finding-academic-applications', '_blank')">Academic Applications</button>
            </div>
        `
    }
};

// Cluttering Curriculum (Page 42)
const clutteringCurriculum = {
    beginner: {
        title: "Beginner Level: Rate and Rhythm Awareness",
        ageRange: "(Ages: 6-10 yrs and beyond)",
        skills: ["Rate Awareness", "Rhythm Control", "Pausing Strategies"],
        content: `
            <p>This level focuses on helping individuals become aware of their speaking rate and develop basic rhythm control for clearer communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate improved rate control by speaking at an appropriate pace with natural pausing in structured speaking tasks, achieving 80% intelligibility as measured by listener comprehension.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-rate-awareness', '_blank')">Rate Awareness</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-rhythm-control', '_blank')">Rhythm Control</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-pausing-strategies', '_blank')">Pausing Strategies</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Organization and Clarity",
        ageRange: "(Ages: 8-14 yrs and beyond)",
        skills: ["Message Organization", "Articulation Precision", "Self-Monitoring"],
        content: `
            <p>This level focuses on improving the organization and clarity of verbal communication while developing self-monitoring skills.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate improved communication clarity by organizing verbal messages logically and using precise articulation, resulting in 85% listener comprehension in conversational exchanges.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-message-organization', '_blank')">Message Organization</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-articulation-precision', '_blank')">Articulation Precision</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-self-monitoring', '_blank')">Self-Monitoring</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Functional Communication Management",
        ageRange: "(Ages: 12+ yrs and beyond)",
        skills: ["Communication Strategies", "Listener Awareness", "Professional Communication"],
        content: `
            <p>At this level, individuals learn to manage cluttering in complex communication situations and develop strategies for professional and academic success.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate effective communication management by adapting communication strategies based on listener needs and context, maintaining 90% message clarity in academic and professional settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-communication-strategies', '_blank')">Communication Strategies</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-listener-awareness', '_blank')">Listener Awareness</button>
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/cluttering-professional-communication', '_blank')">Professional Communication</button>
            </div>
        `
    }
};

// Analytic Language Processor Curriculum (First Words) - Page 15
const analyticLanguageCurriculum = {
    beginner: {
        title: "Beginner Level: Encouraging First Words",
        ageRange: "(Ages: 12-18 months and beyond)",
        skills: ["Encouraging First Words"],
        content: `
            <p>At this level, therapy focuses on encouraging and reinforcing the child's attempts at first words, building on their natural inclination to learn language analytically through individual words.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will produce at least 10 different single words spontaneously across various activities and contexts with 80% intelligibility.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/analytic-first-words', '_blank')">Encouraging First Words</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Producing Early Word Shapes",
        ageRange: "(Ages: 15-24 months and beyond)",
        skills: ["Producing Early Word Shapes"],
        content: `
            <p>This level focuses on helping children produce clearer approximations of target words and expand their single-word vocabulary.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will produce clear approximations of 25 different words with recognizable word shapes in functional communication contexts.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/analytic-word-shapes', '_blank')">Producing Early Word Shapes</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Expanding Vocabulary and Combining Words",
        ageRange: "(Ages: 18-30 months and beyond)",
        skills: ["Expanding Vocabulary and Combining Words"],
        content: `
            <p>At this level, children expand their vocabulary and begin combining words to create meaningful two-word utterances.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will combine two words to express a variety of semantic relationships (action + object, possessor + possession, etc.) in 80% of appropriate communication opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/analytic-vocabulary-expansion', '_blank')">Expanding Vocabulary and Combining Words</button>
            </div>
        `
    }
};

// Gestalt Language Processor Curriculum - Page 16
const gestaltLanguageCurriculum = {
    beginner: {
        title: "Beginner Level: Using Early Gestalts",
        ageRange: "(Ages: 18 months-3 years and beyond)",
        skills: ["Using Early Gestalts"],
        content: `
            <p>This level focuses on recognizing and building upon the child's natural gestalt language processing patterns, using their echolalia and scripts as stepping stones to functional communication.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will use gestalt phrases functionally to communicate wants, needs, and comments in 80% of appropriate communication opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/gestalt-early-gestalts', '_blank')">Using Early Gestalts</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Mitigated Gestalts",
        ageRange: "(Ages: 2-4 years and beyond)",
        skills: ["Mitigated Gestalts"],
        content: `
            <p>At this level, children begin to modify their gestalt phrases, showing flexibility and beginning to break down longer phrases into more manageable units.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will demonstrate flexibility with gestalt phrases by modifying them to fit different communicative contexts in 70% of opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/gestalt-mitigated-gestalts', '_blank')">Mitigated Gestalts</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Developing Self-Generated Language",
        ageRange: "(Ages: 3-6 years and beyond)",
        skills: ["Developing Self-Generated Language"],
        content: `
            <p>This level focuses on helping children move from using gestalt phrases to generating their own original language, combining individual words in novel ways.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will produce self-generated utterances combining individual words in novel ways to communicate across various contexts in 80% of communication attempts.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/gestalt-self-generated-language', '_blank')">Developing Self-Generated Language</button>
            </div>
        `
    }
};

// AAC Curriculum - Page 17
const aacCurriculum = {
    beginner: {
        title: "Beginner Level: Introduction to AAC",
        ageRange: "(Ages: 18 months and beyond)",
        skills: ["Introduction to AAC"],
        content: `
            <p>This level introduces individuals to augmentative and alternative communication systems, focusing on basic symbol recognition and simple message construction.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will use AAC to express basic wants and needs by selecting appropriate symbols or activating device functions in 80% of opportunities across different settings.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/aac-introduction', '_blank')">Introduction to AAC</button>
            </div>
        `
    },
    intermediate: {
        title: "Intermediate Level: Expanding AAC Use",
        ageRange: "(Ages: 2-6 years and beyond)",
        skills: ["Expanding AAC Use"],
        content: `
            <p>At this level, individuals learn to use AAC for more complex communication, including commenting, asking questions, and engaging in social interactions.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will use AAC to construct multi-symbol messages for various communicative functions (requesting, commenting, questioning) in 85% of appropriate opportunities.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/aac-expanding-use', '_blank')">Expanding AAC Use</button>
            </div>
        `
    },
    advanced: {
        title: "Advanced Level: Advanced AAC Communication",
        ageRange: "(Ages: 4+ years and beyond)",
        skills: ["Advanced AAC Communication"],
        content: `
            <p>This level focuses on sophisticated AAC use, including narrative development, complex sentence structures, and independent communication across various contexts.</p>
            
            <div class="goal-box">
                <h4>Sample Goal:</h4>
                <p>By the end of the reporting period, ____ will use AAC to engage in complex communication including storytelling, academic discussions, and social conversations with 90% effectiveness across multiple environments.</p>
            </div>
            
            <h4>Therapy Activities:</h4>
            <div class="activity-grid">
                <button class="activity-btn" onclick="window.open('https://hub.speechandlanguagekids.com/posts/aac-advanced-communication', '_blank')">Advanced AAC Communication</button>
            </div>
        `
    }
};

// Export all curriculum data
window.allCurriculumData = {
    foundationsFluency: foundationsForFluencyCurriculum,
    stuttering: stutteringCurriculum,
    wordFinding: wordFindingCurriculum,
    cluttering: clutteringCurriculum,
    analyticLanguage: analyticLanguageCurriculum,
    gestaltLanguage: gestaltLanguageCurriculum,
    aacCurriculum: aacCurriculum
};

console.log('All curriculum data loaded successfully!');