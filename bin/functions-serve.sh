#!/usr/bin/env bash

# Build React + NextJS APP
./bin/build-app.sh

# Serve Firebase Cloud Functions
cd functions
npm run serve