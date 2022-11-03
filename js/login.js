$(document).ready(function() {
      
    const host = 'https://tiger-code.com'

    $("#login-btn").click(function() {
        var $account = $("#login-account").val();
        var $password = $("#login-password").val();
        var date = new Date();
        $.post(host+"/api/user/login", { account: $account, passwd: $password }, function(
            sdata
        ) {
                console.log($account, $password);
                let res = JSON.parse(sdata)
                console.log(res);
            if (res.code != 200) {
                $(".tips").removeClass('hidden')

                return;
            } else {
                console.log('登录成功'+res);
                let timeString = '早上好'
                if (date.getHours() > 6 && date.getHours() < 12) {
                   
                        timeString = '早上好'
                }
                else if (date.getHours() >= 12 && date.getHours() < 16) {
                    
                        timeString = '中午好'

                }
                else if (date.getHours() >= 16 && date.getHours() < 19) {
                    
                        timeString = '下午好'
                }
                else if (date.getHours() >= 19 && date.getHours() < 23) {
                    
                            timeString = '晚上好'
    
                    }
                else {
                    timeString='凌晨好'
                }
                console.log(res.userInfo);
                localStorage.setItem('loginUser', JSON.stringify( res.userInfo))
                localStorage.setItem('loginTime', timeString)
                // $(".just").css("display", "none");
                // $(".log").css("display", "none");
                // $(".log-back").css("display", "block");
                //console.log($('.log-back').children()[0]);
                $(location).attr('href', './index.html')
            }
        });
    });
    $('.login-input').click(()=>{
        $(".tips").addClass('hidden')
    
    })
});
$("#log-img").click(function() {
    window.location.href = "index.html";
});

// banner-密码块

