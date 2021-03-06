var getSingle = function (fn) {
    var result;
    return function () {
        console.log('result:', result);
        return result || (result = fn.apply(this, arguments));
    };
}

// Example
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').addEventListener('click', function () {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
})

var createSingleIframe = getSingle(function () {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    return iframe;
});

document.getElementById('loginBtn2').addEventListener('click', function () {
    var loginLayer = createSingleIframe();
    loginLayer.src = 'https://www.baidu.com/';
});