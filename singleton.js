// var Singleton = function (name) {
//     this.name = name
//     this.instance = null
// }

// Singleton.prototype.getName = function () {
//     console.log(this.name)
// }

// Singleton.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new Singleton(name)
//     }
//     return this.instance
// }

var Singleton = function (name) {
    this.name = name;
};

Singleton.prototype.getName = function () {
    console.log(this.name);
};

Singleton.getInstance = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    };
})();

var a = Singleton.getInstance('one')
var b = Singleton.getInstance('two')

a.getName()
b.getName()

// // console.log(a.getName())
// // console.log(b.getName())


// var CreateDiv = (function () {
//     var instance;
//     var CreateDiv = function (html) {
//         if (instance) {
//             return instance;
//         }
//         this.html = html;
//         this.init();
//         return instance = this;
//     };

//     CreateDiv.prototype.init = function () {
//         var div = document.createElement('div');
//         div.innerHTML = this.html;
//         document.body.appendChild(div);
//     };
//     return CreateDiv;
// })();

// var CreateDiv = function (html) {
//     this.html = html;
//     this.init();
// };

// CreateDiv.prototype.init = function () {
//     var div = document.createElement('div');
//     div.innerHTML = this.html;
//     document.body.appendChild(div);
// };

// var ProxySingletonCreateDiv = (function () {
//     var instance;
//     return function (html) {
//         if (!instance) {
//             instance = new CreateDiv(html);
//         }
//         return instance;
//     }
// })();

// var a = new ProxySingletonCreateDiv('sven1');
// var b = new ProxySingletonCreateDiv('sven2');

console.dir(a === b);