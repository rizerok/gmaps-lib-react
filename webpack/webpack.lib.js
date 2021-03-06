const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output:{
        library:'gmaps-lib-react',
        libraryTarget:'umd',
        libraryExport: 'default'
    },
    externals: {
        React: 'React'
    },
    devtool:'cheap-eval-source-map',
    plugins:[
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:     path.resolve(),
                verbose:  true
            }
        )
    ]
};