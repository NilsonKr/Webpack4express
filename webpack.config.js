const path = require('path');
const nodeExternals = require('webpack-node-externals');

/**
  @type {import('webpack').Configuration}
 */

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	externalsPresets: { node: true },
	externals: [nodeExternals()],
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
			},
		],
	},
};
