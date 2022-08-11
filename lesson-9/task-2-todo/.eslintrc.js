module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 2, // 'off' // 'warn' // 'error' => 0 // 1 // 2
    'import/prefer-default-export': 0,
  },
  env: {
    browser: true,
  },
};
