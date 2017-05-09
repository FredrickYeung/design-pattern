/**
 * 分时函数
 * @param {Array} arr
 * @param {Function} fn
 * @param {Number} count
 */
var timeChunk = function (arr, fn, count) {
    var obj, t;
    var len = arr.length;

    var start = function () {
        for (var i = 0; i < Math.min(count || 1, arr.length); i++) {
            var obj = arr.shift();
            fn(obj);
        }
    };

    return function () {
        t = setInterval(function () {
            if (arr.length === 0) { // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        }, 200);    // 分批执行的时间间隔，也可以作为参数传入
    };
};

// Example
var arr = [];
for (var i = 1; i <= 1000; i++) {
    arr.push(i);
}

var renderFriendList = timeChunk(arr, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);
