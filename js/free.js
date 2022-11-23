


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
// const root_char = '疒疗宁成买今迅断扎丑扬与专蚌邦青堇勤缶窑卸魂魅忆交冥耒耗扪问盘版寐状北鼎鼐敌舍朱昧张弱义区丈驳寻尹录互虐印迎乐孵卯昴卿留湎妆氏纸聿律唐争剚妻芸充梳坏融贵飞居炎变严亦杰技吸卢眉假亚扣〇童眠黾绳抚既油杆视休棘亲坎须勿午乞穴空池敝唇振骨猾喎百丞刁孑沮县标礻礼荒曷死夙餐睿搞京亭膏狗申仕圣围祥美噗差幸芈扒平梁关善兴登祭失券容仔孔务复麸孜敲喜鼓息性添栅扁典丶玉刃春尺痕良即纠垃产船系细矛抒乡雍玄兹幽抖合令险论龠仄亻什豪缘汆耐咳官丸究抛拇永冰承没学益求聚鳏私勇悬惠毋毐贯苦开鼻艸啮需妨廿世燕共重垂歼姓卅带名岁卌舞芽吧夭亏仁晃耀庐所豸貌冂内冇凶周凹兕囧辆突犭独拓甫捕隔横勺包汇匡决巨吗汁截囊宏于戊咸臧越旺宰辩员驯州流巡粼夏咱冗风颃旦昔汩冒临矩矣优尬帐肆套召叨坚删帅渊万辨黎先允沈鸩顽戏或栈鹅烧墨嘿默代式武臼舀舆屎鬯鼬邋促跟街珩徒臣姬茸最阱塞佬孝相具直件特告挤齑餍喰饮果亩辈扉乏芝吊囗困亨披托东切殳设竹答监瓷瓯奴劲出逆发屯顿洛正此步徙捷甲匣办夯躺掌尝詹该队邓拂弟姊革勒依哀衤被农畏旅听丘兵乒乓袭丿么壬旋定疏兰漏雷角甬伯卑退扛难雁集拿打看段半击那判褎廷延旨呲化比以已己记凯降年尾毯扔凸汽氧禸禺噙仙巷祀吝斐洒贾朋肯丽夜然昨冫冻脊兆头彳待亍宋深龟阄兔冤免伍鱼鲜衡像顷頁寡耰历后急久玺庄禾种乘余鹿麒鸣岛赖辣柬乌呜章韵黯抓采捋乳卜补上卡叔军轩墼孤爬致室窒曹蛐驷罒罗尔当练少酋奠厨壹某柑其甚虎唬搋虑淦鉴针釜叩卫仓顾呵哥磨嘛躬殷亠市丹扇栩戳习'
let codeMode = true
let showText = '欢迎使用虎码在线练习程序，点击上面载文按钮进行载入剪贴板或者选文按钮载入预设的文章。'
// let showText = '测试'
let inputText = ''
let AllText = ''
let nowRow = -1
let MaxRow = -1
let errorCount = 0
let nextWord = ''
// 这两个放在异步请求的结果里调用
// initCounter(); // 初始化进度
// showQuest();
create()
function create() {
    $('.show_text').html(showText)
    
}
function checkChar() {
    $('.box4').html(nowOrdata.diff.split('〔')[0])
    $('.box4').addClass('text-sm')
}
function trans(e) {
    let result = e.split('')

    res = []
    
    while(result.length>0){
        var index=Math.floor(Math.random()*result.length);
        res.push(result[index]);
        result.splice(index,1);
    }
    let s = ''
    for(let i =0; i < res.length;i++) {
        s+=res[i]
    }
    return s
}
function bichai(e) {
    let text = '疗宁成买今迅断扎丑扬与专蚌邦青勤堇窑卸魂魅忆交冥耒耗扪问盘版寐状北鼎鼐敌舍朱昧张弱义区丈驳寻尹录互虐印迎乐孵卯昴卿留湎妆氏纸聿律唐争剚妻芸充坏融贵飞居炎变严亦杰技吸卢眉假亚扣〇童眠黾绳抚既油杆视休棘亲坎须勿午乞穴空池敝唇振骨猾喎百丞刁孑沮县标礼荒曷死夙餐睿搞京亭膏狗申仕圣围祥美噗差幸芈扒平关善兴登祭梁失券容仔孔务复麸孜敲喜鼓息性添栅扁典丶玉刃春尺痕良即纠垃产船系细矛抒乡雍玄兹幽抖合令论龠仄亻什豪缘汆耐咳官丸究抛拇永冰承没学益求聚鳏私勇悬惠毋毐贯苦开鼻艸啮需妨廿世共重歼姓卅带名岁卌舞芽吧夭亏仁晃耀庐所豸貌内冇凶周凹兕囧辆突独拓甫捕隔横勺包汇匡决巨吗汁截宏于戊咸臧越旺宰辩员驯州流巡粼夏咱冗风旦昔汩冒临矩矣优尬帐肆套召叨坚删帅渊万辨黎先允沈鸩顽戏或栈鹅烧墨嘿默代式臼舀舆屎鬯鼬邋促跟街珩徒臣姬茸阱塞佬孝相具直件特告挤齑餍喰饮果亩辈扉乏芝吊囗困亨披托东切设竹答监瓷瓯奴劲出逆发屯顿洛正此步徙捷甲匣办夯躺掌尝詹该队邓拂弟姊革勒依哀被农畏旅听丘兵乒乓袭丿么壬旋定疏兰漏雷角甬伯卑退扛难雁集拿打看段半击那判褎廷延旨呲化比以已己记降年尾毯扔凸汽氧禸禺噙仙巷祀吝斐洒贾朋肯丽夜然昨冻脊兆头彳待亍宋深龟阄兔冤免伍鱼鲜衡像顷頁寡耰历后急久玺庄禾种余鹿麒鸣岛赖辣柬乌呜章韵黯抓采捋乳补上卡叔军轩墼孤爬致室窒曹蛐驷罗尔当练少酋奠厨壹某柑其甚虎唬搋虑淦鉴针釜叩卫仓顾呵哥磨嘛躬殷市丹扇栩戳习'
    if (e == 0) {

        loadArical(text)
    }else {
        loadArical(trans(text))

    }

}
function hu1jian(e) {
    let text = '都得也了我到的为是行来说中一就道人能而可和不要如在大'
    if (e == 0) {

        loadArical(text)
    }else {
        loadArical(trans(text))

    }

}
function hou500() {
    let text = '珠鼓阶孔徐固偏陆诸遗爷述帝闭补编巨透弄尤鲁拥录吴墙货弱敌挑宽迹抽忍折输稳皇桌献蒙纷麻洗评挂童尊舍唯博剧乃混弹附迟敬杯鱼控塞剑厚佳测训牙洞淡盛县芳雅革款横累择乘刺载猛逃构赵杜庆途奔虎巧抗针徒圆闪谷绍聚额健诚鲜泪闲均序震仿缘戴婚篇亡奶忠烦赛闹协杰残懂丹柳妹映桥叹愈旅授享暴偷蓝氏寒宜弃丰延辈抢颜赞典冒眉烧厂唱径库川辞伴怒型纯贝票隔穷拜审伦悲柔启减页纵扫伟迫振瑞丈梁洲枪央触予孤缩洛损促番罢宋奋销幕犹锁珍抬陪妙摸峰劲镜沈夺昨哭讯貌谋泰侧贫扶阻贴申岸彼赏版抵泽插迅凭伊潮咱仙符宇肩尝递燕洁拒郎凝净遭仪薄卡末勒乌森诺呀壮忧沿惯丢季企壁惜婆袋朗零辛忆努舒枝凤灭韩胆灰旦孟陷俗绕疾瞧洪甲帐糊泛皆碰吹码奉箱倾胸堆狂仲圈冬餐厉腿尖括佩鬼欣垂跃港骗融撞塔紫荡敏郑赖滑允鸟课暂瓦祥染滚浮粗刑辆狗扑稍秦扎魂岛腾臣琴悉络摩措域冠竹殊豪呆萨旋喊寄悄倍祝剩督旗返召彻宾甘吐乔腰拔幅违详臂尺饮颗涉逼竞培惠亏叔伏唤鸡邻池怨奥侯骑漫拖俊尾恨贯凌兼询碎晨罚铺浓伍宿泉井繁粉绪筑恢匹尘辉魔仰董描距盗渡勤劝莲坦搭挺踪幽截荒恰慧邦颇焦醉废掩签丧灾鼻侵陶肃裁俱磨析奖匆瓶泥拾凉麦钢涌潜隆津搞蛋奈扰耐傅锦播墨偶捕惑飘屈鸣挤毁斜啦污赤慰饰锋覆汤寿跨羊'
    loadArical(trans(text))

}

function qian500(e) {
    let text = '的一是了不在有个人这上中大为来我到出要以时和地们得可下对生也子就过能他会多发说而于自之用年行家方后作成开面事好小心前所道法如进着同经分定都然与本还其当起动已两点从问里主实天高去现长此三将无国全文理明日些看只公等十意正外想间把情者没重相那向知因样学应又手但信关使种见力名二处门并口么先位头回话很再由身入内第平被给次别几月真立新通少机打水果最部何安接报声才体今合性西你放表目加常做己老四件解路更走比总金管光工结提任东原便美及教难世至气神山数利书代直色场变记张必受交非服化求风度太万各算边王什快许连五活思该步海指物则女或完马强言条特命感清带认保望转传儿制干计民白住字它义车像反象题却流且即深近形取往系量论告息让决未花收满每华业南觉电空眼听远师元请容她军士百办语期北林识半夫客战院城候单音台死视领失司亲始极双令改功程爱德复切随李员离轻观青足落叫根怎持精送众影八首包准兴红达早尽故房引火站似找备调断设格消拉照布友整术石展紧据终周式举飞片虽易运笑云建谈界务写钱商乐推注越千微若约英集示呢待坐议乎留称品志黑存六造低江念产刻节尔吃势依图共曾响底装具喜严九况跟罗须显热病证刚治绝群市阳确究久除闻答段官政类黄武七支费父统'
    if (e == 0) {

        loadArical(text)
    }else {
        loadArical(trans(text))

    }
}
function ming500() {
    let text = '渊卿胤龠绗珩街衍衡衔衙衢哀袤褒衰蓑簑襄攘壤镶瓤囊囔馕蠹莫暮幕墓慕蓦募摹寞模漠膜馍蟆貘谟亢坑杭航肮炕吭伉沆仓抢枪呛怆沧舱跄创苍疮共哄供洪拱烘巷港粪龚巽馔撰殿臀癜壬任荏凭赁恁衽妊饪淫婬霪廷挺蜓艇铤庭霆延诞涎蜒筵冉再蚺苒篝媾必泌秘馝谧宓蜜密峰锋蜂烽逢缝蓬篷降绛隆窿戎贼绒戒械诫武赋斌鹉以似拟娰代玳贷袋黛岱戈找划伐阀筏戋线浅贱溅残践栈饯盏笺或域蜮阈夏厦戛嘎兀杌尧烧绕浇娆桡挠晓侥跷骁翘刍㑇急稳隐瘾煞趋绉诌雏邹妥馁绥挼荽孚乳浮俘蜉捋殍酹真镇慎缜嗔阗瞋滇稹颠巅癫直值殖植置矗吉洁桔诘佶拮秸黠颉撷袁辕猿周绸凋稠碉惆啁倜鲷雕步涉频濒颦徙屣陟知智痴蜘踟式试拭轼赢嬴羸少抄秒炒钞砂沙莎省痧娑裟鲨挲眇渺缈汶浏贮伫享淳醇谆椁敦墩礅郭廓鹑亨哼烹亭停婷盲膏肓罔惘蜀镯躅勺约哟钓灼妁酌尥趵芍匀均筠钧韵药旬询绚殉峋洵徇荀留溜馏镏熘遛瘤聊卯仰抑铆柳迎昂幺幻幼呦拗坳蚴黝窈暴爆瀑曝率摔蟀玄炫眩弦泫畜搐蓄卑脾牌啤碑埤婢睥俾裨稗捭尹伊吚咿君郡裙笋窘敕整嫩漱嗽簌蔌难摊滩瘫隽携镌雉薙雁赝鹰膺焦瞧憔礁樵醮蘸蕉劁崔催摧瞿矍攫隼榫隺鹤榷霍嚯藿珍诊殄餮轸胗疹谬缪戮勠寥廖半胖拌伴绊畔冸叛判益溢缢隘盈楹电奄掩俺淹腌庵阉鹌今吟妗黔含晗馠娢焓念捻谂稔唸贪衾岑涔颔令零苓领邻拎怜伶泠岭玲聆羚呤翎瓴囹夬快筷块决缺诀抉袂玦央映怏秧殃泱鞅盎鸯'
    loadArical(trans(text))

}
function zhong500() {
    let text = '府查般斯倒突号树拿克初广奇愿欢希母香破谁致线急古既句京甚仍晚争游龙余护另器细木权星哪苦孩试朝阿队居害独讲错局男差参社换选止际假汉够诉资密案史较环投静宝专修室区料帮衣竟模脸善兵考规联团冷玉施派纪采历顾春责夜画惊银负续吗简章左块索酒值态按陈河巴冲阵境助角户乱呼灵脚继楼景怕停铁异谢否伤兰置医良承福科属围需退基右速适药怀击买素背岁土忙充排价质遇端列印贵疑露哥杀标招血礼弟亮齐穿脑委州某顺省讨尚维板散项状追笔副层沙养读习永草胡济执察归富座雨堂威忽苏船罪敢妇村著食导免温莫掌激慢托胜险寻守波雷沉秀职验靠楚略族藏丽渐刘仅肯担扬盘唐钟级毛营坚松皮供店饭范哈赶吧雪斗效临农味恶烟园烈配杂短卫跳孙曲封抓移顿律卖艺旧朋救防脱翻划迎痛校窗宣乡杨叶警限湖软掉财词压挥超屋秋跑忘馆暗班党宗坏技困登姐预耳席梦朱组旁份禁套亚益探康增诗戏伯晓含劳恩顶君庄谓付田毕纸研虚怪宁替犯灯优您姓例丝盖误架幸隐股毒娘占智佛床米凡介征彩演射祖欲束获舞圣伙梅普借私源镇睡缓升纳织歌宫概野醒夏互积街牌休摇洋败监骨批兄刀网率庭熟创访硬仁菜丁绿牛避阴拍雄秘缺卷姑尼油恐玩释遍握球降虑荣策肉妈迷检伸欧攻练育危厅啊睛摆茶勇判材抱亦妻吸喝趣嘴逐操午吉浪轮默毫冰'
    loadArical(trans(text))

    
}
function lrxu() {
    let text = $('#message_text').val()
    text = trans(text)
    $('#message_text').val(text)
}
function checkCode() {
    let tstring = nowOrdata.diff.split('〔')[1]
    $('.box3').html(tstring.substr(0, tstring.length-1)+'<br>' + nowOrdata.code
        
    )
    $('.box3').addClass('text-sm2')
}
function loadArical(e) {
    nextWord = e[0]
    if (!codeMode) {
        $('.show_text').html(e)
        $('#mpreocess').html(100)

        showText = e
    }else {
        let i
        let tempstring
        let count 
        AllText = e
        MaxRow = Math.trunc(e.length/10 ) 
        nowRow = 0
        $('.show_text').html(e.substr(0, 10))
        $('#mpreocess').html((nowRow / MaxRow * 100).toFixed(2))
        showText = e.substr(0, 10)
    }

}
function checkChar() {
    axios.post(host + '/api/diction/search', {
        key: nextWord
    }).then(res=>{
        nowOrdata = res.data.codeInfo
        console.log(nowOrdata);
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

        $('.box4').html(nowOrdata.diff.split('〔')[0])
        $('.box4').addClass('text-sm')
        errorCount++

    })
}

function checkCode() {
    axios.post(host + '/api/diction/search', {
        key: nextWord
    }).then(res=>{
        nowOrdata = res.data.codeInfo
        console.log(nowOrdata);
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
        let tstring = nowOrdata.diff.split('〔')[1]
        $('.box3').html(tstring.substr(0, tstring.length-1)+'<br>' + nowOrdata.code)
        errorCount++

        $('.box3').addClass('text-sm2')

    })
}
function nextRow() {

    nowRow++
    if (nowRow >   MaxRow) {
        alert('练习结束')
        $('#input').val('')
        $('.show_text').html('欢迎使用虎码在线练习程序，点击上面载文按钮进行载入剪贴板或者选文按钮载入预设的文章。')
        return
    }
    $('#backspace').html(errorCount)

    let tempstring = AllText.substring(nowRow*10, (nowRow+1)*10)
    $('#mpreocess').html((nowRow / MaxRow * 100).toFixed(2))
    showText =tempstring
    $('.show_text').html(showText)
    $('#cnumber').html(nowRow+1)
    $('#input').val('')

}
function reRow() {
    showText = trans(showText)
    $('.show_text').html(showText)
    $('#input').val('')

    $('#backspace').html(errorCount)

}
function loadText() {
    let text = $('#message_text').val()
    $('#exampleModal').modal('hide')
    loadArical(text)
}
let keydown_now = -1
$("#input").keydown(function(event){
    keydown_now = event.which
    if (keydown_now == 8) {
        errorCount++
        
        $('#backspace').html(errorCount)
    }
});


function inputChanged() {
    // 只要有空格就是错的
    let value = input.value
    tempSpanText = ''
    let lastWord = value.substr(value.length-1, value.length)
    // console.log(value.substr(value.length-1, value.length))
    if (/^[a-zA-Z]+$/.test(lastWord)) {
        console.log('char');
        return
    }
    let i = 0
    $('.box4').html(`<div class="title">查看拆分</div>`)
    $('.box4').removeClass('text-sm')
    $('.box3').html('<div class="title">查看编码</div>')
    $('.box3').removeClass('text-sm2')
    for (i = 0; i < value.length; i++) {
        if (value[i] == showText[i]) {
            tempSpanText += `<span style="background-color:#707070;float;">${showText[i]}</span>`
        }
        if (value[i] != showText[i]) {
            tempSpanText += `<span style="background-color:#ff3030;float;">${showText[i]}</span>`

        }
    }
    if (value.length >= showText.length) {
        if (codeMode ) {
            if (errorCount == 0) {

                nextRow()
            return

            }

            else {
                errorCount = 0
        $('#backspace').html(errorCount)

                reRow()
                return

            }

        }
    }

    tempText =tempSpanText + showText.substring(i, showText.length)
    nextWord = showText[i]
    $('.show_text').html(tempText)

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
    if (codeMode) {
        $('#diff').html('分段')
    }else {
        $('#diff').html('全文')

    }
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


