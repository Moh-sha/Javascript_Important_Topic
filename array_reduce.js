var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = array.reduce(function (currentValue, preValue) {
  return currentValue + preValue;
}, 0);

console.log(sum);
