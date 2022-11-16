// //Delcarando clase
// class User {

// };

// //Instanciando clase
// const newUser = new User();

// class user {
//     saludo() {
//         return 'Hello';
//     }
// };

// const gndx = new user();
// console.log(gndx.saludo());
// const developer = new user();
// console.log(developer.saludo());

//constructor

// class user {
//     //constructor
//     constructor() {
//         console.log('Nuevo usuario');
//     }
//     saludo() {
//         return 'Hello';
//     }
// }

// const andres = new user();

// //this
// class user2 {
//     //constructor
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         return 'Hello';
//     }
//     saludo() {
//         return `${this.speak()} ${this.name}`;
//     }
// }

// const ricardo = new user2('Ricardo');
// console.log(ricardo.saludo());

//setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Metodos
    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const developer = new user('Andrés', 24);
console.log(developer.uAge);
console.log(developer.uAge = 20);