/* 
  Given an array of strings, return a sum to represent how many times each array item is found (a frequency table).
  Useful methods: Object.hasOwnProperty("keyName") - returns true or false if the object has the key or not; python is dict.has_key(key)
*/

function frequencyTable(arr){
    var freqObj = {}
    for (var i = 0; i < arr.length; i++){
        if (freqObj.hasOwnProperty(arr[i])){
            fareqObj[rr[i]] += 1
        } else {
            freqObj[arr[i]] = 1
        }
    }
    return freqObj
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))  // {"A":2, "B":1, "C":3, "D":2}
console.log(frequencyTable(['A','C','C','C','D','D','A','B',]))  // {"A":2, "B":1, "C":3, "D":2}


/* 
  Reverse Word Order: Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/

function reverseWordOrder1(string){
    var arr = string.split(' ');
    var newString = ''
    for (var i = arr.length - 1; i > 0; i--) {
        newString += arr[i] + ' '
    }
    newString += arr[i]
    return newString
}
console.log(reverseWordOrder1("THIS IS A TEST"))  // "TEST A IS THIS"

// alternate:
function reverseWordOrder2(string){
    var wordArr = string.split(' ')
    var revArr = []
    for(var i = wordArr.length - 1; i >= 0; i--){  // wordArr.length could also be splitter.length
        revArr.push(wordArr[i])
    }
    return revArr.join(' ')
}
console.log(reverseWordOrder2(['this', 'is', 'a', 'test']))  // "TEST A IS THIS"
console.log(reverseWordOrder("THIS IS A TEST"));  // "TEST A IS THIS"

//alternate:
function reverseWordOrder(string){
    newStr = ''
    var arr = string.split(' ');
    console.log(arr);
    arr.reverse()
    console.log(arr)
    newStr = arr.join(" ")
    console.log(newStr);
}
console.log(reverseWordOrder("This is a Test"))  // "TEST A IS THIS"


/* 
  String: Dedupe: Remove duplicate characters - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/

function dedupeString(string){
  var distinct = ""
  var seen = {}
  for (var char of str) {
      if (!seen[char]){
          distinct += char;
      }
      seen[char] = true;
    }
    return distinct;
}
console.log(dedupeString("aabacecbedd"))  // "abced"
console.log(dedupeString("bbbbaaaaffff"))  // "baf"


/* 
  Given a string containing space separated words, reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

function reverseWord(wordsStr) {
  var words = wordsStr.split(" ");
  var wordsReversed = "";

  for (var word of words) {  
    var reversedWord = "";

    for (var i = word.length - 1; i >= 0; --i) {
      reversedWord += word[i];
    }

    // add a space in front of word if it's not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
  }
  return wordsReversed;
}
console.log(reverseWord("HELLO"))  // "OLLEH"
console.log(reverseWord("hello world"))  // "olleh dlrow"
console.log(reverseWord("abc def ghi"))  // "cba fed ihg"

// alternate: group5 has it w/o split


/* 
  String Encode: You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character, then the number of times it appears. 
  If final result is not shorter (such as "bb" => "b2" ), return the original string.
  */

function encode(string){

}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}
// EX. "a3b2c1d3" => "aaabbcddd"


/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateString(string, n){

}
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"


/* 
  Given an array of objects/dictionaries to represent new inventory, and an array of objects/dictionaries to represent current inventory,
  update the quantities of the current inventory. If the item doesn't exist in current inventory, add it to the inventory. 
  Return the current inventory after updating it.
*/

var test1NewInv = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
var test1CurrInv = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
/* 
    Output: [
      { name: "Peanut Butter", quantity: 70 },
      { name: "Grain of Rice", quantity: 90001 },
      { name: "Royal Jelly", quantity: 20 },
    ]
*/