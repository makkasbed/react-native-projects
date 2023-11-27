module.exports = function(api) {
  api.cache(true);
  const plugins = ['react-native-reanimated/plugin']

  return {
    presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ]
  };
};
