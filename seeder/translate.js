const https = require('https');
const admin = require('firebase-admin');
const serviceAccount = require(__dirname + '/../service-account.json');

const TARGET_LANG = 'es';
const API_KEY = 'AIzaSyDSAl1pNQm2XOOrRrXSHcV0omANfnDTyFU';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vocabiapp.firebaseio.com'
});

const db = admin.firestore();
const wordsCollectionRef = db.collection('words');

const translateWord = (word, docId) => {
  let url = `https://www.googleapis.com/language/translate/v2?key=${API_KEY}&source=en&target=${TARGET_LANG}&q=${word}`;
  https.get(url, res => {
    let payload = '';
    res.setEncoding('utf8');
    res.on('data', chunk => payload += chunk);
    res.on('end', () => {
      const t = JSON.parse(payload).data.translations;
      if(!t.length) return console.log("ERROR: ", {word});
      const translatedWord = t[0].translatedText.toLowerCase()
      wordsCollectionRef.doc(docId).update({[TARGET_LANG]: translatedWord})
    });
  });
}

wordsCollectionRef.get().then((snapshot) => {
  snapshot.forEach(doc => translateWord(doc.data().en, doc.id));
});
