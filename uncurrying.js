// Function.prototype.uncurrying = function () {
//     var _self = this;
//     return function () {
//         var obj = Array.prototype.shift.call(arguments);
//         return _self.apply(obj, arguments);
//     };
// };

Function.prototype.uncurrying = function () {
    var _self = this;
    return function () {
        return Function.prototype.call.apply(_self, arguments);
    };
}

// var push = Array.prototype.push.uncurrying();

// (function () {
//     push(arguments, 5);
//     console.log(arguments);
// })(1, 2, 3);

for (var i = 0, fn, ary = ['push', 'shift', 'forEach']; fn = ary[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying();
};
var obj = {
    "length": 3,
    "0": 1,
    "1": 2,
    "2": 3
};

Array.push(obj, 4); // 向对象中添加一个元素
console.log(obj.length); // 输出：4
var first = Array.shift(obj); // 截取第一个元素
console.log(first); // 输出：1
console.log(obj); // 输出：{0: 2, 1: 3, 2: 4, length: 3}

Array.forEach(obj, function (i, n) {
    console.log(n); // 分别输出：0, 1, 2
});