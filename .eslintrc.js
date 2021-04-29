module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d3b8e57... feat: update git hooks
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
    "prettier",
    "plugin:prettier/recommended",
<<<<<<< HEAD
  ],
=======
=======
    // "prettier",
    // "plugin:prettier/recommended",
>>>>>>> bc446da... add prettier config
=======
>>>>>>> a11a468... feat: remove comments from eslint file
    "plugin:fig-linter/recommended",
  ],
  plugins: ["fig-linter"],
>>>>>>> 4b2d2b1... changed lint from ** to *, renamed fig linter plugin for eslint
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-unused-vars": ["off"],
    "no-var": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
  },
>>>>>>> 65036d2... fixed linting and prettier
=======
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'prettier/prettier': [
            'error',
            {
                // Optional Prettier config changes
                trailingComma: 'es5',
                printWidth: 80,
            },
        ],
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
    },
>>>>>>> d3b8e57... feat: update git hooks
};
