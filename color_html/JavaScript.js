$(function () {
    // $("#set").toggle();
    alert("点击背景('默认灰色背景')可调用控制窗口！");
    $("#btn").click(function () {
        $("#set").toggle();
    })
    $("#set").click(function () {
        // $("#set").toggle();
    })
    $("#size").bind("input propertychange",function(){
        $(".img").css({
            "width":$("#size").val(),
            "height":$("#size").val()
        })
    })
    $("#set-color").click(function () {
        // alert($("#color").val());
        $("#btn").css({
            "background":$("#color").val()
        })
    })
    $("#exit").click(function () {
        $("#set").toggle();
    })
})