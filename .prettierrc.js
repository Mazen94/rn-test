module.exports = {
  semi: true,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrder: [
    "^react",
    "^react$",
    "^react-native$",
    "^redux",
    "^@",
    "^@$",
    "^[a-zA-Z]",
    "^_screens/(.*)$",
    "^_components/(.*)$",
    "^_store/(.*)$",
    "^_navigation/(.*)$",
    "^_hooks/(.*)$",
    "^_models",
    "^_utils/(.*)$",
    "^_enums/(.*)$",
    "_i18n",
    "_languages",
    "^../(.*)$",
    "^./(.*)$"
  ],
  importOrderSeparation: true,
  experimentalBabelParserPluginsList: [
    "jsx",
    "typescript",
    "js",
    "classProperties"
  ],
  importOrderParserPlugins: ["classProperties", "typescript", "jsx"],

};
