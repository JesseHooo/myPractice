(function() {

    var $btnSearch = $('.btn-search'),
        $InpSearch = $('.search-ipt')


    //验证提交
    $btnSearch.on('click', function() {
        if ($.trim($InpSearch.val()) === '') { //$$trim()去掉空格
            return false;
        }
    })



    //keypress事件绑定
    $InpSearch.on('keydown', function(event) {
        if (event.keyCode == 13) { //绑定回车
            $btnSearch.click();
        }
    });


})()