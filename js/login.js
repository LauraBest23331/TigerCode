$(document).ready(function() {
      

    $("#login-btn").click(function() {
        var $account = $("#account").val();
        var $password = $("#psd").val();
        var date = new Date();
        $.post("/user/login", { account: $account, password: $password }, function(
            data
        ) {
            //	console.log(data.code);
            if (data.code == -1) {
                $(".just").css("display", "block");
                $(".just").children("p").text(data.msg);

                return;
            } else {
                $(".just").css("display", "none");
                $(".log").css("display", "none");
                $(".log-back").css("display", "block");
                //console.log($('.log-back').children()[0]);
                if (date.getHours() > 6 && date.getHours() < 12) {
                    $(".log-back")
                        .children("p")
                        .text("早上好，" + data.uname);
                }
                if (date.getHours() >= 12 && date.getHours() < 18) {
                    $(".log-back")
                        .children("p")
                        .html("中午好，" + data.uname);
                }
                if (date.getHours() >= 18 && date.getHours() < 24) {
                    $(".log-back")
                        .children("p")
                        .text("晚上好，" + data.uname);
                }
            }
        });
    });
});
$("#log-img").click(function() {
    window.location.href = "index.html";
});
// banner-密码块

