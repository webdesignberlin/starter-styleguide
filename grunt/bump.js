/**
 * + Task Config: Bump
 * https://github.com/vojtajina/grunt-bump
 * =====================================================================
 *
 * @Description config Bump package version, create tag, commit, push ...
 */
module.exports = {

  options: {
    files: [
      'package.json'
    ],
    commit: true,
    commitMessage: '[release] update to v%VERSION%',
    commitFiles: ['package.json'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'origin',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false,
    prereleaseName: false,
    regExp: false
  }

};
/* = Task Config: Clean */
