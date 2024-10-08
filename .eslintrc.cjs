module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    // Existing rule: Show this as a warning
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Set other common rules to less intrusive levels
    "no-unused-vars": "warn", // Show unused variables as warnings instead of errors
    "react/prop-types": "off", // Disable prop-types rule for React components
    "no-console": "off", // Disable console log errors

    // Optional: Reduce all warnings to "info" level if you prefer minimal visual disturbance
    "no-debugger": "warn",
    "no-unused-expressions": "warn",

    // Override general rules severity if desired
    "no-undef": "warn", // Warnings for undefined variables
  },
};
