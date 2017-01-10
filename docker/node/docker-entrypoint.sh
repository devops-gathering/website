#!/bin/sh
set -e

if [ ! -d node_modules ]; then
	if [ -n "$NPM_INSTALL_BUILD_DEPS" ]; then
		apk add --update --no-cache --virtual buildDeps $NPM_INSTALL_BUILD_DEPS
	fi
	npm install
	if [ -n "$NPM_INSTALL_BUILD_DEPS" ]; then
		rm -r /var/cache/apk  
		apk del buildDeps
	fi
fi

exec "$@"
