const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// posCodes = {
//   n: 'noun', 2542
//   v: 'verb', 1001
//   j: 'adjective', 839
//   r: 'adverb', 340
//   i: 'preposition', 97
//   p: 'pronoun', 46
//   c: 'conjunction', 38

//   m: 'number', 35
//   d: 'demonstrative', 34
//   u: 'interjection', 13
//   a: 'article', 11
//   x: 'negation', 2
//   e: 'existential', 1
//   t: 'infinitive_marker' 1
// };

const dataLoaded = (err, data) => {
  const dom = new JSDOM(data);
  
  const validPosCodes = ['n', 'v', 'j', 'r', 'i', 'p', 'c'];
  const words = [];
  const wordsPerLevel = {'n': 255, 'v': 100, 'j': 100, 'r': 50, 'i': 50, 'p': 50, 'c': 50 }
  const currentLevel = {};
  const count = {};

  for(let row of dom.window.document.getElementsByTagName('tr')) {
    let cells = row.getElementsByTagName('td');

    // const wid = cells[0].innerHTML;
    const en = cells[1].innerHTML;
    const pos = cells[2].innerHTML;

    count[pos] ? count[pos]++ : count[pos] = 1;
    if(count[pos] % wordsPerLevel[pos] === 0) { // increment level
      currentLevel[pos] ? currentLevel[pos]++ : currentLevel[pos] = 2;
    }
    const l = currentLevel[pos] || 1;
    if(validPosCodes.includes(pos)) {
      if(count[pos] <= 10) words.push({ en, pos, l });
    }
  };
  // console.log(words.filter((w) => w.pos === 'j'));

  fs.writeFileSync('words.json', JSON.stringify(words));
}

fs.readFile('words.html', 'utf8', dataLoaded);