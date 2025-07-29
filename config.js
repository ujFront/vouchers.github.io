/**
 * Configuration for Urban Jungle Customer Interface
 * Update these values for your deployment
 */

const CONFIG = {
    // Google Apps Script Web App URL
    // Replace YOUR_SCRIPT_ID with your actual Google Apps Script ID
    API_BASE_URL: 'https://script.google.com/a/macros/urbanjungleirc.com/s/AKfycbwqc2i63xHvOyvCdoZuJGNfSCxk9SPmo5khUEGj8WoLL9EdwKfbzpdXs2KZn0sSs8s/exec',
    
    // PayPal Configuration
    // For sandbox testing, use sandbox client ID and environment
    // For production, use live client ID and environment
    PAYPAL: {
        CLIENT_ID: 'Adso4sTVWJuYY1cSvqhhtzgX14KG5vKtESOkv1cptmHOBcNd6jtCKrFE2VPKr66f8pUaVmuBVhYP_Yau', // Replace with your sandbox Client ID
        ENVIRONMENT: 'sandbox', // 'sandbox' or 'production'
        CURRENCY: 'AUD'
    },
    
    // Analytics Configuration
    ANALYTICS: {
        // Google Tag Manager ID
        GTM_ID: 'GTM-XXXXXXX',
        
        // Google Analytics 4 Measurement ID
        GA4_ID: 'G-XXXXXXXXXX',
        
        // Facebook Pixel ID
        FB_PIXEL_ID: 'XXXXXXXXXXXXXXX'
    },
    
    // Company Information
    COMPANY: {
        NAME: 'Urban Jungle Indoor Rock Climbing',
        PHONE: '(08) 6397 0411',
        EMAIL: 'admin@urbanjungleirc.com',
        ADDRESS: '83 Solomon Rd, Jandakot WA 6164',
        WEBSITE: 'https://urbanjungleirc.com'
    },
    
    // Social Media Links
    SOCIAL: {
        FACEBOOK: 'https://www.facebook.com/UrbanJungleIRC',
        INSTAGRAM: 'https://www.instagram.com/urbanjungleirc',
        YOUTUBE: 'https://www.youtube.com/@urbanjungleirc'
    },
    
    // Feature Flags
    FEATURES: {
        ENABLE_ANALYTICS: true,
        ENABLE_FACEBOOK_PIXEL: true,
        ENABLE_LIVE_CHAT: false,
        ENABLE_DISCOUNT_CODES: true,
        ENABLE_GIFT_MESSAGES: true
    },
    
    // UI Configuration
    UI: {
        THEME_COLOR: '#e74c3c',
        LOADING_TIMEOUT: 10000, // 10 seconds
        FORM_VALIDATION_DELAY: 500 // 500ms
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
