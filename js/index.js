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
        $("#name").val("王总")
        $("#age").val("18")
        $(".model").removeClass("bounceOutDown").addClass("bounceInDown")
        $(".model").css("display", "block");

    })

})

/**
 * 页面引入顺序加载
 */
function hide_model() {
    $(".model").removeClass("bounceInDown").addClass("bounceOutDown")
    setTimeout(function () {
        $(".model").hide();
        $(".mask").hide();
    }, 600);

}