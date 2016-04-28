module.exports = {
    options: {
        processors: [
            require('autoprefixer')({browsers: ['last 2 versions']}) // add vendor prefixes
        ]
    },
    sg: {
        options: {
            map: true
        },
        files: {
            '<%= globalConfig.dist %>/styleguide/styles/styleguide.css' : '<%= globalConfig.dist %>/styleguide/styles/styleguide.css'
        }
    },
    dev: {
        options: {
            map: true
        },
        files: {
            '<%= globalConfig.dist %>/styles/main.css' : '<%= globalConfig.dist %>/styles/main.css'
        }
    },
    prod: {
        options: {
            map: false
        },
        files: {
            '<%= globalConfig.dist %>/styles/main.css' : '<%= globalConfig.dist %>/styles/main.css'
        }
    }

};
