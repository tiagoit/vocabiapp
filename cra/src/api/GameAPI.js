import { db } from '../firebase/firebase'

const mapPos = { noun: 'n', verb: 'v', adjective: 'j', adverb: 'r', preposition: 'i', pronoun: 'p', conjunction: 'c' };

export default {
  get: (pos, lvl) => {    
    return db.collection('words')
      .where('pos', '==', mapPos[pos])
      .where('lvl', '==', parseInt(lvl))
      .get();
  }
}