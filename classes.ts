/**
 * 类
 *TypeScript 类定义方式如下：
 class class_name {
    // 类作用域
}
 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
 构造函数 − 类实例化时调用，可以为类的对象分配内存。
 方法 − 方法为对象要执行的操作。
 *
 * */

interface Iloan {
    interest: string
}

class Person implements Iloan{
    // 静态字段
    static num: number
    // 字段
    age:string
    // 构造函数
    constructor(age:string, interest: string) {
        this.age = age
    }
    // 方法
    disp(): void {
        console.log('person:', this.age, Person.num)
    }

    interest: string;
}

class subperson extends Person {
    disp(): void {
        super.disp()
        console.log('subperson', 'hh')
    }
}

let objs = new Person('hhh',"唱歌")
/**
 *instanceof 运算符
 instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
 *
 * */
let isPerson = objs instanceof Person
let issub = objs instanceof subperson

Person.num = 12

let subobj = new subperson('dddd','喝酒')

objs.disp()
console.log('obj',objs.age, isPerson, issub)

subobj.disp()