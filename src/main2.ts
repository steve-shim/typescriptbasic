interface GetName {
    (message: string): string
}

interface User {
    [key:string]: unknown
    name: string
    readonly age: number
    isValid?: boolean
    //getName: GetName // (message: string) => string
    getName: (params: string, params2: number) => string
}

const heropy: User = {
    name: 'ssh',
    age: 80,
    isValid: true,
    getName(message: string) {
        console.log("message",message)
        return this.name
    }
}

heropy.isValid = false
//heropy.age = 22
console.log(heropy)
console.log(heropy.getName('gg', 1))

heropy['email'] = 'aaa@naver.com'
console.log(heropy)

interface Fruits {
    [item: number]: string
}
const fruits: Fruits = ['Apple','Bnana']
console.log("fruits",fruits)
  

interface UserA {
    name: string
    age: number
}
interface UserB extends UserA {
    isValid: boolean
}

const shim: UserA = {
    name:'shim',
    age:80,
    //isValid:false
}
const su: UserB = {
    name:'su',
    age:74,
    isValid:true
}