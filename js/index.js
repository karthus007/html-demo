/**
 * Created by xujinqiang on 2019/11/3.
 */

/**
 * 页面初始化完成之后加载
 */
$(function () {

    $("#show-list").click(function () {
        $(".content .list").css("display", "flex");
    })

    $("#hide-list").click(function () {
        $(".content .list").css("display", "none");
    })

    $("#show-model").click(function () {
        $(".mask").show()
        $(".model").css("display", "block");
        $("#name").val("陆冰雪")
        $("#age").val("18")
    })

    $("#hide-model").click(function () {
        $(".model").css("display", "none");
    })

})

/**
 * 页面引入顺序加载
 */
function hide_model() {
    $(".mask").hide()
    $(".model").hide()
}