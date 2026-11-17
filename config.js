/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "AI GADGETIN",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",
    botAvatar: "🤖",
    userAvatar: "🧑‍💻",
    welcomeHeading: "Halo! selamat datang di Ai Gadgetin",
    welcomeSubtext: "Mau bahas ponsel apa hari ini?.",

    introCards: [
        {
            icon: "📚",
            title: "All Rounder",
            description: "Ponsel serba guna untuk kehidupan sehari-hari.",
            prompt: "rekomendasi ponsel all rounder terbaik sesuai kebutuhan dan budget"
        },
        {
            icon: "⚡",
            title: "Gaming",
            description: "ponsel dengan spesifikasi untuk bermain game",
            prompt: "berikan rekomendasi ponsel dengan mengutamakan chipset dsn ram terbaik sesuai budget"aQ
            icon: "💡",
            title: "Camera",
            description: "ponsel dengan kamera berkualitas untuk foto dan video.",
            prompt: "rekomendasikan ponsel untuk foto dan video yang berkualitas sesuai budget."
        },
        {
            icon: "🛠️",
            title: "Flagship",
            description: "ponsel kelas premium dengan peforma dan fitur unggulan.",
            prompt: "saya mencari ponsel flagship deangan peforma terbaik, kamera premium dan fitur canggih"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://aigadgetin.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------
    contextWindowLimit: 10,

    ragConfig: {
        enabled: true,
        topKChunks: 2,
        minRelevanceScore: 0.12
    },

    // ------------------------------------------------------------------------
    // 5. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are Nexus, a helpful, accurate, and friendly AI assistant created for a school project.
Follow these core rules at all times:
1. Tone & Style: Be clear, encouraging, concise, and structured. Use bullet points or bold text for readability.
2. Grounded Answers: When "[REFERENCE DOCUMENTS]" are provided with the user's message, prioritize those facts above all else.
3. Honesty: If you do not know the answer, state clearly what you know and do not fabricate facts.
4. Safety: Refuse to generate harmful, inappropriate, or academic-dishonesty content.`,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
