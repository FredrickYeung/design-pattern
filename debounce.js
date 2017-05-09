/**
 * 防抖函数
 * @param {Function} fn
 * @param {Number} delay
 */
var debounce = function (fn, delay) {
    var __self = fn,
        timer,
        firstTime;

    return function () {
        var __me = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            __self.apply(__me, arguments);
        }, delay);
    }
}

window.onresize = debounce(function () {
    console.log('resize');
}, 1000)