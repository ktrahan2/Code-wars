// //8.28.2020 Solution "Get the mean of an array"
// function getAverage(marks){
//     let average = marks.reduce((total, grade) => total + grade) / marks.length
//     return Math.floor(average)
//   }

// //8.28.2020 Solution 2 "if/else syntax debug"
// function checkAlive (health) {
//     if (health <= 0) {
//       return false
//     } else {
//       return true
//     }
//   }

// //9.7.2020 Solution "Can we divide it?"
// function isDivideBy(number, a, b) {
//   return [a, b].every(i => number % i === 0)
// }


// //9.8.2020 Solution "simple equation reversal"
// function solve(eq){
//   return eq.split(/([*\+\-\/])/).reverse().join('');
// }

// //9.14.2020 SOlution "N-th power"
// function index(array, n){
//   let number = array[n]
//   if (array.length <= n) {
//     return -1
//   }
//   else {
//     return number**n
//   }
// }

// //9.15.2020 Solution "Debug sayHello"
// function sayHello(name) {
//   return `Hello, ${name}`
// }

// //9.15.2020 Solution "Grasshopper - Debug"
// function weatherInfo (temp) {
//   var c = convertToCelsius(temp)
//   if (c <= 0) {
//     return (c + " is freezing temperature")
//   } else {
//     return (c + " is above freezing temperature")
//   }
// }
// function convertToCelsius (temperature) {
//   var celsius = (temperature - 32) * (5/9)
//   return celsius
// }

// //9.16.2020 Solution "Hungarian Vowel Harmoney"
// function dative(word) {
//   return (/[aáoóuú]/.test(word)) ? word + "nak" : word + "nek";
// }

// //10.5.2020 Solution "Array Element Parity"
// function solve(arr) {
//   for (var i = 0; i < arr.length; i++)
//     if (!arr.includes(-1 * arr[i])) return arr[i];
// }

// //10.9.2020 Solution "dejonnify"
// function decodeMsg(message) {
//   let mapped = message.split('jon')
//     .map(string => {
//       return String.fromCharCode(parseInt(string, 2))
//     })
//     return mapped.join("")
// }

// //10.15.2020 Solution "Keep Hydrated"
// function litres(time) {
//   let litres = time * .5
//   return Math.floor(litres)
// }

// //10.15.2020 Solution "Are you Playing Banjo"
// function areYouPlayingBanjo(name) {
//   name = name.split("")
//   if (name[0].toLowerCase() == "r") {
//     name = name.join("")
//     return `${name} plays banjo`
//   } else {
//     name = name.join("")
//     return `${name} does not play banjo`
//   }
// }

// //10.16.2020 Solution "largest product or sum"
// function sumOrProduct(array, n) {
//   let sortedArray = array.sort((a, b) => {
//   return a - b;
//   }) 
//   let smallestArray = sortedArray.slice(0, n)
//   let largestArray = sortedArray.slice((-1*n))

//   let smallestTotal = smallestArray.reduce((sum, el) => {
//     return sum * el
//   })

//   let largestTotal = largestArray.reduce((sum, el) => {
//     return sum + el
//   })

//   if (smallestTotal > largestTotal) {
//     return 'product'
//   } else if (smallestTotal < largestTotal) {
//     return 'sum'
//   }
//   else {
//     return 'same'
//   }
// }

// //10.24.2020 Solution ""
// function validSpacing(s) {
//   if (s.includes('  ')) {
//     return false
//   } else if (s.trim().length !== s.length) {
//     return false
//   }
//   return true
// }

// //10.25.2020 Solution "longest vowel chain"
// function solve(s){
//   let vowels = ["a", "e", "i", "o", "u"]
//   let count = 0
//   let biggestCount = 0
//   for (let i = 0; i < s.length - 1; i ++) {
//     if (vowels.includes(s[i]) 
//        && vowels.includes(s[i + 1])) {
//          count++
//      } else {
//        if (biggestCount < count) {
//        biggestCount = count
//        }
//        count = 1
//      }
//   } 
//    return biggestCount
//  }

//  //11.13.2020 Soltuion "String ends with?"
//  function solution(str, ending){
  
//   let endingLength = ending.length
  
//   let newString = str.slice(-endingLength)
  
//   return newString === ending || ending === "" ? true : false
  
// }

// //11.14.2020 Solution "Reverse Words"

// function reverseWords(str) {
//   return str.split(' ').reverse().join(' ')
// }

// //11.15.2020 Solution "Weird String Case"

// const toWeirdCase = (string) => {

//   return string.split(' ').map(word => {
//     return word.split('').map((el, index) => {
//       return index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()
//     }).join('')
//   }).join(" ")
// }

// //11.16.2020 Solution 

// const solveB = (B) => {
//   let newB = B 
//     .toString()
//     .split("")
//     .map(el => {
//       let newArray = []
//       el == 1 ? newArray.push(0) : newArray.push(1)
//       return newArray})
//     .join("")
//     return newB
// }


// //11.17.2020 Solution "Concatenate Integers"
// var inputs = readline().split(' ');
// const A = parseInt(inputs[0]);
// const B = parseInt(inputs[1]);

// let addIntegers = (A, B) => {
//     return A + B
//  }

// let subIntegers = (A, B) => {
//     return A - B
// }

// let concatenatedResults = (A, B) => {
//     let sub = subIntegers(A, B).toString()
//     let add = addIntegers(A, B).toString()
//     let sum = sub + add
//     console.log(sum)
// }

// concatenatedResults(A, B)

// //11.18.2020 Solution "does my number look big in this?"
// function narcissistic(value) {
//   let sum = 0
//   value = value.toString()
//   for (let i = 0; i < value.length; i++) {
//     sum = sum + value[i]**value.length
//   }
//   if ( sum == value ) {
//     return true
//   } else {
//     return false
//   }
// }

// //11.19.2020 Solution "two sum"
// function twoSum(numbers, target) {
//   for (var i = 0; i < numbers.length-1; i++) {
//       for (var j = i+1; j < numbers.length; j++) {
//           if (numbers[i] + numbers[j] === target) return [i, j];
//       }
//   }
// }


//12.6.2020 Solution "filter effects"

let positiveEffectArray = ["happy", "giggly"]

let strain1 = {
  positiveEffects: ["happy", "giggly"]
}

let strain2 = {
  positiveEffects: ["tired", "hungry", "happy"]
}

function filterStrainByPosEffect(positiveEffectArray, strain) {

  let strainPosEffects = strain.positiveEffects
  
  for ( let i = 0; i < strainPosEffects.length; i++) {
    positiveEffectArray.includes(strainPosEffects[i])
  }
}

console.log(filterStrainByPosEffect(positiveEffectArray, strain1))
console.log(filterStrainByPosEffect(positiveEffectArray, strain2))


// write a function that sums together all of the letter values of a string
// for example stringSum( "abzc" ) => 1 + 2 + 26 + 3 => 6
// stringSum('Abc') => [1 + 2 + 3]
// numbers and symbols will all equal 0 ' ' ()

// sum all string values together 
// a = 1

function findStringSum(string) {
  let numbersArray = string.split("").map(letter => returnLetterValue(letter))
  return numbersArray.reduce((acc, sum) => {
      return acc += sum
  })
}

function returnLetterValue(letter) {
  return isNaN(letter) ? letter.toLowerCase().charCodeAt()-96 : 0
}

// console.log(returnLetterValue('a'))
//normal case - passing
let test1 = "abzc" //expected output 32
//capital letter case - passing
let test2 = "Abzc" //expected output 32
//number case - passing
let test3 = "Ab3c" //expected output 6

console.log(findStringSum(test1))
console.log(findStringSum(test2))
console.log(findStringSum(test3))
