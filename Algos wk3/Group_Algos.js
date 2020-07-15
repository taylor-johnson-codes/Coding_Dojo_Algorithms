//////////////////////////////////////////  MONDAY   //////////////////////////////////////////


// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD

function acronyms(string){
    var acronym = ''  // to be able to return the letters as one string
    var words = string.split(' ')  // returns an array of strings
    for (var i = 0; i < words.length; i++){
        acronym += words[i][0]
    }
    console.log(words)  // ["Live", "From", "Saturday", "Night", "Live"]
    return acronym
}
console.log(acronyms("Live From Saturday Night Live"))  // "LFSNL"


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

function stringReverse(string){
    var newStr = ''
    for (var i = string.length-1; i >= 0; i--){
        newStr += string[i]
    }
    return newStr
}
console.log(stringReverse("HELLO"))  // "OLLEH"


// the following doesn't work because strings are immutable
function stringReverse(string){
    for (var i = 0; i < string.length/2; i++){
        var temp = string[i]
        string[i] = string[string.length-1-i]
        string[string.length-1-i] = temp
    }
}
console.log(stringReverse("HELLO"))


//////////////////////////////////////////  TUESDAY   //////////////////////////////////////////


// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES

function parensValidCounter(string){
    let counter = 0;
    for(char of string){
        if(char ==="("){
            counter++
        }
        else{
            counter--
        }
        if(counter < 0) return false
    }
    if(counter == 0) return true
}
console.log(parensValidCounter("()()()"))
console.log(parensValidCounter("()(())"))
console.log(parensValidCounter("(()()"))
console.log(parensValidCounter("())(()"))

// -----------------------------------------------------------------------------------------------//

// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION

function bracesValid(string){
    var arr = []
    for (var i = 0; i<string.length; i++){
        if (string[i] == "(" || "{" || "["){
            arr.push(string[i])
        }
        else if (string[i] == ")" || "}" || "]"){
            arr.pop()
        }
    }
    if (arr.length !== 0){
        return false
    }
    else {
        return true
    }
}
// need to test it


//////////////////////////////////////////  WEDNESDAY   //////////////////////////////////////////


// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE

function isPalindrome(string){
    for(let i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] == string[string.length-1-i]){
            continue
        }
        else{
            return false
        }
    }
    return true
}
console.log(isPalindrome('madam'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('abba'))
console.log(isPalindrome('someone'))

// -----------------------------------------------------------------------------------------------//

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// HINT: YOU WANT TO USE A DICTIONARY

function isAnagram(string1, string2){
    dict1 = {}
    if(string1.length != string2.length){
        return false
    }
    for(let i = 0; i < string1.length; i++){
        if(string1[i] in dict1){
            dict1[string1[i]] += 1
        }
        else{
            dict1[string1[i]] = 1
        }
    }
    for(let j = 0; j < string2.length; j++){
        if(string2[j] in dict1){
            dict1[string2[j]] -= 1
            if(dict1[string2[j]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}
// need to test


// without dictionary:
function isAnagram(string1, string2){
    var str1arr = string1.split("")  // more memory
    var str2arr = string2.split("")
    var count = 0
    
    for (var i=0; i<str1arr.length; i++){
        for (var j=0; j<str2arr.length; j++){  // less efficient
            if (str2arr[j]==str1arr[i]){
                count ++
            }
        }
    }
    if (count != string2.length){
        return false
    }
    else {
        return true
    }
}
// need to test

// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE


//////////////////////////////////////////  THURSDAY   //////////////////////////////////////////


// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"

function bookIndex(array){
    var str = '';
    for (var i = 0; i < array.length; i++) {
        var start = array[i];
        str += start;
        while (array[i+1] - array[i] === 1) {
            i++;
        }
        if (array[i] !== start) {
            str += `-${array[i]}`;
        }
        if (i < array.length - 1) {
            str += ', ';
        }
    }
    return str;
}

// -----------------------------------------------------------------------------------------------//

// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

function join(arr, separator) {
    let joined = "";
    if (!arr.length) {
        return joined;
    }
    // less than arr.length - 1 to stop before last
    for (let i = 0; i < arr.length - 1; i++) {
        joined += arr[i] + separator;
    }
    return joined + arr[arr.length - 1];
}
join([1,2,3] , ", ")


//////////////////////////////////////////  FRIDAY   //////////////////////////////////////////


// GIVEN AN OBJECT WITH KEY VALUE PAIRS, SWAP THE KEYS AND VALUES OF THE OBJECT
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }

function invertObj(obj){
    var newobj = {}
    for (var key in obj) {
        obj[obj[key]] = key
        // delete key
    }
    return newobj
}

//alternate in-place:
function invertObj2(obj){
    for (var key in obj) {
        obj[obj[key]] = key
        delete obj[key]
    }
    return obj
}



// -----------------------------------------------------------------------------------------------//

// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"

function coinChange(num){
    coinObj = {
        'quarter' : 0,
        'dime' : 0,
        'nickel' : 0,
        'penny' : 0
    }
    coinObj['quarter'] = Math.floor(num / 25)
    num = num % 25
    coinObj['dime'] = Math.floor(num / 10)
    num = num % 10
    coinObj['nickel'] = Math.floor(num / 5)
    num = num % 5
    coinObj['penny'] = num 
    console.log(coinObj)
}

// alternate:

function minCoinChange(num){
    let change = {};
    change['quarter'] = Math.floor(num / 25);
    num -= change['quarter'] * 25;
    change['dime'] = Math.floor(num / 10);
    num -= change['dime'] * 10;
    change['nickel'] = Math.floor(num / 5);
    num -= change['nickel'] * 5;
    change['penny'] = num;
    return change;