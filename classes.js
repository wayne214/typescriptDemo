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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 构造函数
    function Person(age, interest) {
        this.age = age;
    }
    // 方法
    Person.prototype.disp = function () {
        console.log('person:', this.age, Person.num);
    };
    return Person;
}());
var subperson = /** @class */ (function (_super) {
    __extends(subperson, _super);
    function subperson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subperson.prototype.disp = function () {
        _super.prototype.disp.call(this);
        console.log('subperson', 'hh');
    };
    return subperson;
}(Person));
var objs = new Person('hhh', "唱歌");
/**
 *instanceof 运算符
 instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
 *
 * */
var isPerson = objs instanceof Person;
var issub = objs instanceof subperson;
Person.num = 12;
var subobj = new subperson('dddd', '喝酒');
objs.disp();
console.log('obj', objs.age, isPerson, issub);
subobj.disp();
