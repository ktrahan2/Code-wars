//8.28.2020 Solution "Get the mean of an array"
function getAverage(marks){
    let average = marks.reduce((total, grade) => total + grade) / marks.length
    return Math.floor(average)
  }

//8.28.2020 Solution 2 "if/else syntax debug"
function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

//9.7.2020 Solution "Can we divide it?"
function isDivideBy(number, a, b) {
  return [a, b].every(i => number % i === 0)
}


//9.8.2020 Solution "simple equation reversal"
function solve(eq){
  return eq.split(/([*\+\-\/])/).reverse().join('');
}

//9.14.2020 SOlution "N-th power"
function index(array, n){
  let number = array[n]
  if (array.length <= n) {
    return -1
  }
  else {
    return number**n
  }
}

//9.15.2020 Solution "Debug sayHello"
function sayHello(name) {
  return `Hello, ${name}`
}

//9.15.2020 Solution "Grasshopper - Debug"
function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c <= 0) {
    return (c + " is freezing temperature")
  } else {
    return (c + " is above freezing temperature")
  }
}
function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}

//9.16.2020 Solution "Hungarian Vowel Harmoney"
function dative(word) {
  return (/[aáoóuú]/.test(word)) ? word + "nak" : word + "nek";
}

//10.5.2020 Solution "Array Element Parity"
function solve(arr) {
  for (var i = 0; i < arr.length; i++)
    if (!arr.includes(-1 * arr[i])) return arr[i];
}

//10.9.2020 Solution "dejonnify"
function decodeMsg(message) {
  let mapped = message.split('jon')
    .map(string => {
      return String.fromCharCode(parseInt(string, 2))
    })
    return mapped.join("")
}

//10.15.2020 Solution "Keep Hydrated"
function litres(time) {
  let litres = time * .5
  return Math.floor(litres)
}

//10.15.2020 Solution "Are you Playing Banjo"
function areYouPlayingBanjo(name) {
  name = name.split("")
  if (name[0].toLowerCase() == "r") {
    name = name.join("")
    return `${name} plays banjo`
  } else {
    name = name.join("")
    return `${name} does not play banjo`
  }
}

//10.16.2020 Solution "largest product or sum"
function sumOrProduct(array, n) {
  let sortedArray = array.sort((a, b) => {
  return a - b;
  }) 
  let smallestArray = sortedArray.slice(0, n)
  let largestArray = sortedArray.slice((-1*n))

  let smallestTotal = smallestArray.reduce((sum, el) => {
    return sum * el
  })

  let largestTotal = largestArray.reduce((sum, el) => {
    return sum + el
  })

  if (smallestTotal > largestTotal) {
    return 'product'
  } else if (smallestTotal < largestTotal) {
    return 'sum'
  }
  else {
    return 'same'
  }
}

//10.24.2020 Solution ""
function validSpacing(s) {
  if (s.includes('  ')) {
    return false
  } else if (s.trim().length !== s.length) {
    return false
  }
  return true
}

//10.25.2020 Solution "longest vowel chain"
function solve(s){
  let vowels = ["a", "e", "i", "o", "u"]
  let count = 0
  let biggestCount = 0
  for (let i = 0; i < s.length - 1; i ++) {
    if (vowels.includes(s[i]) 
       && vowels.includes(s[i + 1])) {
         count++
     } else {
       if (biggestCount < count) {
       biggestCount = count
       }
       count = 1
     }
  } 
   return biggestCount
 }