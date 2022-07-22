const year = parseInt(prompt("Please write a year"))

if ((year % 4 == 0) && (year % 400 == 0) ){
      alert(true);
}
else {
      alert(false);
}