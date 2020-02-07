#!/usr/bin/env bash

if [ -d "functions/dist" ]; then
  printf "\n\n\nRemoving previous build stored on 'functions/dist'."
  printf '\n##########################################################################\n'
  rm -rf functions/dist --verbose 
fi

printf "\n\n\nBuilding NextJS APP."
printf '\n##########################################################################\n'
cd next
./node_modules/.bin/next build

printf "\n\n\nMoving the build directory to the 'functions/dist' folder." 
printf '\n##########################################################################\n'
mv ./.next ../functions/dist --verbose