const fs = require('fs');
const admin = require('firebase-admin');
const serviceAccount = require(__dirname + '/../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vocabiapp.firebaseio.com'
});

const db = admin.firestore();
const wordsCollectionRef = db.collection('words');

fs.readFile('./parse-words/words.json', 'utf8', (err, data) => {
  const words = JSON.parse(data);
  for(w of words) {
    wordsCollectionRef.add(w);
  }
});
