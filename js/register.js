$(document).ready(function() {
    const host = 'https://tiger-code.com'
    $("#reg-btn").click(function() {
        var $account = $("#account").val();
        var $password = $("#pwd").val();
        var $uname = $("#uname").val();
        console.log('验证用户名'+$uname+'是否被占用');
        $.post(
            host+"/api/user/isUnameExist", {
                uname: $uname
            },
            function(sdata) {
                let res = JSON.parse(sdata)
                if (res.code != 200 ) {
                    $('.tips-input-account').text("该昵称已经存在");
                    console.log('该昵称已经存在');
                    lineStateError();
                    return;
                }else {
                    $('.tips-input-account').text("");
                    $(".step-current .number").html("2");
                    $('#reg-btn').css('display', 'none')
                    $('#reg-btn-hid').removeClass('hidden')

                    lineStateRight()
                    console.log('验证通过');
                    setTimeout(() => {
                        $.post(
                            host+"/api/user/register", {
                                uname: $uname,
                                passwd: $password,
                                account:$account
                            },
                            ()=>{
                                $(location).attr('href', './login.html')
                            })
                    }, 1500);
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
        $(".step-current .number").html("1");
        $('.step-current .line p').removeClass('line-state-error-2');
    }
    $('#account').mouseout(function(){
        
        var $account = $("#account").val();
        var reg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if (!reg.test($account)) {
            console.log('账号格式有误');
            $('.tips-input-account').text("邮箱号格式不正确");
            $('.tips-input-account').removeClass('hidden')

            lineStateError();
           
        }else {
            lineStateRight();
            $('.tips-input-account').text('')
            $('.tips-input-account').addClass('hidden')

        }
    });
    $("#log-img").click(function() {
        window.location.href = "index.html";
    });
    $("#next").click(function() {
        // console.log(".next-btn.click()");
        var $account = $("#account").val();
        var $password = $("#pwd").val();
        var $account = $("#account").val();
        var reg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if (!reg.test($account)) {
            console.log('账号格式有误');
            $('.tips-input-account').text("邮箱号格式不正确");
            $('.tips-input-account').removeClass('hidden')
            lineStateError();
           
        }
        if ($password.length < 8 || $password.length > 16) {
            $('.tips-input-pwd').text("请输入8-16位密码");
            lineStateError();
            $('.tips-input-pwd').removeClass('hidden')

            return;
        }
        lineStateRight();
        $('.tips-input-pwd').addClass('hidden')

        $('.tips-input-account').text('')
        $('.tips-input-pwd').text('')
        $.post(host+'/api/user/isExist', {  account: $account }, function(sdata){
            let res = JSON.parse(sdata)
        if (res.code != 200 ) {
                $('.tips-input-account').text("手机号已经存在");
                lineStateError();
                return;
            }else {
                console.log('手机号验证通过');
            $('#box1').css('display', 'none');
            $('#box2').css('display', 'block');
            $('.step-current .line').addClass("line-current");
            $('.step-current').next().addClass("step-current");
        // console.log("success!");
            }

        });
        
        
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
