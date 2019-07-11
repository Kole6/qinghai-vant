// vue cli3.7 config by wangyong
module.exports = {
    publicPath: './', //root
    outputDir: 'dist', //root name
    assetsDir: 'source', //source name
    lintOnSave: false, // close esLint
    productionSourceMap: false, //close SourceMap

    devServer: {
        proxy: {
            '/myjson': {
                target: 'http://118.213.82.198:8084', // 接口域名
                secure: false, // https配置false
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/myjson': '',
                }
            },
        },
        // host: 'localhost',
        port: 9091,
        open: true
    },

    pluginOptions: { // 第三方插件配置
        // 'style-resources-loader': {
        //     preProcessor: 'scss', //声明类型
        //     'patterns': [
        //     ],
        // }
    },

    css: {
        sourceMap: false,
        loaderOptions: {
            sass: {
                data: `@import "@/assets/style/global.scss";`
            }
        }

    }
}