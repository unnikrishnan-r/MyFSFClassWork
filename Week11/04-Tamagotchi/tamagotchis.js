function DigitalPal() {
  this.hungry = this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function() {
    if (this.hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No Thanks, I am full..");
    }
  };
  this.sleep = function() {
    if (this.sleepy) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("No way! I'm not tired.");
    }
  };
  this.play = function() {
    if (this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  };

  this.increaseAge = function() {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + " old!");
  };
}
function setAttribute(key, value) {
  if (value) {
    return true;
  }
}

function printStuff (stuff){
    console.log(stuff);
}
var dogs = new DigitalPal();
dogs.hungry = true;
dogs.outside = false;
dogs.bark = printStuff("Woof Woof Woof");

dogs.goOutside = function(){
    if (!this.outside){
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark;
    }else{
        console.log("We're already outside though...");
    }
}
dogs.goInside = function(){
    if (this.outside){
        console.log("Do we have to? Fine..." );

    }else{
        console.log("I'm already inside...")
    }
}
dogs.feed();
dogs.sleep();
dogs.play();
dogs.goOutside();
dogs.outside = true;
dogs.goOutside();
dogs.goInside();

var cats = new DigitalPal();
cats.houseCondition = 100;
cats.meow = printStuff("Meow ! Meow!")
cats.destroyFurniture = function (){
    this.houseCondition -= 10;
    printStuff("MUAHAHAHAHA! TAKE THAT FURNITURE!");
};
cats.buyNewFurniture = function (){
    this.houseCondition += 50;
    printStuff("Are you sure about that?" );
}
cats.destroyFurniture();
cats.buyNewFurniture();