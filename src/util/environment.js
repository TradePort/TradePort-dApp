const ENV = {
    PRODUCTION: 'production',
    STAGING: 'staging',
    PROD: {
        GOOGLE_ANALYTICS: '',
        URL: ''
    },
    STAGE: {
        GOOGLE_ANALYTICS: '',
        URL: ''
    },
    getNodeEnv: () => process.env.NODE_ENV
};

export default ENV;
