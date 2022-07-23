function word() {

      for(i=0; i < arr.length; i++){
            if(arr[i] !== arr[arr.length - 1 - i  ]){        
                  alert(false);
            }
            else {
                  alert(true) 
            }break
      }
      }
      const arr = prompt('');  
      console.log(word(arr));