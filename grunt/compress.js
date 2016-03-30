/**
 * + Task Config: compress
 * https://github.com/gruntjs/grunt-contrib-compress
 * =====================================================================
 *
 * @Description compress lokal files for release
 */
module.exports = {

    main: {
      options: {
        pretty: true,
        archive: 'jdb_release.tar.gz'
      },
      expand: true,
      src: [
        '<%= globalConfig.dist %>/**',
        '!<%= globalConfig.dist %>/**/*DS_Store'
      ],
      dest: '<%= globalConfig.root %>',
      dot: true
    }

};
/* = Task Config: compress */
