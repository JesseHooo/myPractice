// console.log(document.body.style.transition) //判断，空字符串说明支持
// console.log(document.body.style) //打印出所有style找出和transition有关的
(function() {
    var transitionEndEventName = {
        transition: 'transitionend',
        MozTransition: 'transitionend',
        WebkitTransition: 'WebkitTransitionEnd',
        OTransition: 'oTransitionEnd otransitionend'
    };
    var transitionEnd = '',
        isSupport = false;

    for (var name in transitionEndEventName) {
        if (document.body.style[name] !== undefined) {
            transitionEnd = transitionEndEventName[name];
            isSupport = true;
            break;
        }
    }

    window.nbapage = window.nbapage || {} //在全局作用域中暴露变量
    window.nbapage.transition = {
        end: transitionEnd,
        isSupport: isSupport,
    };
})();