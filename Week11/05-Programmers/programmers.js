function CreateProgramer(name, title, age, favLanguage) {
  this.name = name.toUpperCase();
  this.title = title.toUpperCase();
  this.age = age;
  this.favLanguage = favLanguage.toUpperCase();
}

CreateProgramer.prototype.print = function() {
  console.log(`Name : ${this.name}`);
  console.log(`Title: ${this.title}`);
  console.log(`Age: ${this.age}`);
  console.log(`Fav Language: ${this.favLanguage}`);
};

var programmerA = new CreateProgramer("unni", "fsd", 35, "COBOL");
programmerA.print();
