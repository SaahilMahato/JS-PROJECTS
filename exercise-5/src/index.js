var arr = [
    {id: 1,
    name: 'John'},
    {id: 2,
    name: 'Mary'},
    {id: 3,
    name: 'Andrew'}
];

function sortBy(array, key) {
    arr = [...array];
    // Implemented selection sort
    let min_index, temp;
    for (let i=0; i< arr.length-1; i++) {
        min_index = i; // assume current index is minimum among the leftovers
        for (let j=i+1; j<arr.length; j++)
            if (arr[j][key] < arr[min_index][key]) // compare the values
                min_index = j; // update index value of the minimun element

        // swap the values
        temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }

    return arr;
}

var sorted = sortBy(arr, 'name');

console.log(sorted);