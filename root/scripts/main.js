// 20 String methods //

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = " forntend and backend development";

// #1 charAt()
console.log(stringOne.charAt(0));

// #2 charCodeAt()
console.log(stringOne.charCodeAt(1));

// #3 concat()
console.log(stringOne.concat(stringTwo));

// #4 endsWith()
console.log(stringOne.endsWith('learn'));

// #5 fromCharCode()
console.log(String.fromCharCode(114));

// #6 includes()
console.log(stringOne.includes("end"));


// #7 indexOf()

console.log(stringOne.indexOf("end"));

//  #8 lastIndexOf()

console.log(stringOne.lastIndexOf("end"));

//  #9 match()

console.log(stringOne.match(/end/g));

//  #10 repeat()

console.log(stringOne.repeat(3));

//  #11 replace()

console.log(stringOne.replace(/end/g, END));


//  #12 search()

console.log(stringOne.search("end"));

//  #13 slice()

console.log(stringOne.slice(2,4));

//  #14 split()

console.log(stringOne.split(" "));

//  #15 startsWith()

console.log(stringOne.startsWith('free'));

//  #16 substr()

console.log(stringOne.substr(2,4));

//  #17 substring()

console.log(stringOne.substring(2,4));

//  #18 toLowerCase()

console.log(stringOne.toLowerCase());

// #19 toUpperCase()

console.log(stringOne.toUpperCase());

// #20 trim()

console.log(stringThree.trim());

var stringThree = "       costam costam    ";
console.log(stringThree.trim());



