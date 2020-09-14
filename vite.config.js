const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
console.log(resolve('src'))
module.exports = {
    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'style-loader',
        }, {
            loader: 'css-loader', // translates CSS into CommonJS
        }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#f00',
                        'link-color': '#f00',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                }
            },
        }],
    }],
    cssPreprocessOptions: {
        less: {
            modifyVars: {
                'primary-color': '#f00',
                'link-color': '#f00',
                'border-radius-base': '2px',
            },
            javascriptEnabled: true,
        }
    }
}