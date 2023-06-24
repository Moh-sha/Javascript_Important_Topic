//creating a new set

const result = new Set(["a", "b", "c", "d", "a", "c"]);

//adding value in set
result.add("f");
result.add("r");
result.add("g");
result.add("k");

result.keys();

console.log(result.values());

let arry = "";

result.forEach(function (value) {
  arry = arry + value;
});

console.log(arry);
