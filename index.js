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