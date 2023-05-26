let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color id ${red}`
let yourColor: string = 'Your color is' + green
str = "shim"
console.log("str",str)

console.log("myColor",myColor)

let nan: number = NaN
console.log("nan",nan)

let nul: null = null// 명시적으로 아무 값도 아님을 지정
let und: undefined // 암시적으로 데이터가 들어간다
console.log("nul",nul)
console.log("und",und)

/// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1,2,3,4]
const union: (string|number)[] = ['Apple',1,2]

/// 객체
// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () {}

interface User {
    name: string
    age: number
    isValid: boolean
}

const userA: User = {
    name: 'Shim',
    age: 30,
    isValid: true
}

const userB: {
    name: string
    age: number
    isValid: boolean
} = {
    name: 'Neo',
    age: 22,
    isValid: false
}

/// 함수
// const add: (x:number, y:number) => number = function (x,y) {
//     return x+y
// } 
const add = function (x:number,y:number): number {
    return x+y
} 
const a: number = add(1,2)

// const hello: () => void = () => {
//     console.log('Hello world~')
// }
const hello = (): void => {
    console.log('Hello world~')
}

const h: void = hello()
console.log(h)



/// Any
let hello2: any = 'Hello world'
hello2 = 123
hello2 = false
hello2 = null
hello2 = {}
hello2 = []
hello2 = function () {}


/// Tuple
const tuple: [string, number, boolean] = ['a',1,false]
const userss: [number, string, boolean][] 
    = [[1,'Neo',true], [2,'Evan',false], [3,'Lewis',true]]


/// Void
function voidhello(msg: string): void {
    console.log(`Hello ${msg}`)
}

const hi: void = voidhello('www')
console.log(hi)


const nev: number[] = []
nev.push(3)

/// Union
let union22: (string | number)[]
//union22 = 'Hello type!'
union22 = [123,12]
union22 = [123,12,'a']


/// Intersection
interface User {
    name:string,
    age:number
}
interface Validation {
    isValid:boolean
}
const heropy: User & Validation = {
    name:'Shim',
    isValid:true,
    age:30
}

//Type Assertion
// const el = document.querySelector('body')
// if (el) {
//     el.textContent = 'Hello world????!'
// }

// function getNumber(x: number | null | undefined) {
//     if (x) {
//         return Number(x.toFixed(2) ?? '200')
//     }
// }
function getNumber(x: number | null | undefined) {
    return Number(x?.toFixed(2) ?? '200')
}

console.log(getNumber(0))
console.log(getNumber(null))
console.log(Number(undefined))


function getValue(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase()
}

console.log(getValue('hello world', false))
console.log(getValue(3.141592312, true))


// 타입 가드(Guards)
// function logText(el: Element) {
//     console.log(el.textContent)
// }

// const h1El = document.querySelector('h1')
// if (h1El instanceof HTMLHeadingElement) {
//     console.log("h1El",h1El)
//     logText(h1El)
// }

function ssadd(val: string | number) {
    let res = 'Result => '
    if (typeof val === 'number') {
        res += val.toFixed(2)
    } else {
        res += val.toUpperCase()
    }
    console.log(res)
}

ssadd(3.1415135)
ssadd('hello world')