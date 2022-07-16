const path = require('path')

module.exports = {
  'stories': [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5'
  },
  'typescript' : { reactDocgen: false },

  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
      fallback: {
        fs: false,
        path: false,
      },
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  }
}
