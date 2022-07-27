let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordNum = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
    if (i < 3) {
        console.log(i + 1 + ordNum[i + 1] + ' choice is ' + colors[i])
    } else {
        console.log(i + 1 + ordNum[0] + ' choice is ' + colors[i])
    }
};