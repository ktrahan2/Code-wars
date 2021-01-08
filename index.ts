export class Kata {
    static spinWords(words: string) {
      let wordsArray: string[] = words.split(" ")
      return wordsArray.map( word => {
        if ( word.length >= 5 ) {
          return word.split("").reverse().join("")
        } else {
          return word
        }
      }).join(" ")
    }
  }