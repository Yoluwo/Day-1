//Functions
//Arrow function
//Ctrl K + Q to launch Quokka

const isOdd2 = () => {console.log(1 +2);}
isOdd2()


//find the shortest word in a sentence

function findShort(s) {
    var words = s.split(' ');
    var shortest = words.reduce((shortestWord, curr) => {
    return curr.length < shortestWord.length ? curr : shortestWord;
  }, words[0]);
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

