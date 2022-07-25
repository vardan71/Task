function truncate_string(value){
      return value.substring(0,5);
  }
  const value = 'hello world';
  console.log(truncate_string(value))