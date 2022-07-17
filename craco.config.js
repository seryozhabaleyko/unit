const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@unit/components': path.resolve(__dirname, './src/components'),
            '@unit/modules': path.resolve(__dirname, './src/modules'),
            '@unit/theming': path.resolve(__dirname, './src/theming'),
        },
    },
};
