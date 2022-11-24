//对象就是属性和方法的集合
// OOP Object Oriented Programming
// class person {

// }
// const xlz = new Person();
let obj = {
    name: '小玲子',
    sayHi() {
        console.log('hello');
    }
}
obj.name
//对象
const xlz = new Object();//  { } js Object函数 也是对象 一切1对象的原型
// 对象字面量都基于Object 来构造，原型式面对现象

xlz.name = '小玲子'
xlz.sayHi= function() {
    console.log('hello');
}
console.log(xlz);