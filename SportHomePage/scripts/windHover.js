//使用jquery
// 使用js改变css样式会导致样式 重绘 和 回流
// $('.dropdown').hover(function() {
//     var $dropdown = $(this);
//     $dropdown.find('.nav-menu' || '.nbastore-menu').show();

// }, function() {
//     var $dropdown = $(this);
//     $dropdown.find('.nav-menu' || '.nbastore-menu').hide();
// });

//通过添加减少属性来实现更优
(function($) {
    // $('.dropdown').hover(function() {
    //     $(this).addClass('dropdownActive');
    // }, function() {
    //     $(this).removeClass('dropdownActive')
    // })
    defaults = {
        js: false,
        css3: false,
        animation: 'fadeSlideUpDown',
        delay: 100,
    }
    $.fn.extend({
        dropDown: function(option, options) {


            return this.each(function() { //调用dropDown之后变量暴露在全局变量中
                    var $this = $(this),
                        $option = $this.find(option),
                        dropdownActive = $this.find('.dropdown-arrow'),
                        $options = $.extend({}, defaults, typeof options === 'object' && options);

                    //不会初始化
                    $option.showHide($options);

                    $this.hover(function() {
                        if (dropdownActive !== undefined) {
                            dropdownActive.addClass('dropdownActive');
                        }
                        console.log($options.delay);
                        timer = setTimeout(function() { $option.showHide('show') }, $option.data('delayTime'));
                    }, function() {
                        clearTimeout(timer)
                        if (dropdownActive !== undefined) {
                            dropdownActive.removeClass('dropdownActive');
                        }
                        $option.showHide('hide');
                    })
                }

            )
        }
    })


    var $dropdown = $('.dropdown');
    $dropdown.dropDown('.dropdownLayer', {
        js: true,
        css3: true,
        animation: 'slideUpDown',
        delay: 80
    });

    var $btnUser = $('.side-user');
    $btnUser.dropDown('.user-menu', {
        js: true,
        css3: true,
        animation: 'fade',
        delay: 0
    });

    var $btnSearch = $('.btn-search'),
        $searchIpt = $('.search-ipt');
    $btnSearch.on('click', function() {
        $searchIpt.animate({
            width: '155px',
        }, 150);
        $btnSearch.addClass('clickActive')
    })




})(jQuery)