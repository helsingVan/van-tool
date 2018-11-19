// Configurable   能否delete,否能修改特性，能否修改属性为访问器属性
// Enumerable     能否被for-in 遍历
// Writable       能否修改值
// Value          值的存储位置

/*
*  Object.defineProperty(obj, key, option)
*  @params 
*  obj: 属性所在对象，即目标对象
*  key: 属性名字
*  option: 配置对象  必须是 configurable,enumerable,writable,value四种
*/


var obj = {
    name: 'fan',
    age: 14
};

Object.defineProperty(obj, 'name', {
    writable: false,
    value: 'hello'
});
obj.name = 'guang';
log(obj);
forInLog(obj);

Object.defineProperty(obj, 'name', {
    configurable: false,
    writable: true
});
obj.name = 'sfdf';
delete obj.name;
log(obj);

// Object.defineProperty(obj, 'name', {
//     enumerable: false
// });
// forInLog(obj);

/*
*   getter, setter
*/
log('----');
var obj2 = { name: 'fei', age: 19, ageRange: 1 };
Object.defineProperty(obj2, 'name', {
    get: function () {
        return this.age;
    }
});
log(obj2.name);

Object.defineProperty(obj2, 'age', {
    get: function () {
        return this.age;
    },
    set: function (value) {
        if (value > 20) {
            this.ageRange = 2;
        } else {
            this.ageRange = 1;
        }
    }
});
obj2.age = 22;
log(obj2);

log('---');
var obj3 = { name: 'feifei', age: 11 };
var descriptor = Object.getOwnPropertyDescriptor(obj3, 'name');
log(descriptor);
log('test');
