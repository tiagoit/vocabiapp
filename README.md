# Vocabiapp


## Install
  - Use NodeJS version `lts/dubnium` (v10). Check [nvm](https://github.com/nvm-sh/nvm) to install multiple NodeJS environments.

  - The Next.JS app will be deployed to Firebase Cloud Functions, you will need the npm package `firebase-tools` installed locally. 
  ```
  npm i -g firebase-tools
  ```

  - Install app and functions NPM packages.
  ```
  (cd next && npm i)
  (cd functions && npm i)
  ```

## Serve on localhost
  - NextJS app: 
  ```
  cd next && npm run dev
  ```

  - Cloud Functions with NextJS app:
  ```
  ./bin/functions-serve.sh
  ```

## Deploy
  - Create a Firebase Project.
  - Enable Firestore.
  - Edit default project on `.firebaserc`
  - Set current  `firebase-tools` project:  
  ```
  firebase use <YOUR_PROJECT_ID>
  ```
  - Deploy Cloud Functions with the NextJS build:
  ```
  ./bin/functions-deploy.sh
  ```
