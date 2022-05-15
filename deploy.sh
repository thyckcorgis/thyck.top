#!/bin/sh

[ "$1" = "" ] && echo "USAGE: $0 USERNAME" && exit 1

GIT_USER=$1 USE_SSH=true yarn deploy
