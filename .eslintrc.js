module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'double'],
        semi: ['error', 'always'],
        'no-console': "off"

    },
    globals: {
        module: true,
        require: true,
        __dirname: true
    }
}
