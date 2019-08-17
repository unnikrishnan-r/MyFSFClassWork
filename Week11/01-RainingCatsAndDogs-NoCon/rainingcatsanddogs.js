let dogs = {
  raining: true,
  noise: "Woof",
  makeNoise: function dogsBark() {
    if (this.raining == true) {
      console.log(this.noise);
    }
  }
};

let cats = {
  raining: true,
  noise: "Meow",
  makeNoise: function catsMeow() {
    if (this.raining == true) {
      console.log(this.noise);
    }
  }
};

function makeHysteria(cats, dogs) {
  if (cats.raining && dogs.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  } else {
    console.log("DOGS AND CATS HATE EACH OTHER, WORLD IS NORMAL");
  }
}

if (process.argv[2] == "true") {
  cats.raining = true;
} else {
  cats.raining = false;
}
if (process.argv[3] == "true") {
  dogs.raining = true;
} else {
  dogs.raining = false;
}
console.log(cats.raining, dogs.raining);
dogs.makeNoise();
cats.makeNoise();
makeHysteria(cats, dogs);
