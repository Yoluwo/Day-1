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

//Reduce
function narcissistic(value) {
  if (value <= 0) return false
  let str = `${value}`
  return value === [...str].reduce((acc,curr) => {
    return acc + (+ curr) ** str.length
  },0)
}

console.log(narcissistic(7))
console.log(narcissistic(371))

//Question: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
  
}