module.exports = {
    webpack: function override(config) {
        config.module.rules = [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            ...config.module.rules,
        ];

        return config;
    },
};
