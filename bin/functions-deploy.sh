#!/usr/bin/env bash

# Build React + NextJS APP
./bin/build-app.sh

# Deploy Cloud Functions + Firebase rules and indexes.
cd functions
npm run deploy