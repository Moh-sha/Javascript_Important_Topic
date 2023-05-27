//normal
function myFunction2(a, b) {
  console.log(a, b);
}

myFunction2(1, 2, 2, 4, 5, 6, 7);

//rest operator //..params dile o input sob gula nibe
// jodi na diya hoi tahole nibe nai
function myFunction(...params) {
  console.log(params);
}

myFunction(10, 20, 4, 2, 1, 2, 2, 45, 5);
