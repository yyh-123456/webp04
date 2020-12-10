const path = require('path')
module.exports = {
    mode: "production",
    entry: {
        // index: './src/index.js',
        product: "./src/product.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        // filename: "index.js"
        filename: "[name].js"
    },
    module: {
        //解析规则
        rules: [{
                test: /\.css$/, //匹配规则
                use: [ //表示匹配到的文件需要哪些loader来处理
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },

            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            // {
            //     test: /\.(jpg|pnf|gif|webp|jpeg)$/,
            //     use: [
            //         { loader: 'file-loader' }
            //     ]
            // }
            {
                test: /\.(jpg|png|gif|webp|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400 //单位byte 图片小于100k的时候转化base64
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, //排除里面的两个文件夹
                use: [{
                    loader: 'babel-loader', //用bable-loader处理
                    options: {
                        presets: ['env'] //预设es6转化
                    }
                }]
            }
        ]
    }

}