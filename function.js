function a(a, b) {
  return 2 * a * b;
}

const result = a(2, 3);

console.log(result);

///self invoking function

(function () {
  console.log(result);
})();
