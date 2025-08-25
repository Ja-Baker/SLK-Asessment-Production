// Complete SLK Assessment Tool Content based on the official markdown specification
// This file contains all curriculum content, skill pages, and proper navigation structure

// All curriculum data organized by category
const curriculumData = {
    // Early Interactions Curriculum
    earlyInteractions: {
        title: "Early Interactions Curriculum",
        description: "This curriculum will encourage the individual to engage, respond, and participate in social interactions.",
        levels: {
            beginner: {
                title: "Beginner Level: Building Awareness and Engagement",
                ageRange: "(Ages: 9-15 months and beyond)",
                skills: ["Responding to Name", "Joint Attention", "Basic Turn Taking"],
                goal: "By the end of the reporting period, ____ will improve social awareness and engagement skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                rubric: [
                    { score: "5 – Emerging Mastery", description: "Consistently responds to name, actively shares attention during play (e.g., looks between object and adult, points/showing), and initiates or participates in turn-taking activities with minimal support." },
                    { score: "4 – Strong Progress", description: "Responds to name in most settings; shares joint attention with adult support (e.g., follows gaze or pointing); participates in familiar turn-taking routines but may need reminders or prompts to stay engaged." },
                    { score: "3 – Developing", description: "Inconsistently responds to name; shows some awareness of shared activities but rarely shifts attention between people and objects; may imitate turn-taking actions but needs frequent support to participate." },
                    { score: "2 – Emerging Skills", description: "Rarely responds to name; joint attention is limited or absent (focuses only on object or person, not both); turn-taking occurs only with high levels of prompting and modeling." },
                    { score: "1 – Limited/Not Yet Observed", description: "Does not respond to name; no observable joint attention; does not engage in or attempt turn-taking activities even with adult modeling." }
                ],
                activities: [
                    { name: "Responding to Name", pageId: "respondingToName" },
                    { name: "Joint Attention and Turn Taking", pageId: "jointAttentionTurnTaking" }
                ]
            },
            intermediate: {
                title: "Intermediate Level: Understanding and Responding to Communication",
                ageRange: "(Ages: 1-2 yrs and beyond)",
                skills: ["Following Basic Directions", "Answering Yes/No Questions", "Making a Choice Between two Options"],
                goal: "By the end of the reporting period, ____ will improve social understanding and responding skills by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                rubric: [
                    { score: "5 – Emerging Mastery", description: "Consistently follows common one-step directions in various settings, accurately answers yes/no questions to express preferences, and clearly makes choices between two options using words, gestures, or AAC." },
                    { score: "4 – Strong Progress", description: "Follows one-step directions with minimal support or cues, answers yes/no questions in familiar contexts, and makes choices between two options when prompted or offered in a structured setting." },
                    { score: "3 – Developing", description: "Follows simple directions inconsistently and/or only in familiar routines; shows emerging understanding of yes/no questions (e.g., sometimes nods, gestures, or gives unclear answers); can make a choice when given support or a model." },
                    { score: "2 – Emerging Skills", description: "Responds to directions only with frequent prompting or modeling; rarely responds to yes/no questions or choices without full assistance, or may repeat the question or last option given instead of responding" },
                    { score: "1 – Limited/Not Yet Observed", description: "Does not follow one-step directions, answer yes/no questions, or make choices between two presented options." }
                ],
                activities: [
                    { name: "Following Basic Directions", pageId: "followingBasicDirections" },
                    { name: "Answering Yes/No Questions", pageId: "answeringYesNoQuestions" },
                    { name: "Making a Choice Between Two Options", pageId: "makingChoiceBetweenOptions" }
                ]
            },
            advanced: {
                title: "Advanced Level: Expanding Social Participation and Interaction",
                ageRange: "(Ages: 1-3 yrs and beyond)",
                skills: ["Participating in Early Social Routines", "Increasing Interaction Length", "Answering Wh- Questions"],
                goal: "By the end of the reporting period, ____ will improve social participation and interaction by achieving at least a 4 out of 5 on the following rubric as evaluated by the (speech-language pathologist/teacher/parent) over the previous two weeks.",
                rubric: [
                    { score: "5 – Emerging Mastery", description: "Actively participates in familiar social routines with minimal prompting, maintains attention and engagement during multi-turn social interactions, and consistently responds to \"What,\" \"Where,\" and \"Who\" questions in familiar situations." },
                    { score: "4 – Strong Progress", description: "Joins in common social games and routines when prompted, stays engaged in short interactions with support, and responds accurately to some WH- questions with occasional prompts or cues." },
                    { score: "3 – Developing", description: "Occasionally participates in social routines with frequent support, briefly attends to back-and-forth interactions, and shows emerging understanding of WH- questions (may respond correctly in highly familiar contexts)." },
                    { score: "2 – Emerging Skills", description: "Rarely joins social routines, attention to interaction is fleeting, and WH- questions are typically unanswered or the question is repeated instead of answered." },
                    { score: "1 – Limited/Not Yet Observed", description: "Not yet participating in familiar social routines, minimal engagement in social exchanges, and no observable response to \"What,\" \"Where,\" or \"Who\" questions." }
                ],
                activities: [
                    { name: "Participating in Early Social Routines", pageId: "participatingEarlySocialRoutines" },
                    { name: "Responding to Others", pageId: "respondingToOthers" },
                    { name: "Respond to Wh- Questions", pageId: "askingAnsweringQuestions" }
                ]
            }
        }
    },

    // Analytic Language Processor Curriculum
    analyticLanguage: {
        title: "Analytic Language Processor Curriculum (First Words)",
        description: "Analytic Language Processors (ALPs) are children who learn language one word at a time—starting with single words, gradually combining them into phrases and sentences as they develop.",
        levels: {
            beginner: {
                title: "Beginner Level: Encouraging First Words",
                ageRange: "(Any Age)",
                skills: ["Modeling language in a way that supports language development", "Vocabulary-building activities"],
                goal: "By the end of the reporting period, _______ will spontaneously speak words to interact with others at least five times during a 10-minute play interaction on three consecutive data collection days.",
                activities: [
                    { name: "Encouraging First Words through Indirect Language Stimulation", pageId: "encouragingFirstWords" }
                ]
            },
            intermediate: {
                title: "Intermediate Level: Producing Early Word Shapes",
                ageRange: "(Ages: 1-3 yrs and beyond)",
                skills: ["Imitating Actions and Sound Effects", "Imitating and Producing CV, VC, and CVC Words (like \"no\", \"up\", and \"dog\")"],
                goal: "By the end of the report period, during a 10-minute activity, ________ will spontaneously produce at least 10 consonant-vowel (CV), vowel-consonant (VC), and consonant-vowel-consonant (CVC) words with verbal prompting (e.g. \"what do you need\") as needed (speech sound errors or replacements are acceptable as long as the sounds are attempted).",
                activities: [
                    { name: "Producing CV, VC, and CVC Words for Functional Communication", pageId: "producingCVCWords" }
                ]
            },
            advanced: {
                title: "Advanced Level: Expanding Vocabulary and Combining Words",
                ageRange: "(Ages: 1.5-3 yrs and beyond)",
                skills: ["Building an Expressive Vocabulary of First 50 Words", "Producing 2-Word Utterances"],
                goal: "By the end of the reporting period, during a 10-minute interaction with an adult, _____ will produce five 2-word combinations, either in imitation or spontaneously produced, with models and prompts from the adult as needed.",
                activities: [
                    { name: "Building an Expressive Vocabulary of First 50 Words", pageId: "buildingFirst50Words" },
                    { name: "Producing 2-Word Utterances", pageId: "producing2WordUtterances" }
                ]
            }
        }
    },

    // Gestalt Language Processor Curriculum
    gestaltLanguage: {
        title: "Gestalt Language Processor Curriculum (Shaping Echolalia)",
        description: "Gestalt Language Processors (GLPs) develop language in chunks or \"gestalts\" rather than individual words. Instead of learning single words and combining them into phrases, they acquire and use whole sentences, scripts, or song lyrics that they have heard elsewhere.",
        levels: {
            beginner: {
                title: "Beginner Level: Using Early Gestalts",
                ageRange: "(Ages: 1.5 - 3.5 yrs and beyond)",
                skills: ["Finding meaning in echolalia", "Modeling gestalts"],
                goal: "By the end of the reporting period, _________ will spontaneously communicate using at least 5 different gestalts (words, phrases, sentences, songs, or scripts) during a 10-minute play activity in the therapy room.",
                activities: [
                    { name: "Responding to and Modeling Early Gestalts", pageId: "modelingEarlyGestalts" }
                ]
            },
            intermediate: {
                title: "Intermediate Level: Mitigated Gestalts",
                ageRange: "(Ages: 2.5 - 5 yrs and beyond)",
                skills: ["Breaking Down Gestalts", "Recombining Pieces of Different Gestalts"],
                goal: "By the end of the reporting period, ___________ will spontaneously communicate using at least 5 different shortened gestalts (a shorter part of a larger script/gestalt) or a gestalt made up of pieces of other gestalts (ex: \"let's go...\" + \"to the store\") during a 10-minute play activity in the therapy room.",
                activities: [
                    { name: "Breaking Down and Mixing and Matching Gestalts", pageId: "breakingDownGestalts" }
                ]
            },
            advanced: {
                title: "Advanced Level: Developing Self-Generated Language",
                ageRange: "(Ages: 3 - 7 yrs and beyond)",
                skills: ["Using Single Words", "Producing 2-Word Utterances"],
                goal: "By the end of the reporting period, _______ will spontaneously communicate using at least 5 different single words or 2-word combinations during a 10-minute play activity in the therapy room.",
                activities: [
                    { name: "Building an Expressive Vocabulary of First 50 Words", pageId: "buildingFirst50Words" },
                    { name: "Producing 2-Word Utterances", pageId: "producing2WordUtterances" }
                ]
            }
        }
    },

    // AAC Curriculum
    aacCurriculum: {
        title: "Early Augmentative/Alternative Communication (AAC) Curriculum",
        description: "This curriculum supports individuals who use AAC systems to develop functional and meaningful communication.",
        levels: {
            beginner: {
                title: "Beginning AAC Use - Early Functional Communication",
                activities: [
                    { name: "Early Functional Communication Using AAC", pageId: "earlyFunctionalAAC" }
                ]
            },
            advanced: {
                title: "Expanding Language Skills through AAC",
                activities: [
                    { name: "Expanding Communication through AAC", pageId: "expandingAAC" }
                ]
            }
        }
    }
};

// Speech Sound Skills Data
const speechSoundSkills = {
    articulation: {
        title: "Articulation Curriculum",
        description: "Choose this if the individual has difficulty with specific speech sounds, producing them incorrectly or with noticeable distortions.",
        sounds: [
            { name: "/b/ Sound", pageId: "bSound" },
            { name: "/m/ Sound", pageId: "mSound" },
            { name: "/n/ Sound", pageId: "nSound" },
            { name: "/p/ Sound", pageId: "pSound" },
            { name: "/h/ Sound", pageId: "hSound" },
            { name: "/w/ Sound", pageId: "wSound" },
            { name: "/d/ Sound", pageId: "dSound" },
            { name: "Vowel Sounds", pageId: "vowelSounds" },
            { name: "/k/ Sound", pageId: "kSound" },
            { name: "/g/ Sound", pageId: "gSound" },
            { name: "/f/ Sound", pageId: "fSound" },
            { name: "/t/ Sound", pageId: "tSound" },
            { name: "/ŋ/ \"ng\" Sound", pageId: "ngSound" },
            { name: "\"y\" Sound", pageId: "ySound" },
            { name: "/v/ Sound", pageId: "vSound" },
            { name: "/ʤ/ (\"j\") Sound", pageId: "jSound" },
            { name: "/s/ Sound", pageId: "sSound" },
            { name: "/ʧ/ (\"ch\") Sound", pageId: "chSound" },
            { name: "/l/ Sound", pageId: "lSound" },
            { name: "/ʃ/ (\"sh\") Sound", pageId: "shSound" },
            { name: "/z/ Sound", pageId: "zSound" },
            { name: "/r/ Sound", pageId: "rSound" },
            { name: "\"th\" Sound (Voiced and Voiceless)", pageId: "thSound" },
            { name: "/ʒ/ Sound (\"zh\" as in \"measure\")", pageId: "zhSound" },
            { name: "Consonant Clusters (like /st/ and /tw/)", pageId: "consonantClusters" }
        ]
    },

    phonology: {
        title: "Phonology Curriculum",
        description: "Select this if the individual demonstrates consistent patterns of speech errors, such as omitting sounds at the beginning or end of words or struggling with whole categories of sounds.",
        patterns: [
            { name: "Initial Consonant Deletion", pageId: "initialConsonantDeletion" },
            { name: "Final Consonant Deletion", pageId: "finalConsonantDeletion" },
            { name: "Unstressed Syllable Deletion", pageId: "unstressedSyllableDeletion" },
            { name: "Velar Fronting", pageId: "velarFronting" },
            { name: "Backing", pageId: "backing" },
            { name: "Stopping of Fricatives", pageId: "stoppingFricatives" },
            { name: "Cluster Reduction", pageId: "clusterReduction" },
            { name: "Gliding of Liquids", pageId: "glidingLiquids" },
            { name: "Prevocalic Voicing", pageId: "prevocalicVoicing" },
            { name: "Postvocalic Devoicing", pageId: "postvocalicDevoicing" }
        ]
    },

    motorSpeech: {
        title: "Motor Speech Curriculum",
        description: "Opt for this if the individual has inconsistent speech errors, struggles more with longer words, appears to have difficulty physically producing speech sounds, or sounds choppy and robotic.",
        skills: [
            { name: "Produce Expanded Word Structures, such as CVCV, CCVC, etc.", pageId: "expandedWordStructures" },
            { name: "Improving Oral Proprioception and Coordination for Speech", pageId: "oralProprioception" },
            { name: "Producing Multisyllabic Words", pageId: "multisyllabicWords" }
        ]
    },

    mumbling: {
        title: "Mumbling Curriculum",
        description: "If the individual speaks too quickly, too quietly, slurs their words, or can produce sounds correctly in isolation but becomes harder to understand in conversation.",
        skills: [
            { name: "Overarticulation in Words, Phrases, and Sentences", pageId: "overarticulation" },
            { name: "Overarticulate in Structured Conversation when Prompted", pageId: "overarticulationConversation" },
            { name: "Identifying Signs of Communication Breakdown and Using Repair Strategies", pageId: "communicationBreakdown" }
        ]
    },

    cyclesPhonology: {
        title: "Cycles Approach for Phonology Curriculum",
        description: "This is a great option for individuals with many sound errors. You'll take a cyclical approach to therapy by working on each sound error for 1-2 weeks and cycling between targeting multiple sounds or phonological processes."
    }
};

// Language Skills Data
const languageSkills = {
    followingDirections: {
        title: "Following Directions Curriculum",
        description: "Choose this if the individual struggles to follow one-step or multi-step directions, becomes easily distracted when given instructions, or has trouble processing spoken information.",
        skills: [
            { name: "Following One-Step Directions (Routine and Novel)", pageId: "oneStepDirections" },
            { name: "Following 2-Step Directions (Routine and Novel)", pageId: "twoStepDirections" }
        ]
    },

    askingAnsweringQuestions: {
        title: "Asking and Answering Questions Curriculum",
        description: "Select this if the individual has difficulty answering basic WH-questions (who, what, where, etc.), struggles to ask questions that make sense, or has trouble answering questions about something they just heard.",
        skills: [
            { name: "Asking Questions with Proper Syntax", pageId: "askingQuestions" },
            { name: "Answering yes/no questions", pageId: "answeringYesNo" },
            { name: "Answering \"what\" questions", pageId: "answeringWhat" },
            { name: "Answering \"who\" questions", pageId: "answeringWho" },
            { name: "Answering \"where\" questions", pageId: "answeringWhere" },
            { name: "Answering \"when\" questions", pageId: "answeringWhen" },
            { name: "Answering \"why\" questions", pageId: "answeringWhy" },
            { name: "Answering \"how\" questions", pageId: "answeringHow" },
            { name: "Answering \"which\" questions", pageId: "answeringWhich" },
            { name: "Answering mixed questions", pageId: "answeringMixed" },
            { name: "Answering questions about past events", pageId: "answeringPastEvents" }
        ]
    },

    sequencingRetelling: {
        title: "Sequencing and Retelling Curriculum",
        description: "Opt for this if the individual struggles to retell events or stories in order, starts retellings in the middle without context, or leaves out key details.",
        skills: [
            { name: "Sequencing and describing steps to common activities", pageId: "sequencingSteps" },
            { name: "Retelling past events", pageId: "retellingEvents" }
        ]
    },

    grammarSyntax: {
        title: "Grammar & Sentence Complexity Curriculum",
        description: "If the individual's speech contains frequent grammar errors, sounds choppy and incomplete, or their sentences are shorter or simpler than expected for their age.",
        skills: [
            { name: "Articles \"a\", \"an\", \"the\"", pageId: "articles" },
            { name: "Auxiliary Verbs (Helping verbs like \"be\", \"do\", \"have\", etc.)", pageId: "auxiliaryVerbs" },
            { name: "Past Tense Verbs", pageId: "pastTenseVerbs" },
            { name: "Plural Nouns", pageId: "pluralNouns" },
            { name: "Possessive 's", pageId: "possessiveS" },
            { name: "Possessive Pronouns", pageId: "possessivePronouns" },
            { name: "Pronouns", pageId: "pronouns" },
            { name: "Using the word \"to\"", pageId: "usingTo" },
            { name: "Producing 2-word utterances", pageId: "producing2Words" },
            { name: "Subject + Verb + Object (SVO) sentences", pageId: "svoSentences" }
        ]
    },

    foundationsLiteracy: {
        title: "Foundations for Literacy Curriculum",
        description: "Choose this if the individual struggles with early reading skills like phonological awareness, has difficulty understanding written texts, or needs support with reading fluency and comprehension.",
        skills: [
            { name: "Identify main idea and details", pageId: "mainIdeaDetails" },
            { name: "Phonological awareness (pre-reading skills like rhyming)", pageId: "phonologicalAwareness" },
            { name: "Understanding, retelling, and producing narratives", pageId: "narratives" },
            { name: "Using punctuation to help with intonation and pausing (reading fluency)", pageId: "punctuationFluency" }
        ]
    },

    abstractLanguage: {
        title: "Abstract Language Curriculum",
        description: "Select this if the individual has difficulty understanding figurative language (idioms, sarcasm, metaphors, etc.) or struggles with making inferences.",
        skills: [
            { name: "Idioms and Figurative Language", pageId: "idiomsLanguage" },
            { name: "Similes and Metaphors", pageId: "similesMetaphors" },
            { name: "Making Inferences", pageId: "makingInferences" }
        ]
    },

    vocabulary: {
        title: "Vocabulary Curriculum",
        description: "Opt for this if the individual uses vague or imprecise language, has difficulty understanding new words and concepts, or struggles with remembering and using the correct words.",
        skills: [
            { name: "Adjectives", pageId: "adjectives" },
            { name: "Comparing and contrasting", pageId: "comparingContrasting" },
            { name: "First 50 words", pageId: "first50Words" },
            { name: "Spatial concepts (location words like \"on\" and \"under\")", pageId: "spatialConcepts" },
            { name: "Temporal concepts (ex: before/during/after, etc.)", pageId: "temporalConcepts" },
            { name: "Quantitative concepts (ex: more/less/a few, etc.)", pageId: "quantitativeConcepts" },
            { name: "Using affixes (prefixes and suffixes) to decode unknown words", pageId: "affixes" },
            { name: "Expanding vocabulary of nouns from basic categories", pageId: "expandingNouns" },
            { name: "Antonyms and synonyms", pageId: "antonymsSynonyms" },
            { name: "Multiple meaning words", pageId: "multipleMeaning" }
        ]
    },

    cyclesLanguage: {
        title: "Cycles Approach for Language Curriculum (Core Language Program)",
        description: "This is a great option for individuals who are struggling in multiple different areas of language development. You'll take a cyclical approach to therapy by working on each language skill for 1-2 weeks and cycling between targeting multiple areas of language and literacy development."
    }
};

// Social Communication Skills Data
const socialCommunicationSkills = {
    socialAwareness: {
        title: "Social Awareness and Interaction Curriculum",
        description: "Choose this pathway if the individual needs support in responding to others, understanding others' perspectives, and engaging appropriately in social interactions.",
        skills: [
            { name: "Improving joint attention and turn taking", pageId: "jointAttentionTurnTaking" },
            { name: "Responding to their name", pageId: "respondingName" },
            { name: "Perspective-taking, empathy, and understanding others", pageId: "perspectiveTaking" },
            { name: "Proximity/giving others personal space", pageId: "proximity" }
        ]
    },

    emotionalRegulation: {
        title: "Emotional Regulation & Self-Advocacy Curriculum",
        description: "Choose this pathway if the individual struggles with communicating basic wants and needs, managing emotions, coping with social stressors, or effectively expressing their needs and boundaries.",
        skills: [
            { name: "Replacing challenging behaviors with communication", pageId: "replacingBehaviors" },
            { name: "Regulating emotions and self-calming", pageId: "emotionalRegulation" },
            { name: "Self-advocacy and speaking up for what you want/need", pageId: "selfAdvocacy" }
        ]
    },

    conversationalSkills: {
        title: "Conversational Skills Curriculum",
        description: "Choose this pathway if the individual needs help with initiating, maintaining, and appropriately ending conversations, as well as understanding conversational rules.",
        skills: [
            { name: "Initiating interactions with others", pageId: "initiatingInteractions" },
            { name: "Topic maintenance and providing relevant info", pageId: "topicMaintenance" },
            { name: "Continuing/maintaining an interaction (responding, asking questions, etc.)", pageId: "maintainingInteraction" },
            { name: "Repairing communication breakdowns", pageId: "repairingBreakdowns" },
            { name: "Navigating disagreements with others", pageId: "navigatingDisagreements" },
            { name: "Code switching", pageId: "codeSwitching" }
        ]
    },

    selectiveMutism: {
        title: "Selective Mutism Curriculum",
        description: "Choose this pathway if the individual is able to speak in some situations but experiences anxiety or difficulty speaking in specific social settings.",
        skills: [
            { name: "Increasing speech for children with selective mutism", pageId: "selectiveMutismSpeech" }
        ]
    }
};

// Fluency Skills Data
const fluencySkills = {
    foundationsFluency: {
        title: "Foundations for Fluency Curriculum",
        description: "Select this pathway if you want to build essential fluency skills, including breath control, emotional regulation, and natural speech flow.",
        skills: [
            { name: "Improving awareness and dealing with negative emotions and stuttering", pageId: "fluencyAwareness" },
            { name: "Improving breath control for fluency and voice", pageId: "breathControl" },
            { name: "Indirect therapy for young children who stutter", pageId: "indirectTherapy" }
        ]
    },

    stuttering: {
        title: "Stuttering Curriculum",
        description: "Select this pathway if the individual experiences stuttering and need structured strategies to support smoother, more confident communication.",
        skills: [
            { name: "Fluency shaping/enhancing strategies", pageId: "fluencyShaping" },
            { name: "Stuttering modification strategies", pageId: "stutteringModification" }
        ]
    },

    cluttering: {
        title: "Cluttering Curriculum",
        description: "Select this pathway if speech tends to be too fast, disorganized, or difficult to understand, and you need strategies to improve clarity and self-monitoring.",
        skills: [
            { name: "Improving fluency and speech clarity for cluttering", pageId: "clutteringFluency" }
        ]
    },

    wordFinding: {
        title: "Word Finding/Word Retrieval Curriculum",
        description: "Select this pathway if the individual struggles with finding the right words, hesitating, or frequently pausing due to word retrieval difficulties.",
        skills: [
            { name: "Word-finding/word-retrieval", pageId: "wordRetrieval" }
        ]
    }
};

// Voice/Resonance Skills Data
const voiceResonanceSkills = {
    foundationsVoice: {
        title: "Foundations of Healthy Voice Use Curriculum",
        description: "Choose this pathway if you need to improve vocal hygiene, reduce strain, or develop better breath support for voice production.",
        skills: [
            { name: "Vocal hygiene/eliminating vocal abuse", pageId: "vocalHygiene" },
            { name: "Breath control for fluency/voice", pageId: "breathControlVoice" }
        ]
    },

    voice: {
        title: "Voice Curriculum",
        description: "Choose this pathway if you need to improve vocal quality due to strain, tension, or inefficient voice use.",
        skills: [
            { name: "Improving vocal quality using frontal resonance (glottal fry, laryngeal tension, etc.)", pageId: "vocalQuality" },
            { name: "Using appropriate vocal volume", pageId: "vocalVolume" }
        ]
    },

    resonance: {
        title: "Resonance Curriculum",
        description: "Choose this pathway if you need to address hypernasality or nasal emission affecting speech clarity.",
        skills: [
            { name: "Hypernasality/nasal emission", pageId: "hypernasality" }
        ]
    },

    prosody: {
        title: "Prosody Curriculum",
        description: "Choose this pathway if you need to improve pitch, volume, or rate for more natural and expressive speech.",
        skills: [
            { name: "Prosody (pitch, volume, rate)", pageId: "prosodySkills" }
        ]
    }
};

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        curriculumData,
        speechSoundSkills,
        languageSkills,
        socialCommunicationSkills,
        fluencySkills,
        voiceResonanceSkills
    };
}