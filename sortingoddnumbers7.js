var array = [5, 3, 2, 8, 1, 4],
    indices = [];

array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);