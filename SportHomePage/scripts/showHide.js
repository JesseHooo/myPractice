(function($) {
    var transition = window.nbapage.transition;

    function init($elem, hiddenCallback) {
        if ($elem.is(':hidden')) {
            $elem.data('status', 'hidden');
            if (typeof hiddenCallback === 'function') hiddenCallback();
        } else {
            $elem.data('status', 'shown');
        }
    };

    function show($elem, callBack) {
        if ($elem.data('status') === 'show') return;
        if ($elem.data('status') === 'shown') return;
        $elem.data('status', 'show').trigger('show');
        if (typeof callBack === 'function') callBack();
    };

    function hide($elem, callBack) {
        if ($elem.data('status') === 'hide') return;
        if ($elem.data('status') === 'hidden') return;
        $elem.data('status', 'hide').trigger('hide');
        if (typeof callBack === 'function') callBack();
    };

    var silent = {
        // show: function($elem, showCallback, shownCallback) {
        //     if (typeof showCallback === 'function') showCallback(); //1.使用回调函数避免函数功能耦合
        //     $elem.show();
        //     if (typeof shownCallback === 'function') shownCallback();
        // },使用此方法不便于多人合作，使用**发布订阅方式更佳
        show: function($elem, shownCallback) {
            show($elem, function() {
                $elem.show();
                $elem.data('status', 'shown').trigger('shown');
                if (typeof shownCallback === 'function') shownCallback();
            })

            // if ($elem.data('status') === 'show') return;
            // if ($elem.data('status') === 'shown') return; //使用data()获取状态
            // $elem.data('status', 'show').trigger('show'); //触发和发布事件类型，
            // $elem.show();
            // $elem.data('status', 'shown').trigger('shown'); //使用data()设置对象状态
            // if (typeof shownCallback === 'function') shownCallback();
        },

        hide: function($elem) {
            hide($elem, function() {
                $elem.hide();
                $elem.data('status', 'hidden').trigger('hidden');
            })

            // if ($elem.data('status') === 'hide') return;
            // if ($elem.data('status') === 'hidden') return;
            // $elem.data('status', 'hide').trigger('hide');
            // $elem.hide();
            // $elem.data('status', 'hidden').trigger('hidden');
        },

        init: init,
    }
    var css3 = {
        fade: {
            init: function($elem) {
                css3._init($elem, 'fadeOut')
            },
            show: function($elem) {
                css3._show($elem, 'fadeOut');
                // show($elem, function() {
                //     $elem.show();
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'shown').trigger('shown');
                //     });
                //     setTimeout(function() {
                //         $elem.removeClass('fadeOut'), 20
                //     });
                // })

                // if ($elem.data('status') === 'show') return;
                // if ($elem.data('status') === 'shown') return;
                // $elem.data('status', 'show').trigger('show');
                // $elem.show();
                // $elem.off('transitionend').one("transitionend", function() {
                //     $elem.data('status', 'shown').trigger('shown');
                // }); //off停止事件 one只绑定一次事件
                // setTimeout(function() {
                //     $elem.removeClass('fadeOut'), 20
                // });
            },
            hide: function($elem) {
                css3._hide($elem, 'fadeOut')
                    // hide($elem, function() {
                    //         $elem.off(transition.end).one(transition.end, function() {
                    //             $elem.hide();
                    //             $elem.data('status', 'hidden').trigger('hidden');
                    //         });
                    //         $elem.addClass('fadeOut');
                    //     })
                    // if ($elem.data('status') === 'hide') return;
                    // if ($elem.data('status') === 'hidden') return;
                    // $elem.data('status', 'hide').trigger('hide');
                    // $elem.off('transitionend').one("transitionend", function() {
                    //     $elem.hide();
                    //     $elem.data('status', 'hidden').trigger('hidden');
                    // });
                    // $elem.addClass('fadeOut');
            }
        },
        slideUpDown: {
            init: function($elem) {
                $elem.height($elem.height());
                css3._init($elem, 'slideUp');
            },
            show: function($elem) {
                css3._show($elem, 'slideUp');
                // show($elem, function() {
                //     $elem.removeClass('slideUp');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.show();
                //         $elem.data('status', 'shown').trigger('shown');
                //     })
                // })

            },
            hide: function($elem) {
                css3._hide($elem, 'slideUp');
                // hide($elem, function() {
                //     $elem.addClass('slideUp');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.hide();
                //         $elem.data('status', 'hidden').trigger('hidden');
                //     });
                // })
            }
        },
        slideLeftRight: {
            init: function($elem) {
                $elem.width($elem.width());
                css3._init($elem, 'slideLeft');
            },
            show: function($elem) {
                css3._show($elem, 'slideLeft');
                // show($elem, function() {
                //     $elem.removeClass('slideLeft');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'shown').trigger('shown');
                //     })
                // })
            },
            hide: function($elem) {
                css3._hide($elem, 'slideLeft');
                // hide($elem, function() {
                //     $elem.addClass('slideLeft');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'hidden').trigger('hidden');
                //     });
                // })
            }
        },
        fadeSlideUpDown: {
            init: function($elem) {
                $elem.height($elem.height());
                css3._init($elem, 'slideUp fadeOut');
            },
            show: function($elem) {
                css3._show($elem, 'slideUp fadeOut');
                // show($elem, function() {
                //     $elem.removeClass('slideUp fadeOut');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'shown').trigger('shown');
                //     })
                // })
            },
            hide: function($elem) {
                css3._hide($elem, 'slideUp fadeOut');
                // hide($elem, function() {
                //     $elem.addClass('slideUp fadeOut');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'hidden').trigger('hidden');
                //     });
                // })
            }
        },
        fadeSlideLeftRight: {
            init: function($elem) {
                $elem.width($elem.width());
                css3._init($elem, 'slideLeft fadeOut');
            },
            show: function($elem) {
                css3._show($elem, 'slideLeft fadeOut');
                // show($elem, function() {
                //     $elem.removeClass('slideLeft fadeOut');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'shown').trigger('shown');
                //     })
                // })
            },
            hide: function($elem) {
                css3._hide($elem, 'slideLeft fadeOut');
                // hide($elem, function() {
                //     $elem.addClass('slideLeft fadeOut');
                //     $elem.off(transition.end).one(transition.end, function() {
                //         $elem.data('status', 'hidden').trigger('hidden');
                //     });
                // })
            }
        }
    }
    css3._init = function($elem, className) {
        $elem.addClass('transition');
        init($elem, function() { $elem.addClass(className); });
    };
    css3._show = function($elem, className) {
        show($elem, function() {
            $elem.show();
            $elem.off(transition.end).one(transition.end, function() {
                $elem.data('status', 'shown').trigger('shown');
            });
            setTimeout(function() {
                $elem.removeClass(className), 20
            });
        })
    };
    css3._hide = function($elem, className) {
        hide($elem, function() {
            $elem.off(transition.end).one(transition.end, function() {
                $elem.hide();
                $elem.data('status', 'hidden').trigger('hidden');
            });
            $elem.addClass(className);
        })
    };

    var js = {

        fade: {
            init: function($elem) {
                js._init($elem);
            },

            show: function($elem) {
                js._show($elem, 'fadeIn');
            },
            hide: function($elem) {
                js._hide($elem, 'fadeOut');
            }
        },
        slideUpDown: {


            init: function($elem) {
                js._init($elem);
            },

            show: function($elem) {
                js._show($elem, 'slideDown');
            },
            hide: function($elem) {
                js._hide($elem, 'slideUp');
            }
        },
        slideLeftRight: {
            init: function($elem) {
                js._init($elem, js._customInit($elem, {
                    'width': 0,
                    'padding-left': 0,
                    'padding-right': 0
                }))
            },
            show: function($elem) {
                js._customShow($elem);

            },
            hide: function($elem) {
                js._customHide($elem, {
                    'width': 0,
                    'padding-left': 0,
                    'padding-right': 0
                })
            }
        },
        fadeSlideUpDown: {
            init: function($elem) {
                js._init($elem, js._customInit($elem, {
                    'opacity': 0,
                    'height': 0,
                    'padding-top': 0,
                    'padding-buttom': 0
                }))
            },
            show: function($elem) {
                js._customShow($elem);
            },
            hide: function($elem) {
                js._customHide($elem, {
                    'opacity': 0,
                    'height': 0,
                    'padding-top': 0,
                    'padding-buttom': 0
                })
            }
        },
        fadeSlideLeftRight: {
            init: function($elem) {
                js._init($elem, js._customInit($elem, {
                    'opacity': 0,
                    'width': 0,
                    'padding-left': 0,
                    'padding-right': 0
                }))
            },
            show: function($elem) {
                js._customShow($elem);
            },
            hide: function($elem) {
                js._customHide($elem, {
                    'opacity': 0,
                    'width': 0,
                    'padding-left': 0,
                    'padding-right': 0
                })
            }
        }
    }

    js._init = function($elem, callBack) {
        init($elem);
        $elem.removeClass('transition');
        if (typeof callBack === 'function') callBack()
    };
    js._show = function($elem, mode) {
        show($elem, function() {
            $elem.stop()[mode](function() {
                $elem.data('status', 'shown').trigger('shown');
            });
        })
    };
    js._hide = function($elem, mode) {
        hide($elem, function() {
            $elem.stop()[mode](function() {
                $elem.data('status', 'hidden').trigger('hidden');
            })
        })
    }
    js._customInit = function($elem, option) { //option 传入对象
            var styles = {};
            for (p in option) {
                styles[p] = $elem.css(p);
            }
            $elem.data('styles', styles);
        } //初始化固定在了show?;
    js._customShow = function($elem) {
        console.log($elem.data('styles'));
        show($elem, function() { //???
            $elem.show();
            $elem.stop().animate($elem.data('styles'), function() {
                $elem.data('status', 'shown').trigger('shown');
            });
        })
    };
    js._customHide = function($elem, option) {
        hide($elem, function() {
            $elem.stop().animate(option, function() {
                $elem.hide();
                $elem.data('status', 'hidden').trigger('hidden');
            })
        })
    }



    function showHide($elem, options) { //根据传入的参数初始化
        var mode = null;
        if (options.css3 && transition.isSupport) {
            mode = css3[options.animation];
        } else if (options.js) {
            mode = js[options.animation];
        } else {
            mode = silent;
        }
        mode.init($elem);
        return {
            show: $.proxy(mode.show, this, $elem), //将$elem传参给show
            hide: $.proxy(mode.hide, this, $elem)
        };
    }

    $.fn.extend({
        showHide: function(option) {
            return this.each(function() {
                var $this = $(this),
                    options = typeof option === 'object' && option,
                    mode = $this.data('showHide');
                if (!mode) {
                    $this.data('showHide', mode = showHide($this, options));
                    $this.data('delayTime', options.delay);
                }

                if (typeof mode[option] === 'function') {
                    console.log(mode);
                    mode[option]();
                }
            });
        }
    })
})(jQuery)