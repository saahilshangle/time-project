#!/bin/bash

username="USERNAME"
password="PASSWORD"
echo
curl -u $username:$password --silent "https://mail.google.com/mail/feed/atom" |  grep -oPm1 "(?<=<title>)[^<]+" | sed '1d'
