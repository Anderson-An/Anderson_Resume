$(function() {
    $("#fullpage").fullpage({
        verticalCentered: !1,
        sectionsColor: ["seagreen", "#cdbc9e", "skyblue", "lightblue", "#66c4f5"],
        navigation: !0,
        showActiveTooltip: !0,
        navigationTooltips: ["情怀", "理想", "作品", "联系", "关于"],
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        afterLoad: function(a, s) {
            1 == s && ($("#nav").stop().slideUp(50).css("opacity", 0), $(".onepage img").css({
                display: "block",
                animation: "zoomInRight 1.5s"
            })), 2 == s && ($("#nav").stop().slideDown(600).css("opacity", 1), $(".onepage img").css({
                display: " none"
            })), 3 == s && $("#nav").stop().slideUp(50).css("opacity", 0), 4 == s && ($("#nav").stop().slideUp(50).css("opacity", 0), $(".about img").addClass("out")), 5 == s && ($("#nav").stop().slideUp(50).css("opacity", 0), $(".fourpage").addClass("out"), $(".about img").removeClass("out"))
        }
    })
});

function styTime() {
    var e = new Date,
        t = e.getFullYear(),
        n = e.getMonth() + 1,
        r = e.getDate(),
        g = e.getDay(),
        a = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"),
        s = a[g],
        i = e.getHours(),
        o = e.getMinutes(),
        u = e.getSeconds(),
        y = "Anderson提醒您：当前时间：" + i + "时:" + o + "分:" + u + "秒\t\t\t   当前日期：" + t + "年" + n + "月" + r + "日 " + s;
    return document.getElementById("clock").innerHTML = y, styTime
}
setInterval(styTime(), 1e3);
$(function() {
    function i() {
        r.is(":animated") || (r.eq(e).fadeOut(o), e++, e > u - 1 && (e = 0), r.eq(e).fadeIn(o), s())
    }
    function n() {
        r.is(":animated") || (r.eq(e).fadeOut(o), e--, 0 > e && (e = u - 1), r.eq(e).fadeIn(o), s())
    }
    function s() {
        $(".banner ol li").eq(e).addClass("cur").siblings().removeClass("cur")
    }
    var e = 0,
        o = 800,
        l = 3500,
        c = null,
        a = !0,
        r = $(".banner ul li"),
        u = r.length;
    c = setInterval(i, l), $("span.ls").click(function(i) {
        1 == a && (n(), a = !1, setTimeout(function() {
            a = !0
        }, 1e3)), s()
    }), $("span.rs").click(function(n) {
        1 == a && (i(), a = !1, setInterval(function() {
            a = !0
        }, 1e3)), s()
    }), $(".banner ol li").click(function(i) {
        r.is(":animated") || $(this).hasClass("cur") || (r.eq(e).fadeOut(o), e = $(this).index(), r.eq(e).fadeIn(o), s())
    }), $(".banner span,.banner ol").mouseenter(function(i) {
        clearInterval(c)
    }).mouseleave(function(n) {
        c = setInterval(i, l)
    }), $(".banner").mouseenter(function(i) {
        $(this).children("span").show(100)
    }).mouseleave(function(i) {
        $(this).children("span").hide(100)
    }), $(".aside span").click(function(i) {
        $(this).hide(), $(".aside ul").css({
            transform: "translateX(0px)"
        })
    }), $(".aside  li").click(function(i) {
        $(this).addClass("cur").siblings().removeClass("cur"), $(".cla ul").eq($(this).index()).addClass("current").siblings().removeClass("current")
    });
    var e = 0,
        t = 0,
        d = 0;
    $(document).on("click", "ul.wangye i", function() {
        var i = $(this).parent("li").index();
        $(".box").fadeIn(600), $(".box div").addClass("curbox").siblings(".boximgui").removeClass("curbox"), $(".boximg img").eq(i).addClass("cur").siblings().removeClass("cur")
    }), $(document).on("click", "ul.ui i", function() {
        var i = $(this).parent("li").index();
        $(".box").fadeIn(600), $(".box div").addClass("curbox").siblings(".boximg").removeClass("curbox"), $(".boximgui img").eq(i).addClass("cur").siblings().removeClass("cur")
    }), $(document).on("click", "ul.pingmian i", function() {
        var i = $(this).parent("li").index();
        $(".box").fadeIn(600), $(".box div").addClass("curbox").prevAll().removeClass("curbox"), $(".boximgpm img").eq(i).addClass("cur").siblings().removeClass("cur")
    }), $(".box .cosle").click(function(i) {
        $(this).parent(".box").fadeOut(600)
    }), function() {
        $(".box .r").click(function(i) {
            return e++, e > 5 ? e = 5 : void $(".boximg img").eq(e).addClass("cur").siblings().removeClass("cur")
        }), $(".box .l").click(function(i) {
            return e--, 0 > e ? e = 0 : (console.log(e), void $(".boximg img").eq(e).addClass("cur").siblings().removeClass("cur"))
        })
    }(), function() {
        $(".box .r").click(function(i) {
            return t++, t > 5 ? t = 5 : void $(".boximgui img").eq(t).addClass("cur").siblings().removeClass("cur")
        }), $(".box .l").click(function(i) {
            return t--, 0 > t ? t = 0 : (console.log(t), void $(".boximgui img").eq(t).addClass("cur").siblings().removeClass("cur"))
        })
    }(), function() {
        $(".box .r").click(function(i) {
            return d++, d > 5 ? d = 5 : void $(".boximgpm img").eq(d).addClass("cur").siblings().removeClass("cur")
        }), $(".box .l").click(function(i) {
            return $(this), d--, 0 > d ? d = 0 : (console.log(d), void $(".boximgpm img").eq(d).addClass("cur").siblings().removeClass("cur"))
        })
    }()
});