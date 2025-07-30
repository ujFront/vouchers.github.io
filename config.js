/**
 * Configuration for Urban Jungle Customer Interface
 * Update these values for your deployment
 */

const CONFIG = {
    // Google Apps Script Web App URL
    API_BASE_URL: 'https://script.google.com/a/macros/urbanjungleirc.com/s/AKfycbx8PuMRNkD4V2BarWdGalbUntUtE6YmrW-oGzxWX3xI65XcWJYw0Ne7u2LT68ZaMXbx/exec',
    
    // PayPal Configuration
    PAYPAL: {
        CLIENT_ID: 'AZaTcMnAUIIxeMgMUbRBzmX_Jr1XpwzxNZLuCUWZ51aB6XKyB0iwIw2LnoJwFEkBGMdAxPJTBzM_WJCP', 
        ENVIRONMENT: 'production', // 'sandbox' or 'production'
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
