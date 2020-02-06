#!/usr/bin/env bash

# Build Next.JS React APP.
cd app
npm run build

# Deploy Cloud Functions + Firebase rules and indexes.
cd ../functions
npm run deploy