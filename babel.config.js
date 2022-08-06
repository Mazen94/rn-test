module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            _env: './src/config/env',
            _languages: './src/locales/languages',
            _i18n: './src/locales/i18n',
            _components: './src/components/',
            _models: './src/models/',
            _enums: './src/enums/',
            _screens: './src/screens/',
            _utils: './src/utils/',
            _store: './src/store/',
            _navigation: './src/navigation',
            _hooks: './src/hooks/',
          },
        },
      ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
  };
};
