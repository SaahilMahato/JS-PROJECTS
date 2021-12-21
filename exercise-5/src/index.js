var arr = [
    {id: 1,
    name: 'John'},
    {id: 2,
    name: 'Mary'},
    {id: 3,
    name: 'Andrew'}
];

function sortBy(array, key) {
    // Implemented selection sort
    let min_index, temp;
    for (let i=0; i< array.length-1; i++) {
        min_index = i;
        for (let j=i+1; j<array.length; j++)
            if (array[j][key] < arr[min_index][key])
                min_index = j;
        temp = array[i];
        array[i] = array[min_index];
        arr[min_index] = temp;
    }

    return array;
}

var sorted = sortBy(arr, 'id');

console.log(sorted);