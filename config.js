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
    userAvatar: "🙂",
    welcomeHeading: "Hello! How can I help you today?",
    welcomeSubtext: "Select a starter prompt below or type your own question to begin.",

    introCards: [
        {
            icon: "🎮",
            title: "gaming",
            description: "Handphone dengan spesifikasi untuk bermain game.",
            prompt: "berikan rekomendasi handphone untuk bermain game dengan mengutamakan chipset dan ram terbaik sesuai budget."
        },
        {
            icon: "",
            title: "All rounder",
            description: "Handphone serbaguna untuk kebutuhan sehari-hari.",
            prompt: "rekomedasikan handphone all rounder terbaik sesuai kebutuhan dan budget."
        },
        {
            icon: "📷",
            title: "Kamera",
            description: "handphone dengan kamera berkualitas untuk foto dan video.",
            prompt: "saya mencacri ponsel dengan kamera terbaik untuk foto dan video berkualitas."
        },
        {
            icon: "🤤",
            title: "flagship",
            description: "ponsel kelas premium dengan performa dan fitur unggulan",
            prompt: "saya mencari ponsel flagship dengan performa terbaik, kamera premium, dan fitur  canggih"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://your-site.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.3,
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
    systemPrompt: `Kamu adalah SmartPhone Assistant, chatbot yang bertugas memberikan informasi lengkap mengenai spesifikasi handphone.
    Tanyakan merek, model, atau kebutuhan pengguna. Jelaskan spesifikasi seperti chipset, RAM, penyimpanan, kamera, baterai, layar, dan harga.
     Gunakan bahasa Indonesia yang sederhana, singkat, jelas, dan mudah dipahami.
     Berikan informasi secara akurat dan jangan mengarang spesifikasi..`,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
