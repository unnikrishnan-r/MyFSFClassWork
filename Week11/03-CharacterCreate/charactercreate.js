function CreateCharacter(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.gender = gender;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.isAlive = function() {
    // if (this.strength > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.strength > 0;
  };
  this.attack = function(opponentAttack) {
    this.strength -= opponentAttack;
  };
  this.levelUp = function(){
      this.age++;
      this.strength+=5;
      this.hitpoints+=25;
      this.printStats();
  }
  this.printStats = function() {
    console.log(`Name:  ${this.name}`);
    console.log(`Profession: ${this.profession}`);
    console.log(`Age: ${this.age}`);
    console.log(`Life Status ${this.isAlive()}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Hit Points : ${this.hitpoints}`)
    console.log("----------------------------------");
  };
}

var captainAmerica = new CreateCharacter(
  "Captain America",
  "Doctor",
  "Male",
  32,
  100,
  5
);
var superMan = new CreateCharacter("Super Man", "Doctor", "Male", 32, 100, 10);

captainAmerica.printStats();
superMan.printStats();
for (var i = 0; superMan.isAlive() && captainAmerica.isAlive(); i++) {
    // (superMan.isAlive && captainAmerica.isAlive)
  superMan.attack(captainAmerica.hitpoints);
  captainAmerica.attack(superMan.hitpoints);
}
console.log("**********************************");
console.log("Somebody Died........")
console.log("**********************************");
captainAmerica.printStats();
superMan.printStats();

// superMan.levelUp();