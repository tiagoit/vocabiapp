#!/usr/bin/env bash

# Build React + NextJS APP
./bin/next-build.sh

printf "\n\n\nServing Firebase Cloud Functions and Firebase Hosting." 
printf '\n##########################################################################\n'
firebase serve