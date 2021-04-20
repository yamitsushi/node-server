var nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "production",
	target: "node",
	externals: [nodeExternals()],
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};

// module.exports = {
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     entry: './index.js',
//     output: {
//         filename: 'bundle.js'
//     },
//     module: {
//         rules : [
//             { test: /\.js?/, loader: 'bable-loader', exclude: /node_modules/ }
//         ]
//     }
// }
