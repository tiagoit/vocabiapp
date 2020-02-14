#!/usr/bin/env bash

printf '\n\n##########################################################################\n'
printf 'Deleting current build.' 
printf '\n##########################################################################'
rm -rf public/build


printf '\n\n##########################################################################\n'
printf 'Building React APP.' 
printf '\n##########################################################################'
cd cra
npm run build


printf '\n\n##########################################################################\n'
printf 'Move React build to Firebase Hosting public folder.' 
printf '\n##########################################################################'
mv ./build ../public

printf '\n\n##########################################################################\n'
printf 'Deploy hosting including "/public" folder and rewrite rules defined on "firebase.json".' 
printf '\n##########################################################################'
cd ..
firebase deploy --only hosting