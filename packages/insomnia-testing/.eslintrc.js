 const { OFF, TYPESCRIPT_CONVERSION } = require('eslint-config-helpers').rules;

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: '../../.eslintrc.js',
  rules: {
    '@typescript-eslint/no-use-before-define': OFF({ conversion: TYPESCRIPT_CONVERSION }),
  },
};

