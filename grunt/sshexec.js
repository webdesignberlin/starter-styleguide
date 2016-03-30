/**
 * + Task Config: sshexec
 * https://github.com/chuckmo/grunt-ssh
 * =====================================================================
 *
 * @Description execute shell commands on host server
 */
module.exports = {

  'live-backup': {
    // delete backup archive and create new one including hidden files (release/.) / delete the complete data folder and create a new empty one
    command: 'cd <%=sshconfig.livehomepath %> && rm jdb_backup.tar.gz --force && tar -czvf jdb_backup.tar.gz <%=sshconfig.liveappfolder %> && rm -rf <%=sshconfig.liveappfolder %> --force && mkdir <%=sshconfig.liveappfolder %>',
    options: '<%=liveoptions %>'
  },
  'live-ls': {
    // list all including hidden files in the release directory
    command: 'cd <%=sshconfig.liveapppath %> && ls -la',
    options: '<%=liveoptions %>'
  },
  'live-unzip': {
    // open archive without creating a folder (--strip 1) and delete the archive after
    command: 'cd <%=sshconfig.liveapppath %> && tar -xvf jdb_release.tar.gz --strip 1 && rm jdb_release.tar.gz',
    options: '<%=liveoptions %>'
  }

};
/* = Task Config: sshexec */