(function($) {
    var $fixedHeader = $('.fixed-header');
    if ($(window).scrollTop() >= 70) {
        // $fixedHeader.show();
        $fixedHeader.css({ "visibility": "visible" });
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 70) {
            // $fixedHeader.show();
            $fixedHeader.css({ "visibility": "visible" });
        } else {
            // $fixedHeader.hide();
            $fixedHeader.css({ "visibility": "hidden" });
        }
    })

    var $toTopBtn = $(".floor-top");
    $toTopBtn.click(function() {
        $(window).scrollTop(0)
    })
})(jQuery)