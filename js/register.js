$(document).ready(function() {
    $("#regist-btn").click(function() {
        var $account = $("#account").val();
        var $password = $("#password").val();
        var $sex = $("input:radio:checked").val();
        var $uname = $("#uname").val();
        $.post(
            "/user/regist", {
                account: $account,
                password: $password,
                sex: $sex,
                uname: $uname,
            },
            function(data) {
                if (data.code == 1) {
                    window.location.href = "index.html";
                } else { 
                    window.alert(data.msg);
                }
            }
        );
    });
    function lineStateError() {
        $(".step-current").addClass("step-error");
        $(".step-current .number").html("!");
        $('.step-current .line p').addClass('line-state-error-2');
    }
    function lineStateRight() {
        $(".step-current").removeClass('step-error');
        $(".number").html("1");
        $('.step-current .line p').removeClass('line-state-error-2');
    }
    $('#account').mouseout(function(){
        
        var $account = $("#account").val();
        var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    
        if (!reg.test($account)) {
            // lineStateError();
        }
    });
    $("#log-img").click(function() {
        window.location.href = "index.html";
    });
    $(".next-btn").click(function() {
        // console.log(".next-btn.click()");
        var $account = $("#account").val();
        var $password = $("#pwd").val();
        if ($account.length  != 11) {
            $('.tips-input-account').text("手机号格式不正确");
            lineStateError();
            return;
        }
        if ($password.length < 8 || $password.length > 16) {
            $('.tips-input-pwd').text("请输入8-16位密码");
            lineStateError();
            return;
        }
        $.post('/usr/isAccountExist', {  account: $account }, function(data){
            if (data.code == -1) {
                $('.tips-input-account').text("手机号已经存在");
                // lineStateError();
                return;
            }

        });
        $('#box1').css('display', 'none');
        $('#box2').css('display', 'block');
        $('.step-current .line').addClass("line-current");
        $('.step-current').next().addClass("step-current");
        // console.log("success!");
        
    });
    
});
var eye = document.getElementById("eye");
var psd = document.getElementById("pwd");
var flag = 0;
eye.onclick = function() {
    if (flag == 0) {
        eye.src = "./images/open.png";
        psd.type = "text";
        flag = 1;
    } else {
        eye.src = "./images/close.png";
        psd.type = "password";
        flag = 0;
    }
};
function Isaccount(str) {
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(str);
}
