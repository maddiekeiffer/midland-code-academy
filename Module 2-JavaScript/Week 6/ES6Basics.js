let arr1 = [1, 10, 5];
let arr2 = [6, 2, 8];

let combineArray = [...arr1, ...arr2];
console.log(combineArray);

let shallowCopy = [...combineArray]; 
//console.log(shallowCopy);

shallowCopy.sort((a, b) => a - b);

console.log(shallowCopy);

class Animal {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`${this.type} makes a noise`);
    }
}
class Cat extends Animal {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} cats meow.`);
    }
}
class Lion extends Cat {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} cat goes RAWRRRRR!`);
    }
}
class Bengal extends Cat {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} cats meow like crazy.`);
    }
}
const kitty = new Cat('Orange Tabby');
kitty.speak();

const lioness = new Lion('Huge Female Lion');
lioness.speak();

const bengal = new Bengal('Bengal kitten');
bengal.speak();

class Snake extends Animal {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} snakes hiss 'sssssssss'.`);
    }
}
class Boa extends Snake {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} snakes hiss 'sssssssss' and constrict a ton.`);
    }
}
class Cobra extends Snake {
    constructor(type) {
        super(type);
    }
    speak() {
        console.log(`${this.type} go 'ssssss' and then launch an attack that could be fatal! :)`);
    }
}
const snakey = new Snake('Slithery lil snakkkkeeee');
snakey.speak();

const boa = new Boa('Boa constrictorrrrr');
boa.speak();

const cobra = new Cobra('King Cobra');
cobra.speak();