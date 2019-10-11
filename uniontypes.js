/**
 * 联合类型，通过管道（|）将变量设置为多种类型，只能赋值设置指定的类型，赋值其他类型报错
 * */
var uniontypes;
uniontypes = 'hello world';
console.log('string type:', uniontypes);
uniontypes = 1110;
console.log('number type：', uniontypes);
uniontypes = false;
console.log('boolean type:', uniontypes);
// 联合类型数组
var unionarray;
