let num = [14, 2, 16, 8, 38, 33, 12, 4, 64, 7];
let c;
for (let j = 0; j < num.length - 1; j++) {
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] > num[i + 1]) {
            c = num[i + 1];
            num[i + 1] = num[i];
            num[i] = c;
        }
    }
}
console.log(num);
