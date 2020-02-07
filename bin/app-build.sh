#!/usr/bin/env bash

# Remove previous build
rm -rf functions/dist

# Build Next.JS APP
cd app
./node_modules/.bin/next build