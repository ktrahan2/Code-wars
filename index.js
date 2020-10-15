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
  if (name[0] == "R" || name[0] == "r") {
    name = name.join("")
    return `${name} plays banjo`
  } else {
    name = name.join("")
    return `${name} does not play banjo`
  }
}
