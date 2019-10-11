/**
 * 接口
 * interface interface_name{}
 * */
// 定义接口
interface Iperson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}
// 实现接口
let customer:Iperson = {
    firstName: 'Tom',
    lastName: 'hanks',
    sayHi:(): string => {return 'Hi, tom'}
}

console.log('customer对象')
console.log(customer.firstName)

// 联合类型接口，
interface RunOptions {
    program: string;
    commandline: string | string[] | (()=> string)
}

/**
 *接口继承
 接口继承就是说接口可以通过其他接口来扩展自己。
 Typescript 允许接口继承多个接口。
 继承使用关键字 extends。
 单接口继承语法格式：
 Child_interface_name extends super_interface_name
 多接口继承语法格式：
 Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
 * */

interface person {
    age: number
}

interface person1 {
    sex: string
}
// 单继承
interface music extends person{
    instrument: string
}
// 多继承，用逗号隔开
interface music1 extends person,person1{
    instrument: string
}

let drummer:music={
    age: 12,
    instrument: 'drums',
}

let drummer1 = <music1> {}

drummer1.age = 18
drummer1.instrument = 'll'

console.log('drummer', drummer,drummer1)