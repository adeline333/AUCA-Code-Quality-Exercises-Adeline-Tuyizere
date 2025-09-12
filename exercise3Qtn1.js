const checkNesting = (arr) => {
  let nestedLevel = 1;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let innerLevel = 1 + checkNesting(arr[i]);
      if (innerLevel > nestedLevel) {
        nestedLevel = innerLevel;
      }
    }
  }
  return nestedLevel;
};
const flatten = (arr) => arr.flat(Infinity);

console.log(flatten([1, 2, [1, 2], [6, 7, 8], 8, 9]));
console.log(checkNesting([1, 2, [1, 2], [6, 7, 8], 8, 9]));
