interface Cat {
    name:string
    age:number
}
const cat:Cat = {
    name:'Lucy',
    age:3
}

function hello22(this: Cat, message:string) {
    console.log(`Hello ${this.name}, ${message}`)
} 
hello22.call(cat, 'You are pretty awesome!!')


class UserA {
    constructor(
        public first: string = '', 
        protected last: string = '', 
        protected age: number = 0
    ) {
        
    }
    protected getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}
class UserB extends UserA {
    getInfo() {
        return `getInfo ${this.getAge()}`
    }
}
class UserC extends UserB {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}

const neo = new UserB('Neo', 'Anderson', 102)
console.log(neo.getInfo())
//console.log(neo.getAge())
// console.log(neo.first)
// console.log(neo.last)
// console.log(neo.age)