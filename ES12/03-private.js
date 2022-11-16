class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Metodos
    #speak() {  //privado
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {   //privado
        return this.age;
    }

    set #uAge(n) {  //privado
        this.age = n;
    }
}

const developer = new user('Andrés', 24);
console.log(developer.uAge);
console.log(developer.uAge = 20);