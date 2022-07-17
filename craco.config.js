const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@unit/components': path.resolve(__dirname, './src/components'),
            '@unit/icons': path.resolve(__dirname, './src/icons'),
            '@unit/modules': path.resolve(__dirname, './src/modules'),
            '@unit/theming': path.resolve(__dirname, './src/theming'),
        },
    },
};
