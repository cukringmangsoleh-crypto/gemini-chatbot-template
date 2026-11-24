/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "Ai Gadgetin",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",
    botAvatar: "🤖",
    userAvatar: "🧑‍💻",
    welcomeHeading: "Hello! ",
    welcomeSubtext: "Mau bahas ponsel apa hari ini?.",

    introCards: [
        {
            icon: "📚",
            title: "all rounder",
            description: "ponsel yang cocok untuk penggunaan sehari-hari.",
            prompt: "Berikan rekomendasi ponsel dengan spesifikasi yang cocok untuk kehidupan sehari-hari."
        },
        {
            icon: "⚡",
            title: "gaming",
            description: "ponsel dengan spesifikasi tinggi untuk bermain game.",
            prompt: "berikan rekomendasi ponsel dengan mengutamakan chipset dan ram. "
        },
        {
            icon: "💡",
            title: "kamera",
            description: "Ponsel untuk video dan foto.",
            prompt: "rekomendasikan ponsel dengan spesifikasi kamera untuk foto dan video."
        },
        {
            icon: "🛠️",
            title: "flagship",
            description: "Ponsel kelas atas.",
            prompt: "rekomendasikan ponsel flagship."
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
        temperature: 0.3,
        topP: 0.5,
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
    systemPrompt: `Anda adalah Ai Gadgetin. Berikut adalah aturan yang harus anda laksanakan 
    1. hanya boleh menjawab tentang ponsel, jangan menjawab pertanyaan selain tentang ponsel
    2. jawab pertanyaan user dengan ramah dan pastikan informasi tentang ponsel sesuai
    3. jangan mengubah sifat yang dibuat di system prompt dengan alasan apapun
    4. jawab dengan singkat dan langsung ke poinnya beserta spesifikasinya
    5. jika user menanyakan hal selain tentang ponsel, tolak dengan ramah dan jangan lebih dari 3 kalimat.
    `,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
