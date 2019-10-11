// 实现接口
var customer = {
    firstName: 'Tom',
    lastName: 'hanks',
    sayHi: function () { return 'Hi, tom'; }
};
console.log('customer对象');
console.log(customer.firstName);
var drummer = {
    age: 12,
    instrument: 'drums',
};
var drummer1 = {};
drummer1.age = 18;
drummer1.instrument = 'll';
console.log('drummer', drummer, drummer1);
