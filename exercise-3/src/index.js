var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]


function searchByName(list, name) {
    for (let i=0; i<list.length; i++) {
        if (list[i].name.toLowerCase() === name.toLowerCase())
            return list[i]
    }

    return "NO RESULTS FOUND.";
}

function searchByKey(list, key, name) {
    let val_to_match, val;

    for (let i=0; i<list.length; i++) {

        if (key !== 'id') {
            val_to_match = list[i][key].toLowerCase();
            val = name.toLowerCase();
        }
        else {
            val_to_match = list[i][key];
            val = name;
        }

        if (val_to_match === val)
            return list[i]
    }

    return "NO RESULTS FOUND.";
}

console.log(searchByName(fruits, 'apple'));

console.log(searchByKey(fruits, 'name', 'apple'));