module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:fig/recommended',
    ],
    plugins: ['fig'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        // 'no-console': 2,
    },
=======
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
=======
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "prettier/prettier": [
      "error",
      {
        // Optional Prettier config changes
        trailingComma: "es5",
        printWidth: 80,
      },
    ],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
  },
>>>>>>> 65036d2... fixed linting and prettier
};
