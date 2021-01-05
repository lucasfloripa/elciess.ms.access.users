module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@configs': './src/configs',
        '@entities': './src/entities',
        '@interfaces': './src/interfaces',
        '@middlewares': './src/middlewares',
        '@models': './src/models',
        '@providers': './src/providers',
        '@repositories': './src/repositories',
        '@routes': './src/routes',
        '@useCases': './src/useCases',
        '@utils': './src/utils'
      }
    }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
