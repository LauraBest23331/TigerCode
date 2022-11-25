

const onlyRootEle = document.getElementById("main-root");
const curEle = document.getElementById("cur");
const maxEle = document.getElementById("max");
const allEle = document.getElementById("all");
const rootEle = document.getElementById("root");
const codeEle = document.getElementById("code");
const inputEle = document.getElementById("input");
const progressEle = document.getElementById("progress");
const host = 'https://tiger-code.com'
const trank = []
let loginUser = {}
let score = 0;
let account = ''
let onlyMain = onlyRootEle.checked;
let checkLength = 2;
let successCount = 0
let topChi = 0
let nowIndex = -1
let failCount = 0
let diffScore = -1
let mode = 0
function changeMainRoot() {
    onlyMain = onlyRootEle.checked;
    if (codeEle.textContent !== "") {
        codeEle.textContent = onlyMain ? root_code[index[0]].substring(0, 1) : root_code[index[0]];
    }
    inputEle.value = "";
    if (mode == 0) {
        mode = 1
    }else {
        mode = 0
    }
    console.log('模式'+mode);
    checkLength = onlyMain ? 1 : 2;
}

const root_char = ["","尢","弓","己","禾","","","㠯","牙","攴","","而","疒","走","力","氵","","戊","亅","黑","","","","","乃","","廿","屮","⺋","各","","","","阝","鼠","丶","舌","⺶","","巜","七","囗(框)","一","","九","刀","夂","石","","艹","攵","忄","龸","廴","","五","","宀","工","可","鹿","","氏","卯","钅","","雨","ス","","寸","乚","","廾","聿","","","丿","","欠","⺷","牜","礻","豆","","","鸟","","","白","母","爪","⻊","鱼","","丬","","镸","王","习","","矢","朩","不","","","犭","户","耂","","","","又","曰","彳","穴","","冖","","","","","古","千","丌","乍","谷","牛","毌","酉","旡","","","龶","贝","日","竹","冎","龴","","冂","龟","黄","十","⺗","斗","䒑","皮","","生","","龰","光","士","疋","","革","艮","爿","夫","","","幺","㐅","音","","豕","","衤","","","","歹","饣","","龙","乂","","","㡀","⺮","三","","卜","⻗","肀","","丰","亻","及","⺌","氺","","","卅","巛","罒","辶","ヿ","","民","耒","豸","","龷","片","","","甫","金","身","羊","臣","","且","","长","言","缶","","齐","丷","","毛","リ","","","舟","彑","火","甘","几","干","西","彡","","亼","","","","小","㐆","","糸","犬","","","子","厂","老","㇒","","丩","亾","立","","业","门","支","","纟","覀","壴","毋","亡","足","虫","曲","","耳","⾌","㐄","","","卵","扌","夊","乛","","卩","","亥","ㄋ","亍","无","示","月","","里","乙","瓦","⺪","未","四","弋","羽","⺁","⺧","甲","","禸","止","灬","匕","兔","凵","戈","巳","","韦","齿","〢","二","两","象","六","⺍","页","气","云","歺","勹","女","⺝","","了","⺇","彐","儿","心","册","亽","頁","ㄗ","","","至","也","","厶","斤","殳","巾","","鬼","","乌","㇏","隹","自","","非","","水","乡","","已","见","口","⺆","臼","面","食","麻","コ","夕","人","句","","","","辛","⺄","束","巴","⺊","土","","高","","芈","","辰","艸","侖","弗","骨","文","㇗","米","","川","の","","刂","","⽱","㇆","予","ㄅ","广","之","","〇","匚","尸","方","木","田","","爫","⺜","","","皿","龵","尤","目","车","仑","⺈","戉","","尚","㇀","用","","入","行","手","虎","黾","由","丁","冫","飞","丨","大","","卌","","山","亠","八","","⺀","讠","","","瓜","","","","","癶","井","","","衣","車","马","鬲"]
const root_code = ["pe","oy","bg","vj","xh","gy","zk","ki","ly","hp","pe","le","ab","pz","sl","ks","af","nu","gs","ph","yx","vy","ks","js","vn","si","ln","sc","zj","sg","ap","us","pd","te","ps","id","as","gy","pj","oc","rq","rk","fi","ps","kj","pd","hi","ms","bj","lc","hp","hx","ss","uy","pg","wu","ks","wg","ug","zk","xl","bv","bs","bm","zj","vj","tv","ry","ss","kc","ae","rq","lc","bv","wt","mh","tp","pd","eq","gy","qn","fs","zd","ae","hb","xn","xd","qc","ub","km","ya","pu","wv","ae","ap","nu","pc","nw","zx","as","os","em","cb","gd","tf","mq","mh","ql","ti","rq","zg","ry","or","wc","ex","bk","wg","sc","ts","by","gg","cg","lq","lc","wa","hg","qn","ku","yy","du","hu","xh","af","ob","or","ru","fg","ks","ic","mk","wg","nh","ns","hx","jd","hb","rp","xd","ls","ks","si","mg","gs","ts","qm","tg","ig","ap","hf","wy","xn","iy","bi","xy","cc","js","vb","ti","ch","vy","cs","gd","qs","es","tl","bi","si","qj","fb","ru","ts","bi","yb","tv","bv","pm","af","jr","cj","yx","ks","wb","ph","ls","oc","ys","uc","ae","mg","dm","al","mi","us","ln","ap","wy","yc","nf","zj","zs","gy","qc","oj","fq","us","pc","sy","af","hg","qq","hb","ls","vm","pd","cs","ap","io","bj","ch","zg","oj","eg","vx","es","nk","ji","pd","vb","af","yx","zs","ic","is","mq","pe","ru","hi","xc","ql","tp","mk","ij","fw","il","zj","cy","am","ci","vy","is","vx","hu","ku","fw","pu","cc","yq","vb","qe","zh","vk","ks","sc","bl","us","hi","ae","sc","zj","xl","kh","ae","wc","du","fs","vy","hi","dl","ai","rw","ts","aw","ys","pi","zv","xc","qn","sj","gg","vr","si","ch","vb","wt","mk","pg","vs","ch","gw","lc","pd","me","ml","wx","al","ks","wy","vq","by","gd","nk","bn","vy","bv","rl","oj","bj","pe","hx","ic","ji","wy","zj","ch","hb","yi","ey","oc","ks","tj","rs","rj","et","ag","or","xu","id","ui","oi","ns","rf","pd","ks","ix","hb","vi","ej","dk","mk","pj","bm","qs","zm","nk","lx","jr","gj","gg","zj","ti","nx","ae","xs","mb","yb","gt","bk","gg","bv","gy","ex","fc","lc","jl","tf","fg","vw","ae","pm","yx","oc","ae","bj","pd","sc","vr","ae","iv","ae","xg","ri","il","dk","nk","cs","lf","em","qt","vb","ya","or","ti","tf","am","us","oy","qm","yc","jl","xd","nu","wv","ss","fi","ty","bj","ju","px","us","zh","dm","dy","ad","wb","cf","gs","md","ig","lx","vn","vs","zt","hb","tj","wb","sy","us","oc","yg","ap","vk","ns","ty","hb","qj","af","bm","ti","yc","nm","ng"]
const total = root_char.length;// 字根总数
let pcount = 0
let maxProgress = 0;

let index = new Array(total); // 字根队列
let count = new Array(total); // 字根答对次数

// 这两个放在异步请求的结果里调用
// initCounter(); // 初始化进度
// showQuest();
getProgress();
function saveScore(count) {
    console.log('正在保存分数score='+ score);
    console.log('最高连鸡数：' + topChi);
    $.post(host+'/api/rank/addScore', {
        score: score,
        account: account,
        count: pcount,
        topchi: topChi
    } , ()=>{
        reflash()
    })
}
function reflash() {
    $.post(host + '/api/rank/getZigfRankList', (sdata)=>{
        let res = JSON.parse(sdata)
        if (res.code != 200) {
            return
        }
        let list = res.data
        list.sort((a, b)=>{
            return b.score - a.score
        })
            let _html = `
            <div class="rank-header">
                  <div class="he1">排行</div>
                  <div class="he2">虎名</div>
                  <div class="he3">分数</div>
                  <div class="he3">连🐔</div>

                  <div class="he4">段位</div>

                </div>
            `
         
        for (let i = 0; i < list.length; i++) {
            if (loginUser)
            if (list[i].uname == loginUser.uname) {
                score = list[i].score
                topChi = list[i].topchi
                console.log('当前最高连击：'+ topChi);
                $('#score').text(score)
                nowIndex = i
                $('.ranknum').text(i+1)
                if (i == 0) {
                    $('.diffScore').text('您已经天下无敌！')
                }else {
                    diffScore = list[i-1].score-list[i].score
                    $('.diffScore').text(list[i-1].score-list[i].score+'分')

                }
                $('.tdrww').text(showDrww(list[i].score))
                $('.tchi').text(topChi+'🐔')
                $('.login-color-box').removeClass('hidden')
                $('.unlogin-color-box').addClass('hidden')

            }
            if (i < 3) {
                _html += `
                <div class="rank-body" id="${'line'+i}">
                <div class="he1"><img class="chapion" src="pngs/chapion${i+1}.png" alt=""></div>
                <div class="he2">${list[i].uname}</div>
                <div class="he3">${list[i].score}</div>
                <div class="he3">${list[i].topchi}</div>
                <div class="he4">${showDrww(list[i].score)}</div>

            </div>
                `
            }
            else {
                _html += `
                <div class="rank-body" id="${'line'+i}">
             <div class="he1">${i+1}</div>
             <div class="he2">${list[i].uname}</div>
             <div class="he3">${list[i].score}</div>
             <div class="he3">${list[i].topchi}</div>
             <div class="he4">${showDrww(list[i].score)}</div>

           </div>
       `
            }
          
        }
        $('.rank').html(_html)
        if (nowIndex != -1) {

            $('#line'+nowIndex).addClass('colorHu')
            console.log('当前坐标'+nowIndex);
        }
})
}
function fhdz(func, time,count) {
    let timer
    return function() {
        let _this = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func(count)
        }, time)
    }
}
function debounce(fn, delay) {
    var timer = null
    return function () {
        if (timer != null) {
            console.log('节流中');
            clearInterval(timer)
        }
        timer = setInterval(fn, delay)
    }
}
let timer = null
function changePoints(count) {
    if (mode == 1) {
        $('#score').text(score)
        $('#tip').text('当前模式不支持参与排行')   
        return 
    }
    score = score+count*2
    $('.tchi').text(topChi+'🐔')

    pcount = count
    console.log("分数"+pcount*2);
    if (!loginUser) {
        $('#score').text(score)
        $('#tip').text('登录小虎账号以保存进度')
        return
    }
    $('#tip').text('当前连击'+successCount+'，'+count+'倍积分')
    loginUser.score = score
    $('#score').text(score)
    localStorage.setItem('loginUser', JSON.stringify(loginUser))
    if (timer != null) {
        clearTimeout(timer)
    }
    timer = setTimeout(()=>{
        saveScore()
    }, 3000)
}

function computeSuc() {
    if (successCount > 1000) {
        return 1000
    }else if (successCount > 500) {
        return 100
    }else if (successCount > 300) {
        return 50
    }else if (successCount > 200) {
        return 30
    }  else if (successCount > 100) {
        return 20
    }else if (successCount > 10) {
        return 2
    }else {
        return 1
    }

}
function computeFail() {
    if (score < 600) {
        return 0
    }
    else if (score < 4500) {
        return -1
    }
    else if (score < 9000) {
        return -2
    }else if (score < 21000) {
        return -5
    }else if (score < 51000) {
        return -10
    }else if (score < 110000) {
        return -20
    }else if (score >=110001) {
        return -2000
    }else  {
        return -1
    }
}
function inputChanged() {
    // 只要有空格就是错的

    if (input.value.indexOf(' ') > -1) {
        count[0] = -1;
        showQuest();
        successCount = 0
        failCount++;

            changePoints(computeFail())



    }
    if (inputEle.value.length >= checkLength) {
        let oldValue = inputEle.value.substring(0, checkLength);
        // 答对，该字根进度加1
        if (oldValue === root_code[index[0]].toLowerCase().substring(0, checkLength)) {
            count[0]++;
            successCount++;
            failCount = 0;
            nextRoot();

                changePoints(computeSuc())
            if (successCount > topChi) {
                topChi = successCount
            }


        }
        // 答错，该字根进度置为-1
        else {
            count[0] = -1;
            failCount++;
            showQuest();
            successCount = 0


            changePoints(computeFail())



         
          
        }


    }
}

function initCounter()  //初始化进度，所有字根初始学习进度为-1
{
    for (let i = 0; i < total; i++) {
        count[i] = -1;
        index[i] = i;
    }
}

function showQuest() // 显示问题
{
    rootEle.textContent = root_char[index[0]];
    if (count[0] === -1) // 第一次直接显示答案
    {
        codeEle.textContent = onlyMain ? root_code[index[0]].substring(0, 1) : root_code[index[0]];
    } else {
        codeEle.textContent = "";
    }
    inputEle.value = ""; // 清空输入框

    maxProgress = Math.max(maxProgress, index[0]);

    curEle.textContent = (index[0] + 1).toString();
    maxEle.textContent = (maxProgress + 1).toString();
    allEle.textContent = total.toString();
    progressEle.value = (maxProgress + 1).toString();
    progressEle.max = total.toString();
}

function nextRoot() // 下一个字根显示
{
    let tmp1;
    let tmp2;
    let move = 0;

    // 根据上一个字根的进度，将答对的字根移至字根队列后面
    if (count[0] === 0) {
        count[0] = 1;
        move = 2;
    } else if (count[0] === 1) {
        count[0] = 2;
        move = 4;
    } else if (count[0] === 2) {
        count[0] = 3;
        move = 8;
    } else if (count[0] === 3) {
        count[0] = 4;
        move = 12;
    } else if (count[0] === 4) {
        count[0] = 5;
        move = 20;
    } else if (count[0] === 5) {
        count[0] = 6;
        move = 30;
    } else if (count[0] === 6) {
        count[0] = 7;
        move = 60;
    } else if (count[0] === 7) {
        count[0] = 8;
        move = 100;
    } else if (count[0] >= 8) {
        count[0] = 8;
        move = total - 1;
    }

    tmp1 = index[0];
    tmp2 = count[0];
    move = Math.min(move, total- 1);
    for (let i = 0; i < move; i++) {
        index[i] = index[i + 1];
        count[i] = count[i + 1];
    }
    index[move] = tmp1;
    count[move] = tmp2;
    saveProgress();
    showQuest();
}


function getProgress() {
    let progress = JSON.parse(window.localStorage.getItem("progressPlus"));
    if (!progress) {
        initCounter();
        saveProgress();
    } else {
        index = progress.index;
        count = progress.count;
    }
    showQuest();
}


function saveProgress() {
    window.localStorage.setItem("progressPlus", JSON.stringify({
        "index": index,
        "count": count
    }));
}

function clearProgress() {
    localStorage.removeItem("progressPlus");
    initCounter();
    saveProgress();
    maxProgress = 0;
    showQuest();
    index[0] + 1
    if (index[0] + 1 <= 240) {

        successCount = 0
        changePoints(computeFail())
    }


}
function showDrww(e) {
    if (e >= 0 && e < 200) {
        return '黑铁Ⅲ'
    }
    else if (e >=200  && e < 400) {
        return '黑铁Ⅱ'
    }else if (e >= 400&& e < 600) {
        return '黑铁Ⅰ'
    }else if (e >= 600 && e < 1100) {
        return '青铜Ⅲ'
    }else if (e >=  1100&& e < 1600) {
        return '青铜Ⅱ'
    }else if (e >= 1600 && e < 2100) {
        return '青铜Ⅰ'
    }else if (e >= 2100 && e < 2900) {
        return '白银Ⅲ'
    }else if (e >= 2900 && e < 3700) {
        return '白银Ⅱ'
    }else if (e >=  3700&& e <4500) {
        return '白银Ⅰ'
    }else if (e >=  4500&& e < 6000) {
        return '黄金Ⅲ   '
    }else if (e >=  6000&& e < 7500) {
        return '黄金Ⅱ'
    }
    else if (e >= 7500 && e < 9000) {
        return '黄金Ⅰ'
    }else if (e >= 9000 && e < 12000) {
        return '铂金Ⅳ'
    }else if (e >= 12000 && e < 15000) {
        return '铂金Ⅲ'
    }else if (e >=  15000&& e < 18000) {
        return '铂金Ⅱ'
    }else if (e >=  18000&& e < 21000) {
        return '铂金Ⅰ'
    }else if (e >=  21000&& e < 27000) {
        return '钻石Ⅴ'
    }else if (e >=  27000&& e < 33000) {
        return '钻石Ⅳ'
    }else if (e >=  33000&& e <39000) {
        return '钻石Ⅲ'
    }else if (e >=  39000&& e < 45000) {
        return '钻石Ⅱ'
    }else if (e >=  45000&& e < 51000) {
        return '钻石Ⅰ'
    }else if (e >= 51000 && e <81000 ) {
        return '超凡大虎'
    }else if (e >= 81000 && e <150000 ) {
        return '傲世之虎'
    }
    else if (e >= 150000 && e < 1140000) {
        return '最强虎人' +(Math.trunc( ( e - 150000) / 10000)+1)+"星"
    }else if (e >= 1140000 && e < 11400000) {
        return '超级秃境' +(Math.trunc( ( e - 1140000) / 1000000)+1)+"重"

    }else if (e >= 11400000) {
        return '逆天虎神';

    }
    else {
        return '神秘段位'
    }
}
$(document).ready(()=>{
    
    

    loginUser = JSON.parse(localStorage.getItem('loginUser'))

    if (loginUser) {
        account = loginUser.account
        user = loginUser
        console.log(loginUser);
    }
    $('.box5').click(function(){
        $(location).attr('href', './login.html')
    })
    $.post(host + '/api/rank/getZigfRankList', (sdata)=>{
        let res = JSON.parse(sdata)
        if (res.code != 200) {
            return
        }
        let list = res.data
        list.sort((a, b)=>{
            return b.score - a.score
        })
            let _html = `
            <div class="rank-header">
                  <div class="he1">排行</div>
                  <div class="he2">虎名</div>
                  <div class="he3">分数</div>
                  <div class="he3">连🐔</div>

                  <div class="he4">段位</div>

                </div>
            `
         
        for (let i = 0; i < list.length; i++) {
            if (loginUser)
            if (list[i].uname == loginUser.uname) {
                score = list[i].score
                topChi = list[i].topchi
                console.log('当前最高连击：'+ topChi);
                $('#score').text(score)
                nowIndex = i
                $('.ranknum').text(i+1)
                if (i == 0) {
                    $('.diffScore').text('您已经天下无敌！')
                }else {
                    diffScore = list[i-1].score-list[i].score
                    $('.diffScore').text(list[i-1].score-list[i].score+'分')

                }
                $('.tdrww').text(showDrww(list[i].score))
                $('.tchi').text(topChi+'🐔')
                $('.login-color-box').removeClass('hidden')
                $('.unlogin-color-box').addClass('hidden')

            }
            if (i < 3) {
                _html += `
                <div class="rank-body" id="${'line'+i}">
                <div class="he1"><img class="chapion" src="pngs/chapion${i+1}.png" alt=""></div>
                <div class="he2">${list[i].uname}</div>
                <div class="he3">${list[i].score}</div>
                <div class="he3">${list[i].topchi}</div>
                <div class="he4">${showDrww(list[i].score)}</div>

            </div>
                `
            }
            else {
                _html += `
                <div class="rank-body" id="${'line'+i}">
             <div class="he1">${i+1}</div>
             <div class="he2">${list[i].uname}</div>
             <div class="he3">${list[i].score}</div>
             <div class="he3">${list[i].topchi}</div>
             <div class="he4">${showDrww(list[i].score)}</div>

           </div>
       `
            }
          
        }
        $('.rank').html(_html)
        if (nowIndex != -1) {

            $('#line'+nowIndex).addClass('colorHu')
            console.log('当前坐标'+nowIndex);
        }
    })
})
