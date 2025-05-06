import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        require: 'readonly', // Allow `require` in Node.js environment
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Add Node.js environment specifically for your configuration files
    files: ['**/webpack.config.js', '**/tailwind.config.js', '**/eslint.config.js'], // Add specific config files here
    languageOptions: {
      env: {
        node: true,  // Node.js environment for config files
        es2021: true, // Support for modern JS
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // Supports ES Modules (import/export)
      },
    },
    rules: {
      // Add custom rules for config files if needed
    },
  },
]
