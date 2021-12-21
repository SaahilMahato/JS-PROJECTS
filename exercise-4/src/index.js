var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
    let result = [];
    let new_val;
    for (let i=0; i<collection.length; i++) {
        new_val = tranFunc(collection[i]);
        result.push(new_val);
    }
    return result;
}

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);