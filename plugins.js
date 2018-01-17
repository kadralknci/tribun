// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Headline Slider

$(function () {
    $(".tabAuto li:first").addClass("current");
    $(".tgh-box div").not(":first").hide();
    $(".tabAuto li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(".tabAuto li").index(this);
        $(".tgh-box div").eq(index).show().siblings().hide();
    });
});

//Rotate
$(function () {
    $(".tabAuto li:first").addClass("current");
    $(".tgh-box div:first").css('display', 'block');
    autoScroll();
    contentHover();
    currentHover();

});
var i = -1; //Tab Pertama
var n = $(".tabAuto li").length - 1;
var offset = 5000; //Waktu
var timer = null;

function autoScroll() {
    i++;
    if (i > n)
        i = 0;
    slide(i);
    timer = window.setTimeout(autoScroll, offset);
}

function slide(i) {
    $(".tabAuto li").eq(i).addClass("current").siblings().removeClass("current");
    $(".tgh-box div").eq(i).show().siblings().hide();
}

function currentHover() {

}

function contentHover() {
    $(".tgh-box div").hover(function () {
        if (timer) {
            clearTimeout(timer);
            i = $(this).prevAll().length;
            slide(i);
        }
    }, function () {
        timer = window.setTimeout(autoScroll, offset);
        this.blur();
        return false;
    });
}
