module.exports = {
    options: {
        processors: [
            require('autoprefixer')({browsers: ['last 2 versions']}) // add vendor prefixes
        ]
    },
    dev: {
        options: {
            map: true
        },
        /*src: '<%=globalConfig.dist%>/styles/main.css',
        dest: '<%=globalConfig.dist%>/styles/main.css'*/
        files: {
            '<%=globalConfig.dist%>/styles/main.css': '<%=globalConfig.dist%>/styles/main.css'
        }
    },
    build: {
        options: {
            map: false
        },
        /*src: '<%=globalConfig.dist%>/styles/main.css',
        dest: '<%=globalConfig.dist%>/styles/main.css'*/
        files: {
            '<%=globalConfig.dist%>/styles/main.css': '<%=globalConfig.dist%>/styles/main.css'
        }
    }
};
