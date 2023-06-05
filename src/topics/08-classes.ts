

// export class Person {
//     public  name: string
//     private address: string
//
//     constructor(name: string, address: string) {
//         this.name = name
//         this.address = address
//     }
// }

// Forma corta de definir clases en TypeScript
export class Person {
    constructor(
        public  firstName: string,
        public lastName: string,
        public address: string = 'No address'
    ) {}
}

// export class Hero extends Person {
//
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York')
//     }
// }
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person('Tony', 'Stark', 'New York')
// const  ironman = new Person('Ironman', 'New York')
const  ironman = new Hero('Ironman', 45, 'Tony', tony)

console.log(ironman)