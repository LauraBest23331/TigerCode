

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
let checkLength = 2;
let successCount = 0
let topChi = 0
let nowIndex = 0
let failCount = 0
let diffScore = -1
let mode = 0
let nowOrdata = {}
const root_char = '疒疗宁成买今迅断扎丑扬与专蚌邦青堇勤缶窑卸魂魅忆交冥耒耗扪问盘版寐状北鼎鼐敌舍朱昧张弱义区丈驳寻尹录互虐印迎乐孵卯昴卿留湎妆氏纸聿律唐争剚妻芸充梳坏融贵飞居炎变严亦杰技吸卢眉假亚扣〇童眠黾绳抚既油杆视休棘亲坎须勿午乞穴空池敝唇振骨猾喎百丞刁孑沮县标礻礼荒曷死夙餐睿搞京亭膏狗申仕圣围祥美噗差幸芈扒平梁关善兴登祭失券容仔孔务复麸孜敲喜鼓息性添栅扁典丶玉刃春尺痕良即纠垃产船系细矛抒乡雍玄兹幽抖合令险论龠仄亻什豪缘汆耐咳官丸究抛拇永冰承没学益求聚鳏私勇悬惠毋毐贯苦开鼻艸啮需妨廿世燕共重垂歼姓卅带名岁卌舞芽吧夭亏仁晃耀庐所豸貌冂内冇凶周凹兕囧辆突犭独拓甫捕隔横勺包汇匡决巨吗汁截囊宏于戊咸臧越旺宰辩员驯州流巡粼夏咱冗风颃旦昔汩冒临矩矣优尬帐肆套召叨坚删帅渊万辨黎先允沈鸩顽戏或栈鹅烧墨嘿默代式武臼舀舆屎鬯鼬邋促跟街珩徒臣姬茸最阱塞佬孝相具直件特告挤齑餍喰饮果亩辈扉乏芝吊囗困亨披托东切殳设竹答监瓷瓯奴劲出逆发屯顿洛正此步徙捷甲匣办夯躺掌尝詹该队邓拂弟姊革勒依哀衤被农畏旅听丘兵乒乓袭丿么壬旋定疏兰漏雷角甬伯卑退扛难雁集拿打看段半击那判褎廷延旨呲化比以已己记凯降年尾毯扔凸汽氧禸禺噙仙巷祀吝斐洒贾朋肯丽夜然昨冫冻脊兆头彳待亍宋深龟阄兔冤免伍鱼鲜衡像顷頁寡耰历后急久玺庄禾种乘余鹿麒鸣岛赖辣柬乌呜章韵黯抓采捋乳卜补上卡叔军轩墼孤爬致室窒曹蛐驷罒罗尔当练少酋奠厨壹某柑其甚虎唬搋虑淦鉴针釜叩卫仓顾呵哥磨嘛躬殷亠市丹扇栩戳习'
const total = root_char.length;// 字根总数
let pcount = 0
let codeMode = false
let maxProgress = 0;
let codeList = []
let ecode = ''
let fcode = ''
let index = new Array(total); // 字根队列
let count = new Array(total); // 字根答对次数

// 这两个放在异步请求的结果里调用
// initCounter(); // 初始化进度
// showQuest();
getProgress();

function checkChar() {
    $('.box4').html(nowOrdata.diff.split('〔')[0])
    $('.box4').addClass('text-sm')
}
function checkCode() {
    let tstring = nowOrdata.diff.split('〔')[1]
    $('.box3').html(tstring.substr(0, tstring.length-1)+'<br>' + nowOrdata.code
        
    )
    $('.box3').addClass('text-sm2')
}
function inputChanged() {
    // 只要有空格就是错的
    let value = input.value
    if (codeMode) {
        if (value == fcode) {
            count[0]++;
            nextRoot();
            nowIndex++;
    
        }
        if (value.substr(value.length-1)=== ' ') {
            value = value.substr(0,value.length-1)
            if (ecode == value) {
                count[0]++;
                nowIndex++;
                nextRoot();
            }
    
    
        }
    }else {
        console.log(nowIndex,root_char[nowIndex] );
        if (value === root_char[nowIndex]) {
            nowIndex++;
            nextRoot();
        }
    }
 
    // if (inputEle.value.length >= checkLength) {
    //     let oldValue = inputEle.value.substring(0, checkLength);
    //     // 答对，该字根进度加1
    //     if (oldValue === root_code[index[0]].toLowerCase().substring(0, checkLength)) {
    //         count[0]++;
    //         successCount++;
    //         failCount = 0;
    //         nextRoot();

    //             changePoints(computeSuc())
    //         if (successCount > topChi) {
    //             topChi = successCount
    //         }


    //     }
    //     // 答错，该字根进度置为-1
    //     else {
    //         count[0] = -1;
    //         failCount++;
    //         showQuest();
    //         successCount = 0


    //         changePoints(computeFail())



         
          
    //     }


    // }
}

function initCounter()  //初始化进度，所有字根初始学习进度为-1
{
    for (let i = 0; i < total; i++) {
        count[i] = -1;
        index[i] = i;
    }
    nowIndex = 0
}
function changeMainRoot() {
    codeMode = !codeMode
    console.log(codeMode);
}
function showQuest() // 显示问题
{
    // rootEle.textContent = root_char[index[0]];
    rootEle.textContent = '加载中...';

    codeEle.textContent = "";

    inputEle.value = ""; // 清空输入框
    inputEle.focus()

    progressEle.value = (maxProgress + 1).toString();

    axios.post(host + '/api/diction/search', {
        key: root_char[nowIndex]
    }).then(res=>{
        nowOrdata = res.data.codeInfo
        console.log(nowOrdata);
        rootEle.textContent = nowOrdata.org
        let templist = nowOrdata.code.split(' ')
        console.log(templist);
        codeList = templist
        if(templist[1]) {
            ecode = templist[1]
        }
        if(templist[0]) {
            fcode = templist[0]
        }
        if(templist.length == 1) {
            fcode = templist[0]
        }else if (templist.length == 2) {
                ecode = templist[0]
                fcode = templist[1]
        }
        $('#input').attr('disabled',false);
    inputEle.focus()
    $('.box4').html(`<div class="title">查看拆分</div>`)
    $('.box4').removeClass('text-sm')
    $('.box3').html('<div class="title">查看编码</div>')
    $('.box3').removeClass('text-sm2')
    $('#cur').html(nowIndex+1)
    $('#all').html(total)
    progressEle.value = (nowIndex + 1).toString();
    progressEle.max = total.toString();
    })
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
    let progress = JSON.parse(window.localStorage.getItem("progressPro"));
    if (!progress) {
        initCounter();
        saveProgress();
    } else {
        nowIndex = progress.index;
    }
    showQuest();
}


function saveProgress() {
    window.localStorage.setItem("progressPro", JSON.stringify({
        "index": nowIndex,

    }));
}

function clearProgress() {
    localStorage.removeItem("progressPro");
    initCounter();
    saveProgress();
    maxProgress = 0;
    showQuest();
    


}

$(document).ready(()=>{
    
    

})
