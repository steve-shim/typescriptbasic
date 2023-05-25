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