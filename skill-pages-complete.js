// Updated skill pages content with ALL external links from SLK Assessment Tool
// This file integrates all 112 hub.speechandlanguagekids.com links

const skillPagesContent = {
    // EARLY INTERACTIONS SKILLS
    respondingToName: {
        title: "Responding to Name",
        category: "Early Interactions",
        externalLink: externalLinksMapping.socialCommunication.awarenessOfOthers.respondingToTheirName,
        content: `
            <p>This skill focuses on helping children consistently respond when their name is called, which is foundational for social engagement and communication.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Practice name-calling during preferred activities</li>
                <li>Use visual cues along with verbal name-calling</li>
                <li>Start close and gradually increase distance</li>
                <li>Pair name with positive interactions</li>
            </ul>
        `
    },

    jointAttentionTurnTaking: {
        title: "Joint Attention and Turn Taking",
        category: "Early Interactions",
        externalLink: externalLinksMapping.socialCommunication.awarenessOfOthers.improvingJointAttentionAndTurnTaking,
        content: `
            <p>Joint attention and turn-taking are crucial early social skills that form the foundation for later communication development.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Practice looking back and forth between objects and people</li>
                <li>Simple turn-taking games like rolling a ball</li>
                <li>Pointing and following pointing gestures</li>
                <li>Shared book reading with commenting</li>
            </ul>
        `
    },

    followingBasicDirections: {
        title: "Following Basic Directions",
        category: "Early Interactions",
        externalLink: externalLinksMapping.functionalCommunication.followingDirections,
        content: `
            <p>This skill involves understanding and following simple one-step instructions in various contexts.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Start with familiar routines and actions</li>
                <li>Use visual supports and gestures</li>
                <li>Practice with preferred objects and activities</li>
                <li>Gradually increase complexity</li>
            </ul>
        `
    },

    answeringYesNoQuestions: {
        title: "Answering Yes/No Questions",
        category: "Early Interactions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringYesNoQuestions,
        content: `
            <p>Learning to answer yes/no questions helps children express preferences and participate in decision-making.</p>
            <h4>Key Activities:</h4>
            <ul>
                <li>Start with concrete preference questions</li>
                <li>Use visual supports (thumbs up/down, head nods)</li>
                <li>Practice with real choices during daily activities</li>
                <li>Gradually move to more abstract questions</li>
            </ul>
        `
    },

    // FUNCTIONAL COMMUNICATION - FIRST WORDS
    encouragingFirstWords: {
        title: "Encouraging First Words",
        category: "Functional Communication",
        externalLink: externalLinksMapping.functionalCommunication.indirectLanguageStimulation,
        content: `
            <p>Using indirect language stimulation techniques to encourage first word production in late talkers.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Model language during play without requiring imitation</li>
                <li>Use self-talk and parallel talk</li>
                <li>Expand on child's vocalizations</li>
                <li>Create communication opportunities</li>
            </ul>
        `
    },

    producingCVCWords: {
        title: "Producing CV, VC, and CVC Words",
        category: "Functional Communication",
        externalLink: externalLinksMapping.functionalCommunication.speakingCvVcCvcWords,
        content: `
            <p>Building early word shapes for functional communication using simple syllable structures.</p>
            <h4>Target Words:</h4>
            <ul>
                <li>CV words: go, me, no, hi</li>
                <li>VC words: up, on, off, out</li>
                <li>CVC words: dog, cat, mom, dad</li>
                <li>Focus on functional vocabulary</li>
            </ul>
        `
    },

    buildingFirst50Words: {
        title: "Building First 50 Words",
        category: "Functional Communication",
        externalLink: externalLinksMapping.functionalCommunication.buildingExpressiveVocabularyFirst50Words,
        content: `
            <p>Developing a functional expressive vocabulary of the most important first words.</p>
            <h4>Core Categories:</h4>
            <ul>
                <li>People names (mama, dada)</li>
                <li>Social words (hi, bye, please)</li>
                <li>Action words (go, stop, eat)</li>
                <li>Descriptive words (big, hot, more)</li>
            </ul>
        `
    },

    // GESTALT LANGUAGE PROCESSORS
    gestaltLanguageProcessing: {
        title: "Supporting Gestalt Language Processors",
        category: "Functional Communication",
        externalLink: externalLinksMapping.functionalCommunication.increasingCommunicationForGLPs,
        content: `
            <p>Supporting children who learn language through scripts and echolalia to develop flexible communication.</p>
            <h4>Key Strategies:</h4>
            <ul>
                <li>Acknowledge and respond to scripts as communication</li>
                <li>Model meaningful gestalts in context</li>
                <li>Support script mixing and mitigating</li>
                <li>Build toward self-generated language</li>
            </ul>
        `
    },

    // AAC SKILLS
    beginningAACUse: {
        title: "Beginning AAC Use",
        category: "AAC",
        externalLink: externalLinksMapping.functionalCommunication.beginningAACUse,
        content: `
            <p>Introducing augmentative and alternative communication for early functional communication.</p>
            <h4>Getting Started:</h4>
            <ul>
                <li>Select appropriate AAC system</li>
                <li>Model AAC use consistently</li>
                <li>Start with core vocabulary</li>
                <li>Create communication opportunities</li>
            </ul>
        `
    },

    expandingAAC: {
        title: "Expanding Language Through AAC",
        category: "AAC",
        externalLink: externalLinksMapping.functionalCommunication.expandingLanguageSkillsThroughAAC,
        content: `
            <p>Using AAC to build more complex language skills and expand communication.</p>
            <h4>Expansion Strategies:</h4>
            <ul>
                <li>Combine words for longer messages</li>
                <li>Add fringe vocabulary</li>
                <li>Model different communication functions</li>
                <li>Support literacy development</li>
            </ul>
        `
    },

    // ARTICULATION SKILLS - ALL SOUNDS
    bSound: {
        title: "/b/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.bSound,
        content: `<p>Teaching correct production of the /b/ sound in all word positions.</p>`
    },

    chSound: {
        title: "CH Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.chSound,
        content: `<p>Teaching correct production of the CH sound in all word positions.</p>`
    },

    dSound: {
        title: "/d/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.dSound,
        content: `<p>Teaching correct production of the /d/ sound in all word positions.</p>`
    },

    fSound: {
        title: "/f/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.fSound,
        content: `<p>Teaching correct production of the /f/ sound in all word positions.</p>`
    },

    gSound: {
        title: "/g/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.gSound,
        content: `<p>Teaching correct production of the /g/ sound in all word positions.</p>`
    },

    hSound: {
        title: "/h/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.hSound,
        content: `<p>Teaching correct production of the /h/ sound in all word positions.</p>`
    },

    jSound: {
        title: "J Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.jSound,
        content: `<p>Teaching correct production of the J sound in all word positions.</p>`
    },

    kSound: {
        title: "/k/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.kSound,
        content: `<p>Teaching correct production of the /k/ sound in all word positions.</p>`
    },

    lSound: {
        title: "/l/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.lSound,
        content: `<p>Teaching correct production of the /l/ sound in all word positions.</p>`
    },

    mSound: {
        title: "/m/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.mSound,
        content: `<p>Teaching correct production of the /m/ sound in all word positions.</p>`
    },

    nSound: {
        title: "/n/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.nSound,
        content: `<p>Teaching correct production of the /n/ sound in all word positions.</p>`
    },

    ngSound: {
        title: "NG Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.ngSound,
        content: `<p>Teaching correct production of the NG sound in all word positions.</p>`
    },

    pSound: {
        title: "/p/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.pSound,
        content: `<p>Teaching correct production of the /p/ sound in all word positions.</p>`
    },

    rSound: {
        title: "/r/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.rSound,
        content: `<p>Teaching correct production of the /r/ sound in all word positions.</p>`
    },

    sSound: {
        title: "/s/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.sSound,
        content: `<p>Teaching correct production of the /s/ sound in all word positions.</p>`
    },

    shSound: {
        title: "SH Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.shSound,
        content: `<p>Teaching correct production of the SH sound in all word positions.</p>`
    },

    tSound: {
        title: "/t/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.tSound,
        content: `<p>Teaching correct production of the /t/ sound in all word positions.</p>`
    },

    thSound: {
        title: "TH Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.thSound,
        content: `<p>Teaching correct production of the TH sound (voiced and voiceless) in all word positions.</p>`
    },

    vSound: {
        title: "/v/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.vSound,
        content: `<p>Teaching correct production of the /v/ sound in all word positions.</p>`
    },

    wSound: {
        title: "/w/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.wSound,
        content: `<p>Teaching correct production of the /w/ sound in all word positions.</p>`
    },

    ySound: {
        title: "Y Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.ySound,
        content: `<p>Teaching correct production of the Y sound in all word positions.</p>`
    },

    zSound: {
        title: "/z/ Sound",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.zSound,
        content: `<p>Teaching correct production of the /z/ sound in all word positions.</p>`
    },

    vowelSounds: {
        title: "Vowel Sounds",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.vowelSounds,
        content: `<p>Teaching correct production of all vowel sounds.</p>`
    },

    consonantBlends: {
        title: "Consonant Blends/Clusters",
        category: "Articulation",
        externalLink: externalLinksMapping.speechSounds.articulation.consonantBlends,
        content: `<p>Teaching correct production of consonant blends and clusters.</p>`
    },

    // PHONOLOGY SKILLS
    finalConsonantDeletion: {
        title: "Final Consonant Deletion",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.finalConsonantDeletion,
        content: `
            <p>Addressing the phonological pattern of omitting final consonants in words.</p>
            <h4>Treatment Approach:</h4>
            <ul>
                <li>Contrast words with and without final consonants</li>
                <li>Use minimal pairs (bee/beet, bow/boat)</li>
                <li>Practice in increasingly complex contexts</li>
                <li>Focus on functional vocabulary</li>
            </ul>
        `
    },

    initialConsonantDeletion: {
        title: "Initial Consonant Deletion",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.initialConsonantDeletion,
        content: `<p>Addressing the phonological pattern of omitting initial consonants in words.</p>`
    },

    fronting: {
        title: "Velar Fronting",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.velarFronting,
        content: `<p>Addressing the pattern of replacing back sounds (k, g) with front sounds (t, d).</p>`
    },

    backing: {
        title: "Backing",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.backing,
        content: `<p>Addressing the pattern of replacing front sounds with back sounds.</p>`
    },

    stopping: {
        title: "Stopping of Fricatives",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.stoppingOfFricatives,
        content: `<p>Addressing the pattern of replacing fricative sounds with stop sounds.</p>`
    },

    clusterReduction: {
        title: "Cluster Reduction",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.clusterReduction,
        content: `<p>Addressing the simplification of consonant clusters.</p>`
    },

    gliding: {
        title: "Gliding of Liquids",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.glidingOfLiquids,
        content: `<p>Addressing the pattern of replacing /l/ and /r/ with glide sounds.</p>`
    },

    cyclesApproach: {
        title: "Cycles Approach to Phonology",
        category: "Phonology",
        externalLink: externalLinksMapping.speechSounds.phonology.cyclesApproach,
        content: `<p>Using the cycles approach for children with multiple phonological patterns.</p>`
    },

    // LANGUAGE SKILLS - ABSTRACT LANGUAGE
    idioms: {
        title: "Idioms and Figurative Language",
        category: "Abstract Language",
        externalLink: externalLinksMapping.languageSkills.abstractLanguage.idiomsAndFigurativeLanguage,
        content: `
            <p>Understanding and using non-literal language expressions.</p>
            <h4>Common Idioms to Teach:</h4>
            <ul>
                <li>"It's raining cats and dogs" (raining heavily)</li>
                <li>"Break a leg" (good luck)</li>
                <li>"Piece of cake" (very easy)</li>
                <li>"Under the weather" (feeling sick)</li>
            </ul>
        `
    },

    similesMetaphors: {
        title: "Similes and Metaphors",
        category: "Abstract Language",
        externalLink: externalLinksMapping.languageSkills.abstractLanguage.similesAndMetaphors,
        content: `<p>Understanding and creating comparisons using similes and metaphors.</p>`
    },

    inferences: {
        title: "Making Inferences",
        category: "Abstract Language",
        externalLink: externalLinksMapping.languageSkills.abstractLanguage.makingInferences,
        content: `<p>Drawing conclusions from context clues and implied information.</p>`
    },

    // QUESTIONS SKILLS
    askingQuestions: {
        title: "Asking Questions with Proper Syntax",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.askingQuestionsWithProperSyntax,
        content: `<p>Learning to formulate grammatically correct questions.</p>`
    },

    whatQuestions: {
        title: "Answering What Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringWhatQuestions,
        content: `<p>Understanding and responding to "what" questions about objects and actions.</p>`
    },

    whoQuestions: {
        title: "Answering Who Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringWhoQuestions,
        content: `<p>Understanding and responding to "who" questions about people.</p>`
    },

    whereQuestions: {
        title: "Answering Where Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringWhereQuestions,
        content: `<p>Understanding and responding to "where" questions about locations.</p>`
    },

    whenQuestions: {
        title: "Answering When Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringWhenQuestions,
        content: `<p>Understanding and responding to "when" questions about time.</p>`
    },

    whyQuestions: {
        title: "Answering Why Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringWhyQuestions,
        content: `<p>Understanding and responding to "why" questions about reasons and causes.</p>`
    },

    howQuestions: {
        title: "Answering How Questions",
        category: "Questions",
        externalLink: externalLinksMapping.languageSkills.askingAnsweringQuestions.answeringHowQuestions,
        content: `<p>Understanding and responding to "how" questions about manner and process.</p>`
    },

    // GRAMMAR SKILLS
    articles: {
        title: "Articles (a, an, the)",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.articles,
        content: `<p>Using articles correctly in sentences.</p>`
    },

    pronouns: {
        title: "Pronouns",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.pronouns,
        content: `<p>Using personal pronouns (he, she, they, it) correctly.</p>`
    },

    plurals: {
        title: "Plural Nouns",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.pluralNouns,
        content: `<p>Forming and using regular and irregular plurals.</p>`
    },

    pastTense: {
        title: "Past Tense Verbs",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.pastTenseVerbs,
        content: `<p>Using past tense verbs correctly in sentences.</p>`
    },

    possessives: {
        title: "Possessive Forms",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.possessiveS,
        content: `<p>Using possessive 's and possessive pronouns correctly.</p>`
    },

    auxiliaryVerbs: {
        title: "Auxiliary Verbs",
        category: "Grammar",
        externalLink: externalLinksMapping.languageSkills.grammarSyntax.auxiliaryVerbs,
        content: `<p>Using helping verbs (is, am, are, was, were, has, have) correctly.</p>`
    },

    // VOCABULARY SKILLS
    first50Words: {
        title: "First 50 Words",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.first50Words,
        content: `<p>Building core vocabulary of the most important first words.</p>`
    },

    spatialConcepts: {
        title: "Spatial Concepts",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.spatialConcepts,
        content: `<p>Understanding location words like on, under, behind, between.</p>`
    },

    temporalConcepts: {
        title: "Temporal Concepts",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.temporalConcepts,
        content: `<p>Understanding time concepts like before, after, during, first, last.</p>`
    },

    quantitativeConcepts: {
        title: "Quantitative Concepts",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.quantitativeConcepts,
        content: `<p>Understanding quantity words like more, less, few, many, some.</p>`
    },

    adjectives: {
        title: "Adjectives",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.adjectives,
        content: `<p>Using descriptive words to modify nouns.</p>`
    },

    comparingContrasting: {
        title: "Comparing and Contrasting",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.comparingAndContrasting,
        content: `<p>Identifying similarities and differences between items.</p>`
    },

    synonymsAntonyms: {
        title: "Synonyms and Antonyms",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.antonymsAndSynonyms,
        content: `<p>Understanding words with similar and opposite meanings.</p>`
    },

    multipleMeanings: {
        title: "Multiple Meaning Words",
        category: "Vocabulary",
        externalLink: externalLinksMapping.languageSkills.vocabulary.multipleMeaningWords,
        content: `<p>Understanding words that have more than one meaning.</p>`
    },

    // SEQUENCING AND RETELLING
    sequencing: {
        title: "Sequencing Steps",
        category: "Sequencing",
        externalLink: externalLinksMapping.languageSkills.sequencingRetelling.sequencingAndDescribingSteps,
        content: `<p>Ordering and describing steps in common activities.</p>`
    },

    retellingEvents: {
        title: "Retelling Past Events",
        category: "Sequencing",
        externalLink: externalLinksMapping.languageSkills.sequencingRetelling.retellingPastEvents,
        content: `<p>Retelling personal experiences and stories in logical order.</p>`
    },

    // LITERACY SKILLS
    phonologicalAwareness: {
        title: "Phonological Awareness",
        category: "Literacy",
        externalLink: externalLinksMapping.languageSkills.literacy.phonologicalAwareness,
        content: `<p>Pre-reading skills including rhyming, syllable segmentation, and sound blending.</p>`
    },

    readingComprehension: {
        title: "Reading Comprehension",
        category: "Literacy",
        externalLink: externalLinksMapping.languageSkills.literacy.identifyMainIdeaAndDetails,
        content: `<p>Identifying main ideas and supporting details in text.</p>`
    },

    narratives: {
        title: "Understanding Narratives",
        category: "Literacy",
        externalLink: externalLinksMapping.languageSkills.literacy.understandingRetellingProducingNarratives,
        content: `<p>Understanding, retelling, and producing story narratives.</p>`
    },

    // FLUENCY SKILLS
    stutteringAwareness: {
        title: "Stuttering Awareness",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.improvingAwarenessAndDealingWithNegativeEmotions,
        content: `<p>Building awareness and managing emotions related to stuttering.</p>`
    },

    breathControl: {
        title: "Breath Control",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.improvingBreathControl,
        content: `<p>Improving breath support for fluent speech production.</p>`
    },

    fluencyShaping: {
        title: "Fluency Shaping",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.fluencyShapingStrategies,
        content: `<p>Techniques for smooth, fluent speech production.</p>`
    },

    stutteringModification: {
        title: "Stuttering Modification",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.stutteringModificationStrategies,
        content: `<p>Strategies for managing moments of stuttering.</p>`
    },

    cluttering: {
        title: "Cluttering Management",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.improvingFluencyForCluttering,
        content: `<p>Improving clarity and organization for cluttered speech.</p>`
    },

    wordFinding: {
        title: "Word Finding",
        category: "Fluency",
        externalLink: externalLinksMapping.fluencySkills.wordFindingWordRetrieval,
        content: `<p>Strategies for word retrieval difficulties.</p>`
    },

    // SOCIAL COMMUNICATION SKILLS
    behaviorCommunication: {
        title: "Replacing Behaviors with Communication",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.behavioralChallenges.replacingChallengingBehaviors,
        content: `<p>Teaching functional communication to replace challenging behaviors.</p>`
    },

    emotionalRegulation: {
        title: "Emotional Regulation",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.behavioralChallenges.regulatingEmotionsAndSelfCalming,
        content: `<p>Strategies for managing emotions and self-calming.</p>`
    },

    perspectiveTaking: {
        title: "Perspective Taking",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.awarenessOfOthers.perspectiveTakingEmpathy,
        content: `<p>Understanding others' thoughts, feelings, and perspectives.</p>`
    },

    personalSpace: {
        title: "Personal Space",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.awarenessOfOthers.proximityGivingOthersPersonalSpace,
        content: `<p>Understanding and respecting personal boundaries.</p>`
    },

    initiatingInteractions: {
        title: "Initiating Interactions",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.initiatingInteractions,
        content: `<p>Starting conversations and interactions appropriately.</p>`
    },

    topicMaintenance: {
        title: "Topic Maintenance",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.topicMaintenanceAndProvidingRelevantInfo,
        content: `<p>Staying on topic and providing relevant information in conversation.</p>`
    },

    selfAdvocacy: {
        title: "Self-Advocacy",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.selfAdvocacy,
        content: `<p>Speaking up for wants, needs, and rights.</p>`
    },

    conversationMaintenance: {
        title: "Maintaining Conversations",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.continuingMaintainingAnInteraction,
        content: `<p>Keeping conversations going through questions and responses.</p>`
    },

    communicationRepair: {
        title: "Communication Repair",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.repairingCommunicationBreakdowns,
        content: `<p>Strategies for fixing communication breakdowns.</p>`
    },

    conflictResolution: {
        title: "Navigating Disagreements",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.conversationalSkills.navigatingDisagreements,
        content: `<p>Handling conflicts and disagreements appropriately.</p>`
    },

    figurativeLanguageSocial: {
        title: "Figurative Language in Social Contexts",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.abstractSocialCommunication.understandingAndUsingFigurativeLanguage,
        content: `<p>Understanding idioms, sarcasm, and metaphors in social situations.</p>`
    },

    socialInferences: {
        title: "Making Social Inferences",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.abstractSocialCommunication.makingSocialInferences,
        content: `<p>Reading between the lines in social situations.</p>`
    },

    sarcasm: {
        title: "Understanding Sarcasm",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.abstractSocialCommunication.understandingAndUsingSarcasm,
        content: `<p>Recognizing and appropriately using sarcastic language.</p>`
    },

    selectiveMutism: {
        title: "Selective Mutism Support",
        category: "Social Communication",
        externalLink: externalLinksMapping.socialCommunication.selectiveMutism.increasingSpeechForChildrenWithSelectiveMutism,
        content: `<p>Strategies for increasing speech in selective mutism.</p>`
    },

    // VOICE AND RESONANCE SKILLS
    vocalVolume: {
        title: "Vocal Volume",
        category: "Voice",
        externalLink: externalLinksMapping.voiceResonance.usingAppropriateVocalVolume,
        content: `<p>Using appropriate vocal volume in different settings.</p>`
    },

    prosody: {
        title: "Prosody",
        category: "Voice",
        externalLink: externalLinksMapping.voiceResonance.prosody,
        content: `<p>Improving pitch, volume, and rate for natural speech.</p>`
    },

    hypernasality: {
        title: "Hypernasality",
        category: "Resonance",
        externalLink: externalLinksMapping.voiceResonance.hypernasalityNasalEmission,
        content: `<p>Addressing excessive nasal resonance in speech.</p>`
    },

    vocalHygiene: {
        title: "Vocal Hygiene",
        category: "Voice",
        externalLink: externalLinksMapping.voiceResonance.vocalHygiene,
        content: `<p>Healthy voice habits and eliminating vocal abuse.</p>`
    },

    vocalQuality: {
        title: "Vocal Quality",
        category: "Voice",
        externalLink: externalLinksMapping.voiceResonance.improvingVocalQuality,
        content: `<p>Improving voice quality issues like hoarseness or strain.</p>`
    },

    breathSupport: {
        title: "Breath Support",
        category: "Voice",
        externalLink: externalLinksMapping.voiceResonance.breathControlForVoice,
        content: `<p>Developing proper breath support for voice production.</p>`
    },

    // MUMBLING/INTELLIGIBILITY
    mumbling: {
        title: "Reducing Mumbling",
        category: "Speech Clarity",
        externalLink: externalLinksMapping.speechSounds.mumbling.improveIntelligibility,
        content: `<p>Strategies to improve speech clarity and reduce mumbling.</p>`
    },

    // ORAL MOTOR
    oralMotor: {
        title: "Oral Motor Coordination",
        category: "Motor Speech",
        externalLink: externalLinksMapping.speechSounds.oralMotor.improveOralProprioception,
        content: `<p>Improving oral proprioception and coordination for speech.</p>`
    },

    // GENERALIZATION
    generalization: {
        title: "Generalizing Skills to Conversation",
        category: "Generalization",
        externalLink: externalLinksMapping.generalization.generalizingSkillsToConversation,
        content: `<p>Strategies for carrying over learned skills to conversational speech.</p>`
    }
};

// Function to display skill page content
function showSkillPage(skillId) {
    // Show loading indicator
    if (typeof window.showLoading === 'function') {
        window.showLoading('Loading skill page...');
    }
    
    const skill = skillPagesContent[skillId];
    if (!skill) {
        console.error(`Skill ${skillId} not found`);
        if (typeof window.hideLoading === 'function') {
            window.hideLoading();
        }
        return;
    }

    // Use requestAnimationFrame for smooth transitions
    requestAnimationFrame(() => {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

    // Create or update skill page
    let skillPage = document.getElementById('currentSkillPage');
    if (!skillPage) {
        skillPage = document.createElement('div');
        skillPage.id = 'currentSkillPage';
        skillPage.className = 'page';
        document.getElementById('content').appendChild(skillPage);
    }

    // Build skill page content
    let content = `
        <h2>${skill.title}</h2>
        <p class="skill-category">Category: ${skill.category}</p>
        ${skill.content}
    `;

    // Add external link button if available
    if (skill.externalLink) {
        content += `
            <div class="external-link-section">
                <h4>Additional Resources:</h4>
                <button class="external-link-btn" onclick="window.open('${skill.externalLink}', '_blank')">
                    View Detailed Activities and Resources →
                </button>
            </div>
        `;
    }

    // Add navigation buttons
    content += `
        <div class="skill-navigation">
            <button class="back-to-curriculum-btn" onclick="goBack()">← Back to Curriculum</button>
        </div>
    `;

        skillPage.innerHTML = content;
        skillPage.classList.add('active');

        // Update navigation history
        if (typeof navigationHistory !== 'undefined') {
            navigationHistory.push(currentPage);
            currentPage = 'currentSkillPage';
        }

        // Show back button
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.style.display = 'block';
        }

        // Scroll to top
        window.scrollTo(0, 0);
        
        // Hide loading indicator after content is ready
        setTimeout(() => {
            if (typeof window.hideLoading === 'function') {
                window.hideLoading();
            }
        }, 150);
    });
}

// Function to show skill with activity modal
function showSkill(skillId) {
    showSkillPage(skillId);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { skillPagesContent, showSkillPage, showSkill };
}