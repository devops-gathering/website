#!/bin/bash

cd ./public

git init
git config user.name "Hugo Builder"
git config user.email "niclas.mietz+hugobuilder@bee42.com"
git remote add upstream "https://${GITHUB_TOKEN}@github.com/devops-gathering/devops-gathering.github.io.git"
git fetch upstream
git reset -q upstream/master

git checkout CNAME

git add -A .
git commit -m "CircleCi build #${CIRCLE_BUILD_NUM} with git commit ${CIRCLE_SHA1}"
git remote show upstream
git push -q upstream HEAD:master
