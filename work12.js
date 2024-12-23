//Завдання 1: Даний масив [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]]. Застосувати наступні методи: reverse, flat, includes, join, map, reduce.
let arr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]]
//reverse
let res1 = arr.reverse()
console.log(res1)
//flat
let res2 = arr.flat(2)
console.log(res2)
//includes
let res3 = arr.includes(false)
console.log(res3)
//join
let res4 = arr.join(';')
console.log(res4)
//map
let res5 = res2.map((el) => el * 2 + 1)
console.log(res5)
//reduce
let res6 = res2.reduce((sum, el) => sum + el, 0)
console.log(res6)


//Завдання 2  Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи: split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes, concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace
let str = '  Hello world and my dear friend  '

//split
let res7 = str.split(' ')
console.log(res7)
//trim
let res8 = str.trim()
console.log(res8)
//toLocateUpperCase
let res9 = str.toLocaleUpperCase()
console.log(res9)
//toLocateLowerCase
let res10 = str.toLocaleLowerCase()
console.log(res10)
//charAt
let res11 = str.charAt(str.length - 3)
console.log(res11)
//charCodeAt
let res12 = str.charCodeAt(str.length - 3)
console.log(res12)
//includes
let res13 = str.includes('b')
console.log(res13)
//concat
let res14 = str.concat('Nazar')
console.log(res14)
//search
let res15 = str.search('JavaScript')
console.log(res15)
//startsWith
let res16 = str.startsWith(' ')
console.log(res16)
//endsWith
let res17 = str.endsWith('d')
console.log(res17)
//indexOf
let res18 = str.indexOf('m')
console.log(res18)
//lastIndexOf
let res19 = str.lastIndexOf('e')
console.log(res19)
//replace
let res20 = str.replace('friend', 'love')
console.log(res20)

//Завдання 3  Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)
//toExponential()
let num = 0.00000125
console.log(num.toExponential(5))
//valueOf()
let num2 = 515515
console.log(num2.valueOf())
//toPrecision()
let num3 = 124.2897
console.log(num3.toPrecision(4))
//toFixed()
console.log(num3.toFixed(4))
//padStart()
let res21 = str.padStart(39, 'Hello')
console.log(res21)
//padEnd()
let res22 = str.padEnd(39, 'Tania')
console.log(res22)
//object.values()
let student = {
    name: 'Pavlo',
    age:20,
    job:false, 
    number: +380952640336,
    mstatus: 'single',
}
console.log(Object.values(student))
//object.keys()
console.log(Object.keys(student))
//entries()
console.log(Object.entries(student))
//object.fromEntries()
let arr1 = [['name', 'Pavlo'], ['age', 20], ['job', true]]
let res23 = Object.fromEntries(arr1)
console.log(res23)

//seal()
Object.seal(student)
student.name = 'Ivan'
delete student.age
student.mark = 11
console.log(student)
//freeze()
Object.freeze(student)
student.name = 'Ivan'
student.mark = 11
console.log(student)
