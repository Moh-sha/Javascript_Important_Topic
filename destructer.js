//normal rules
//first object
const obj = { name: "shafin", age: 20, id: 203444 };

//now value call

console.log(obj["age"]);

//destructer rules

const data = {
  name: "shafin",
  age: 20,
  id: 203444,

  eductation: { degree: { bsc: "cse" } },
};

//destructer object
//:S mane amra name object variable ke s ar modde assign korte pari
//
const { name: s } = data;
console.log(s);

//nested variables ar khetre

const {
  eductation: {
    degree: { bsc: p },
  },
} = data;
console.log(p);

const {
  eductation: {
    degree: { bsc: x },
  },
} = data;

console.log(x);
