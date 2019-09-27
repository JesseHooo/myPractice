(function($) {

    // 一、自动轮播
    var $scrollImg = $('.scrollImg'),
        $scrollImgCt = $('.scrollImg-content'), //                      获取ul
        $scrollIndex = $('.scrollImg-nav li'), //                       获取index a标签
        $scrollImgPrev = $('.scrollImg-prev'), //                       获取翻页符按钮
        $scrollImgNext = $('.scrollImg-next'),
        left = parseInt($scrollImgCt.css('left')); //                   保存坐标值的变量

    var slide = function(distance) { //                             相邻滑动变化函数slide
        return left -= distance;
    }

    var autoChange = function() { //                                    自动轮播函数autoChange
        timer1 = setInterval(function() {
            if (left <= -2040) {
                $scrollImgCt.animate({ 'left': slide(-2040) });
            } else {
                $scrollImgCt.animate({ 'left': slide(510) });
            }
            indexOn();

        }, 3000)
    }
    autoChange(); //                                                   启动autoChange

    var jump = function(distance) { //                                 跳序滑动变化函数jump
        return left = -distance;
    }

    $scrollIndex.each(function(index) { //                             绑定点击事件相应left值变化
        $(this).on("click", function() {
            _scroll(jump(510 * index));
        })
    })

    //二、设置index随着图片轮播变化
    var _Index = function() { //                                       获取当前图片索引号
        var currentIndex = -(left - 510) / 510 - 1,
            currentA = $scrollIndex[currentIndex];
        return currentA
    }
    var indexOn = function() {
        var currentA = _Index();
        $(currentA).addClass('current') //                             当前序号添加样式
            .siblings().removeClass('current'); //                     其他序号去除样式
    }

    //三、设置左右翻页按钮
    $scrollImg.hover(function() { //                                    hover事件翻页键显示
        $scrollImgNext.show();
        $scrollImgPrev.show();
    }, function() {
        $scrollImgNext.hide();
        $scrollImgPrev.hide();
    })

    $scrollImgPrev.click(function() { //                                上一页
        if (left >= 0) {
            _scroll(slide(2040));
        } else {
            _scroll(slide(-510));
        }
    })

    $scrollImgNext.click(function() { //                                下一页
        if (left <= -2040) {
            _scroll(slide(-2040));
        } else {
            _scroll(slide(510));
        }
    })

    var _scroll = function(left) { //                                 轮动变化（相邻或跳序）函数scroll
        clearInterval(timer1); //                                     解决与自动轮播动画重叠的bug
        $scrollImgCt.off().animate({ 'left': left })
        indexOn();
        autoChange();
    }

})(jQuery)