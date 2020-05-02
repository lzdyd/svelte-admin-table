module.exports = {
  extends: 'airbnb-base',
  plugins: ['svelte3'],
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
  ],
};
