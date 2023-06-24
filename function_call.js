const person = {
  fullname: function (string, number) {
    return this.firstname + " " + this.lastname + " " + string + " " + number;
  },
};

const person1 = {
  firstname: "Shafin",

  lastname: "ahmed",
};

const person2 = {
  firstname: "rafi",

  lastname: "mozumeder",
};

const result = person.fullname.call(person2, "Bangladesh", "1972");
console.log(result);
