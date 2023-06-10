class Class_name {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  person() {
    console.log(this.name);
  }
}

const obj = new Class_name("shafin", 20);
const obj_ = new Class_name("sha", 0);
obj.person();
console.log(obj);

//this object
