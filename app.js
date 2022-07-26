function arr(arrays) {

    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i]) {
            result.push(arrays[i]);
        }
    }
    return result;
}
console.log(arr([NaN, 0, 15, false, -22, '', undefined, 47, null ]));