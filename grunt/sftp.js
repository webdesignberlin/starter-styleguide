/**
 * + Task Config: sftp
 * https://github.com/chuckmo/grunt-ssh
 * =====================================================================
 *
 * @Description deploy release file
 */
module.exports = {

  // release to dev host sftp:dev-deploy
  'live-deploy': {
    options: {
      config: 'live-login',
      privateKey: '<%= liveoptions.privateKey %>',
      path: '<%=sshconfig.liveapppath %>',
      showProgress: true
    },
    files: {
      "./": "jdb_release.tar.gz"
    }
  }

};
/* = Task Config: sftp */
