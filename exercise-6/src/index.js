var input = {
  '1': {
    id: 1,
    name: 'John',
    children: [
      { id: 2, name: 'Sally' },
      { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
    ]
  },
  '5': {
    id: 5,
    name: 'Mike',
    children: [{ id: 6, name: 'Peter' }]
  }
};

function normalize(input) {

  inp = {...input};

  let result = {};

  Object.keys(inp).forEach((element) => {

    result[element] = {...inp[element]}; // add the element to result

    // function to push elements child to array
    function addChildren(childrenArray) {

      childrenArray.forEach((child) => {
        result[child.id] = child;

        // recursively call the addChildren function if the child also has children and so on
        if (child.children)
          addChildren(child.children);
      });

    }

    addChildren(inp[element].children); // call the addChildren function for parent
  });

  // function to get id of children
  function childrenId(inp) {
    return inp.map(element => element.id);
  }

  // convert all the children from array of objects to array of ids
  Object.keys(result).forEach(element => {
    if (result[element].children)
      result[element].children = childrenId(result[element].children);
  });

  return result;
}

output = normalize(input);
console.log(output);