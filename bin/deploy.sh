#!/bin/sh
HOST='amnessia.com.mx'
USER='amnessia'
PASSWD='glFDo93y37'

cd public

ftp -n $HOST <<END_SCRIPT
prompt
quote USER $USER
quote PASS $PASSWD
cd public_html
ascii
mput css/application.css
mput js/main.min.js
mput index.html
binary
mput images/*
mput images/gallery/complete/*
mput images/gallery/thumbs/1x1/*
mput images/gallery/thumbs/1x2/*
mput css/fonts/*
quit
END_SCRIPT

exit 0
