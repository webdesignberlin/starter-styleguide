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
    }
};
