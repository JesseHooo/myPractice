(function($) {
    //换一换功能
    $.fn.extend({
        switchPage: function() {
            this.each(function() { //                                       this是jquery对象
                var $this = $(this); //                                     this是遍历后回调函数的调用对象
                var index = 0;
                $this.click(function() {
                    var $elem = $(this).parent().next().children(); //      是触发click事件的对象
                    if (index >= ($elem.length - 1)) {
                        index = 0;
                    } else {
                        index += 1;
                    };
                    $($elem[index]).removeClass('hide')
                        .siblings().addClass('hide');
                    return index
                })
            })

        }
    })


    var $switchBtn = $('.switch-to-next');
    $switchBtn.switchPage();

})(jQuery)