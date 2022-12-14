module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        /**
         * postcss-pxtorem 配置
         * 详见官方文档
        */
        'postcss-pxtorem': {
            rootValue: 37.5,
            selectorBlackList: [],
            propList: ['*']
        },



    }
}
