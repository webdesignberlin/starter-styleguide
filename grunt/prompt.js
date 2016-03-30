/**
 * + Task Config: Prompt
 * https://github.com/dylang/grunt-prompt
 * =====================================================================
 *
 * @Description prompt before release
 */
module.exports = function(grunt, options){

  var semver = require('semver');
  var currentVersion = require('../package.json').version;

  return {
    release: {
      options: {
        questions: [
          {
            config:  'bump.increment',
            type:    'list',
            default: '',
            message: 'Bump version from ' + currentVersion.green + ' to:',
            choices: [
              {
                value: 'patch',
                name:  'Patch: ' + semver.inc(currentVersion, 'patch').yellow + '   Backwards-compatible bug fixes.'
              },
              {
                value: 'minor',
                name:  'Minor: ' + semver.inc(currentVersion, 'minor').yellow + '   Add functionality in a backwards-compatible manner.'
              },
              {
                value: 'major',
                name:  'Major: ' + semver.inc(currentVersion, 'major').yellow + '   Incompatible API changes.'
              },
              {
                value: '',
                name:  "No bumping."
              }
            ]
          },
          {
            config:   'release.options',
            type:     'list',
            message:  'Release this version to: ',
            choices: [
              {
                value:  'live',
                name:   'Live'.yellow + ' - server at <%=sshconfig.liveapppath %> ?'
              }
            ]
          },
          {
            config:  'confirm.options',
            type:    'confirm',
            message: 'Are you sure you want to release ?',
            default: true
          }

        ],
        then: function(results, done) {

          // do bump and release only if conformation is yes
          if (results['confirm.options']) {

            if (results['bump.increment'] !== '') {
              grunt.task.run([
                'bump:' + results['bump.increment']
              ]);
            }

            if (results['release.options'] === 'live') {
              console.log('...releasing to live');
              grunt.task.run([
                'clean:release',
                'compress',
                'sshexec:live-backup',
                'sftp:live-deploy',
                'sshexec:live-unzip',
                'sshexec:live-ls'
              ]);
              return;
            }
          } else {
            console.log('Aborted by user...');
            return;
          }

        }
      }
    }
  }
};

/* = Task Config: Prompt */
