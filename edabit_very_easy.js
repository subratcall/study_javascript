// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Very Easy:

console.log(`
Challenges 
JavaScript 
Very Easy
`);

// How Edabit Works
// https://edabit.com/challenge/ARr5tA458o2tC9FTN

function hello() {
	return "hello edabit.com";
}
console.log(hello()); // expected output: hello edabit.com


console.log(`--------------------------------------------`);


// Return the Sum of Two Numbers
// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j

function addition(a, b) {
	return a + b;
}
console.log(addition(2, 2)); // expected output: 4


console.log(`--------------------------------------------`);


// Return the Next Number from the Integer Passed
// https://edabit.com/challenge/NAQhEoxbofPidLxm9

function addition2(num) {
	return num + 1;
}
console.log(addition2(1));  // expected output: 2
console.log(addition2(-1)); // expected output: 0


console.log(`--------------------------------------------`);


// Using the "&&" Operator
// https://edabit.com/challenge/vJCZmgvvDjehyDcDK

function and(a, b) {
	if (a === true && b === true){
        return true;
    } else {
        return false;
    }
}
console.log(and(true, true));  // expected output: true
console.log(and(false, true)); // expected output: false


console.log(`--------------------------------------------`);


// Correct the Mistakes
// https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i

function squared(b) {
	return b * b;
}
console.log(squared(5));   // expected output: 25
console.log(squared(9));   // expected output: 81
console.log(squared(100)); // expected output: 10000


console.log(`--------------------------------------------`);


// Return the Remainder from Two Numbers
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function remainder(x, y) {
	return x % y;
}
console.log(remainder(1, 3));   // expected output:  1
console.log(remainder(3, 4));   // expected output:  3
console.log(remainder(7, 10));  // expected output:  7
console.log(remainder(-4, 2));  // expected output: -0
console.log(remainder(-12, 5)); // expected output: -2


console.log(`--------------------------------------------`);


// Football Points
// https://edabit.com/challenge/GwvwXHWCThHZrR7xu

function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1) + (losses * 0);
}
console.log(footballPoints(3, 4, 2)); // expected output: 13
console.log(footballPoints(5, 0, 2)); // expected output: 15
console.log(footballPoints(0, 0, 1)); // expected output: 0


console.log(`--------------------------------------------`);


// Are the Numbers Equal?
// https://edabit.com/challenge/QSnaSH5S3oxZkwcNc

function isSameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameNum(4, 8));   // expected output: false
console.log(isSameNum(2, 2));   // expected output: true
console.log(isSameNum(2, "2")); // expected output: false


console.log(`--------------------------------------------`);


// Area of a Triangle
// https://edabit.com/challenge/3CaszbdZYGN4otQD8

function triArea (base, height) {
    return (base * height) / 2;
}
console.log(triArea(3, 2));   // expected output: 3
console.log(triArea(7, 4));   // expected output: 14
console.log(triArea(10, 10)); // expected output: 50


console.log(`--------------------------------------------`);


// Convert Minutes into Seconds
// https://edabit.com/challenge/8q54MKnRrm89pSLmW

function convert(minutes) {
    return minutes * 60;
}
console.log(convert(5)); // expected output: 300
console.log(convert(3)); // expected output: 180
console.log(convert(2)); // expected output: 120


console.log(`--------------------------------------------`);


// Less Than 100?
// https://edabit.com/challenge/9MjEpkL7yAjAqiH58

function lessThan100(a, b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(22, 15)); // expected output: true
console.log(lessThan100(83, 34)); // expected output: false


console.log(`--------------------------------------------`);


// Is the Number Less than or Equal to Zero?
// https://edabit.com/challenge/PTiLYyb4A69KZtBCg

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));  // expected output: false
console.log(lessThanOrEqualToZero(0));  // expected output: true
console.log(lessThanOrEqualToZero(-2)); // expected output: true


console.log(`--------------------------------------------`);


// Equality Check
// https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3

function checkEquality(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(1, true)); // expected output: false
console.log(checkEquality(0, "0"));  // expected output: false
console.log(checkEquality(1, 1));    // expected output: true


console.log(`--------------------------------------------`);


// Find the Perimeter of a Rectangle
// https://edabit.com/challenge/XnJ24rWW7iJkNrtsh

function findPerimeter(length, width) {
    return (length + width) * 2;
}
console.log(findPerimeter(6, 7));   // expected output: 26
console.log(findPerimeter(20, 10)); // expected output: 30
console.log(findPerimeter(2, 9));   // expected output: 22


console.log(`--------------------------------------------`);


// Return the First Element in an Array
// https://edabit.com/challenge/QaApgtePE6QrCZ64o

function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));     // expected output:    1
console.log(getFirstValue([80, 5, 100]));  // expected output:   80
console.log(getFirstValue([-500, 0, 50])); // expected output: -500


console.log(`--------------------------------------------`);


// Return Something to Me!
// https://edabit.com/challenge/MvZK536X7fyrWH8Qc

function giveMeSomething(a) {
    return `something ${a}`;
}
console.log(giveMeSomething("is better than nothing")); // expected output: "something is better than nothing"
console.log(giveMeSomething("Bob Jane"));               // expected output: "something Bob Jane"
console.log(giveMeSomething("something") );             // expected output: "something something"


console.log(`--------------------------------------------`);


// Compare Strings by Count of Characters
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4

function comp(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(comp("AB", "CD"));        // expected output: true
console.log(comp("ABC", "DE"));       // expected output: false
console.log(comp("hello", "edabit")); // expected output: false


console.log(`--------------------------------------------`);


// Maximum Edge of a Triangle
// https://edabit.com/challenge/nhXofMMyrowMyr9Nv

function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10)); // expected output: 17
console.log(nextEdge(5, 7));  // expected output: 11
console.log(nextEdge(9, 2));  // expected output: 10


console.log(`--------------------------------------------`);


// Convert Hours and Minutes into Seconds
// https://edabit.com/challenge/JesaFi5ntBEbGT8bu

function convert(hours, minutes) {
    return ((hours * 60) + minutes) * 60;
}
console.log(convert(1, 3)); // expected output: 3780
console.log(convert(2, 0)); // expected output: 7200
console.log(convert(0, 0)); // expected output: 0


console.log(`--------------------------------------------`);


// Convert Hours into Seconds
// https://edabit.com/challenge/6AnQqiEjkJdZrWhPS

function howManySeconds(hours) {
    return (hours * 60) * 60;
}
console.log(howManySeconds(2));  // expected output: 7200
console.log(howManySeconds(10)); // expected output: 36000
console.log(howManySeconds(24)); // expected output: 86400


console.log(`--------------------------------------------`);


// Return a String as an Integer
// https://edabit.com/challenge/rGsgEswWuW339yNxY

function stringInt(str) {
    return parseInt(str);
}
console.log(stringInt("6"));    // expected output: 6
console.log(stringInt("1000")); // expected output: 1000
console.log(stringInt("12"));   // expected output: 12


console.log(`--------------------------------------------`);


// Recursion: Length of a String
// https://edabit.com/challenge/4MSbtYFBiRtxHEkY8

function length(str) {
    return str.length;
}
console.log(length("apple")); // expected output: 5
console.log(length("make"));  // expected output: 4
console.log(length("a"));     // expected output: 1
console.log(length(""));      // expected output: 0


console.log(`--------------------------------------------`);


// Movie Theatre Admittance
// https://edabit.com/challenge/fP7gFvDaBymoZrXFx

function acceptIntoMovie(age, isSupervised) {
    if (age < 15 && isSupervised == true) {
        return true;
    } else if (age >= 15) {
        return true;
    } else {
        return false;
    }
}
console.log(acceptIntoMovie(14, true));  // expected output: true
console.log(acceptIntoMovie(14, false)); // expected output: false
console.log(acceptIntoMovie(16, false)); // expected output: true
console.log(acceptIntoMovie(16, true));  // expected output: true
console.log(acceptIntoMovie(15, true));  // expected output: true
console.log(acceptIntoMovie(15, false)); // expected output: true


console.log(`--------------------------------------------`);


// Divides Evenly
// https://edabit.com/challenge/JfB9mWmbwYHbupxCB

function dividesEvenly(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(dividesEvenly(98, 7)); // expected output: true
console.log(dividesEvenly(85, 4)); // expected output: false


console.log(`--------------------------------------------`);


// Evaluate an Equation
// https://edabit.com/challenge/n2bFd2enCnHJkTwsK

function eq(evaluate) {
    return eval(evaluate);
}
console.log(eq("1+2"));     // expected output: 3
console.log(eq("6/(9-7)")); // expected output: 3
console.log(eq("3+2-4"));   // expected output: 1
// Warning: Executing JavaScript from a string is an enormous security risk. 
// It is far too easy for a bad actor to run arbitrary code when you use eval(). 
// See Never use eval()!, below.


console.log(`--------------------------------------------`);


// Solve the Equation
// https://edabit.com/challenge/X6PDfNfJwcB4TkQuQ

function equation(s) {
    return eval(s);
}
console.log(equation("1+1"));       // expected output: 2
console.log(equation("7*4-2"));     // expected output: 26
console.log(equation("1+1+1+1+1")); // expected output: 5


console.log(`--------------------------------------------`);


// Is the String Empty?
// https://edabit.com/challenge/EzbfiquDoAc2Zc9FL

function isEmpty(s) {
    if (s.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(""));  // expected output: true
console.log(isEmpty(" ")); // expected output: false
console.log(isEmpty("a")); // expected output: false


console.log(`--------------------------------------------`);


// The Farm Problem
// https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}
console.log(animals(2, 3, 5)); // expected output: 36
console.log(animals(1, 2, 3)); // expected output: 22
console.log(animals(5, 2, 8)); // expected output: 50


console.log(`--------------------------------------------`);


// Check if an Integer is Divisible By Five
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn

function divisibleByFive(n) {
    if (n % 5 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divisibleByFive(5));   // expected output: true
console.log(divisibleByFive(-55)); // expected output: true
console.log(divisibleByFive(37));  // expected output: false


console.log(`--------------------------------------------`);


console.log(`
Minimal I: If Boolean Then Boolean
`);
// Instructions:
// Published by Thomas Sandell
// In this series we're going to see common redundancies 
// and superfluities that make our code unnecessarily complicated and less readable, 
// and we're going to learn how to avoid them.
// 
// In line with the spirit of the series, 
// we can summarize the general rules of minimalist code in two simple principles:
// 
// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.
// 
// In order to achieve this you should:
// 
// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. 
// Make a habit of checking the Solutions tab after solving a challenge on Edabit. 
// There is absolutely nothing wrong in assimilating features of someone else's coding style, 
// especially if yours is not yet fully developed.
// 
// Goal
// In the Code tab you will find a code that is missing a single character in order to pass the tests. 
// However, YOUR GOAL is to submit a function as minimalist as possible. 
// Use the tips in the Tips section down below.
// 
// Write a function that returns true if the given integer is even, and false if it's odd.
// 
// ******************************************************************************************************
//
// Tips
//
// "Using an if statement" in order to "return boolean" or to "set a variable to a boolean" is redundant.
//
// ******************************************************************************************************
// 
// A function that returns true if a person's age is 18 or greater and false otherwise, 
// could be written as:
// 
// function legalAge(age) {
//     if (age >= 18) {
//       return true
//     }
//     else {
//       return false
//     }
// }
// 
// Notice that age >= 18 will already give us a boolean (true or false). 
// This means that the function can be written in a much simpler and cleaner way:
// 
// function legalAge(age) {
//     return age >= 18
// }

// Code:
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else if (n % 2 == 1) {
        return false;
    }
}
console.log(isEven(1)); // expected output: false
console.log(isEven(2)); // expected output: true
console.log(isEven(3)); // expected output: false
console.log(`
or
`);
function isEven2(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven2(1)); // expected output: false
console.log(isEven2(2)); // expected output: true
console.log(isEven2(3)); // expected output: false
console.log(isEven2(4)); // expected output: true
console.log(`
or
`);
function isEven3(n) {
    return n % 2 == 0;
}
console.log(isEven3(1)); // expected output: false
console.log(isEven3(2)); // expected output: true
console.log(isEven3(3)); // expected output: false
console.log(isEven2(4)); // expected output: true
console.log(isEven3(5)); // expected output: false


console.log(`--------------------------------------------`);


// Drinks Allowed?
// https://edabit.com/challenge/PwpJNJiysvq3AuYJ8

function shouldServeDrinks(age, onBreak) {
    return age >= 18 && onBreak == false;
}
console.log(shouldServeDrinks(17, true));  // expected output: false
console.log(shouldServeDrinks(19, false)); // expected output: true
console.log(shouldServeDrinks(30, true));  // expected output: false


console.log(`--------------------------------------------`);


// Convert Age to Days
// https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw

function calcAge(age) {
    return age * 365;
}
console.log(calcAge(65)); // expected output: 23725
console.log(calcAge(0));  // expected output: 0
console.log(calcAge(20)); // expected output: 7300


console.log(`--------------------------------------------`);


// Buggy Code (Part 1)
// https://edabit.com/challenge/j7yQbF3J3rToHsDBP

// Fix the code below to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do.
//
// Examples:
// cubes(3)  ➞ 27
// cubes(5)  ➞ 125
// cubes(10) ➞ 1000
//
// Notes:
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
//
// Code:
// function cubes(a) {
//  retunr a ** 3
// }

function cubes(a) {
    return a ** 3;
}
console.log(cubes(3));  // expected output: 27
console.log(cubes(5));  // expected output: 125
console.log(cubes(10)); // expected output: 1000


console.log(`--------------------------------------------`);


// Word without First Character
// https://edabit.com/challenge/Me4pMDq7yX2XzHiYc

function newWord(str) {
    return str.slice(1);
}
console.log(newWord("apple"));  // expected output: "pple"
console.log(newWord("cherry")); // expected output: "herry"
console.log(newWord("plum"));   // expected output: "lum"

console.log(`--------------------------------------------`);


// Alphabet Soup
// https://edabit.com/challenge/bHDbMWpdeNaw23jqT

function alphabetSoup(str) {
    return str.split("").sort().join("").toString();
}
console.log(alphabetSoup("hello"));      // expected output: "ehllo"
console.log(alphabetSoup("edabit"));     // expected output: "abdeit"
console.log(alphabetSoup("hacker"));     // expected output: "acehkr"
console.log(alphabetSoup("geek"));       // expected output: "eegk"
console.log(alphabetSoup("javascript")); // expected output: "aacijprstv"


console.log(`--------------------------------------------`);


// Letters Only
// https://edabit.com/challenge/GPKkNbytRpsAnHcrX

function lettersOnly(str) {
    return str.replace(/[^A-Za-z]/g, "");
}
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));     // expected output: "Rocky"
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")); // expected output: "Bambi"
console.log(lettersOnly("^U)6$22>8p)."));             // expected output: "Up"

console.log(`--------------------------------------------`);


// 


console.log(`--------------------------------------------`);


// 


console.log(`--------------------------------------------`);


// 