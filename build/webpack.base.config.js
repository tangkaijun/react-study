const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelPolyfill = require('babel-polyfill');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackBaseConfig = {
	entry:{
		main:path.resolve(__dirname,'../src/entry/index.js')
	},
	devServer:{},
	plugins:[
	    new CleanWebpackPlugin([resolve ('dist')]),
	    new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/entry/index.html'),
            filename: 'index.html',
            inject:true,
            hash:false ,
            chunks:["common","main"]
        }),
	    new webpack.DefinePlugin({
	    	 'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
	    }),
	    new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.optimize.OccurrenceOrderPlugin()
	],
	optimization:{
		splitChunks:{
			name:'common',
			filename:'[name]-[hash].js'
		}
	},
	output:{
		filename:'[name]-[hash].js',
		path:resolve ('dist')//,
		//publicPath:ASSET_PATH
	},
	resolve:{
	        extensions: ['.js','jsx','less','.vue', '.json'],
	        alias: {
		      '@': resolve('src'),
		      'modules':resolve('node_modules')
		    }
	},
	module:{
		rules:[
			 {
                test: /(\.js)|(\.jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
               test: /\.less$/,//正则匹配拓展名为···的文件
               include: resolve('src/assets/style'),//需要被加载文件的路径
               loader: 'style-loader!css-loader!less-loader'
            }
		]
	}
};

module.exports=webpackBaseConfig;