function word() {

      for(i=0; i < arr.length; i++){
            if(arr[i] !== arr[arr.length - 1- i  ]){        
                  return false;
            }
      }
      return true;
      }
      const arr = 'hello';  
      console.log(word(arr));