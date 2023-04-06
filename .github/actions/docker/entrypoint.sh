#!/bin/sh -l

echo "Hello $1"
time=$(date)
echo "time=$time" >>$GITHUB_OUTPUT

# Run below to make the file executable
# git add .github/actions/docker/entrypoint.sh
# olle@SOVRUM:~/GITHOME/actions$ git update-index --chmod=+x .github/actions/docker/entrypoint.sh
