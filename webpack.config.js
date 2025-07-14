const path = require('path');

module.exports = (env = {}) => {
  const isDev = env.mode === 'dev' || env.development;

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'custom-components-lib.js',
      library: {
        name: 'CustomComponentsLib',
        type: 'umd',
      },
      globalObject: 'this',
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      '@mui/material': '@mui/material',
      '@emotion/react': '@emotion/react',
      '@emotion/styled': '@emotion/styled',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /\.module\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };
};
