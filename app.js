function word(text) {

      for(let i=0; i < text.length; i++){
            if(text[i] !== text[text.length - 1- i  ]){        
                  return false;
            }
      }
      return true;
      }
      const text = 'hello';  
      console.log(word(text));