var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 100; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log('全局变量：' + global_num);
console.log('静态变量：' + Numbers.sval);
var obj = new Numbers();
console.log('局部变量：' + obj.num_val);
