// 手写instanceof
const myInstanceof = (target, obj) => {
    let p = target;
    while (p) {
        if (p == obj.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
};

console.log(myInstanceof([1, 2, 3], Array));
