module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react/recommended',
        'airbnb',
        'plugin:jsonc/recommended-with-json',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    overrides: [
        {
            files: ['*.json'],
            parser: 'jsonc-eslint-parser',
        },
    ],
    rules: {
        // Enforce consistent indentation
        // https://eslint.org/docs/latest/rules/indent
        indent: ['error', 4],

        // Validate JSX indentation
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['error', 4, { checkAttributes: true }],

        // When there is only a single export from a module,
        // prefer using default export over named export.
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'off',

        // Enforce use of double or single quotes
        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
        'jsonc/quotes': ['error', 'double'],

        // Enforce a convention in module import order
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': ['warn', {
            pathGroups: [
                {
                    pattern: 'react',
                    group: 'builtin',
                    position: 'after',
                },
                {
                    pattern: '@unit/**',
                    group: 'internal',
                    position: 'after',
                },
            ],
            pathGroupsExcludedImportTypes: [],
            groups: ['builtin', 'external', 'parent', 'sibling', 'internal', 'index', 'object'],
            'newlines-between': 'always',
        }],

        // Enforce a specific function type for function components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        'react/function-component-definition': ['error', { namedComponents: ['arrow-function'], unnamedComponents: 'arrow-function' }],

        // only .jsx files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

        // Ensure consistent use of file extension within the import path
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
        'import/extensions': ['error', { ts: 'always', tsx: 'always', json: 'always' }],

        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',

        // Disallow JSX props spreading
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': ['error', {
            html: 'enforce',
            custom: 'ignore',
            explicitSpread: 'ignore',
            exceptions: [],
        }],

        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],
    },
};
