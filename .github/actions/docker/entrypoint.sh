#!/bin/sh -l

echo "Hello $1"
time=$(date)
echo "time=$time" >>$GITHUB_OUTPUT

# Run below to make the file executable
# git add .github/actions/docker/entrypoint.sh
# git update-index --chmod=+x .github/actions/docker/entrypoint.sh
# 
# git ls-files --stage .github/actions/docker/entrypoint.sh
