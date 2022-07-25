function isLowerCase(a) {
      return a[0] !== a[0].toUpperCase();
}
function word(value) {
      let words = value.split(' ')

      for (let i = 0; i < words.length; i++) {
            if (isLowerCase(words[i][0])) {
                 words[i]= words[i].charAt(0).toUpperCase() + words[i].substring(1)
            }
      }
      return words.join('')
}


console.log(word("JavaScript Exercises"));
console.log(word("JavaScript exercises"));
console.log(word("JavaScriptExercises"));