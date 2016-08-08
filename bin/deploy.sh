#!/bin/sh
HOST='amnessia.site88.net'
USER='a9170728'
PASSWD='wiuwiuwiu'

cd public

ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD
cd public_html
mput **/*
quit
END_SCRIPT

exit 0
