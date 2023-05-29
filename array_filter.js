var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var result = number.filter((currentValue, index, arr) => {
  return currentValue > 5;
  console.log(arr);
  console.log(index);
});

console.log(result);
