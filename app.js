const arr = [1, -3, -4, 7, 8, 12];
let even = [];
let odd = [];
console.log(arr)

for(i=0; i < arr.length; i++){
      if(arr[i] % 2 ===0 && arr[i]>i){
            even.push(arr[i])
      }else if(arr[i] % 2 !==0 && arr[i]>i){
            odd.push(arr[i] )
      }
};
console.log(even)
console.log(odd)