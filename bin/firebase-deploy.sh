#!/usr/bin/env bash

# Build React + NextJS APP
./bin/next-build.sh

printf "\n\n\nDeploy Cloud Functions." 
cd functions
firebase deploy --only functions


printf "\n\n\nDeploy hosting including '/public' folder and rewrite rules defined on 'firebase.json'."
cd ..
firebase deploy --only hosting