/**
 * typescript 数组声明方法
 * var array_name[:datatype]; // 声明
 * array_name = [val1, val2, valn..] //初始化
 *
 * 数组中存储的类型必须是相同类型
 * */

var site: string[]; // 申明ts数组
site = ['Google','Runoob','Taobao'] // 初始化

var sites: string[] = ['soft','jd', 'pdd']

sites[1] = 'llll'

console.log('site', site, sites)

function disp():string[] {
    return new Array('Google','Runoob','Taobao')

}

var disparr = disp()

for (var i in disparr) {
    console.log('item is :', disparr[i])
}

/**
 * 元组可以用来存储不同的数据类型的元素
 * 创建元组的语法：
 * var tuple_name = [val1, val2, val3,...value n]
 * */

var mytuple = [1,'hello']

console.log('mytuple: is', mytuple, mytuple[1])
