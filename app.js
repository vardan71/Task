function insert(text, addWord, position,) {
      if (typeof (position) == 'undefined') {
          position = 0;
      }
      if (typeof (addWord) == 'undefined') {
          addWord = '';
      }
      return text.substring(0, position) + addWord + text.substring(position)
  }
  console.log(insert('We are doing some exercises.'));
  console.log(insert('We are doing some exercises.', 'JavaScript '));
  console.log(insert('We are doing some exercises.', 'JavaScript ', 18));