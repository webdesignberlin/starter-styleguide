# Config data for release

## 1. Rename 'edit_host.json' to 'live_host.json'

- enter host
- enter port
- enter username

## 2. Put id_rsa private key in same folder 

## 3. Adjust release settings

- If required (e.g. new server path setting for release or new environment like dev, stage,...) -adjust the settings in the Gruntfile.js and respectively where in the according task configurations in /grunt (clean.js, compress.js, prompt.js, sftp.js, sshexec.js)

## 4. Deploy a release

- To release to the live server simply type:

```sh
    grunt release
```
