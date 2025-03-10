(function (global, factory) {
    // 모듈 시스템 대응 (CommonJS, AMD 지원)
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global);
    } else {
        global.LLLL = global.jQuery = factory(global);
    }
})(typeof window !== "undefined" ? window : this, function (window) {

    // jQuery의 생성자 함수
    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };

    // jQuery 프로토타입 (`fn`에 여러 기능을 추가)
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,

        init: function (selector, context) {
            if (!selector) return this;
            if (typeof selector === "string") {
                var elements = document.querySelectorAll(selector);
                Array.prototype.push.apply(this, elements);
            }
            return this;
        },

        each: function (callback) {
            for (let i = 0; i < this.length; i++) {
                callback.call(this[i], i, this[i]);
            }
            return this;
        },

        css: function (prop, value) {
            return this.each(function () {
                this.style[prop] = value;
            });
        }
    };

    // `init`의 프로토타입을 `jQuery.fn`과 연결 (핵심 패턴)
    jQuery.fn.init.prototype = jQuery.fn;
    // init로 생성된 객체(new jQuery.fn.init())가 jQuery.fn을 프로토타입으로 상속받

    return jQuery;
});