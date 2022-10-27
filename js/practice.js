const onlyRootEle = document.getElementById("main-root");
const curEle = document.getElementById("cur");
const maxEle = document.getElementById("max");
const allEle = document.getElementById("all");
const rootEle = document.getElementById("root");
const codeEle = document.getElementById("code");
const inputEle = document.getElementById("input");
const progressEle = document.getElementById("progress");

let onlyMain = onlyRootEle.checked;
let checkLength = 2;

function changeMainRoot() {
    onlyMain = onlyRootEle.checked;
    if (codeEle.textContent !== "") {
        codeEle.textContent = onlyMain ? root_code[index[0]].substring(0, 1) : root_code[index[0]];
    }
    inputEle.value = "";
    checkLength = onlyMain ? 1 : 2;
}

const root_char = ["口〇","人亻","亼亽","一㇀","八丷䒑癶","日曰⺜","木朩","手扌龵","水氵⺍氺","十𠂇","丶㇏","宀冖","土","艹廾丌艸","又ス","心忄⺗","刀〢刂リ","丿㇒","大","言讠","辶","匕","女","火灬","厶龴","糸纟","小⺌𡭔","月⺝","冂凵⺆","阝","王","寸","儿","目","田","力","冫⺀","勹","贝","丨㇚","攵攴","㇆乛⺄乚ヿ㇗ㄋㄅの","禾","厂⺁","尸","立","⺈","金钅","止龰","夕","衣衤","子孑","竹⺮","卩ㄗ⺋","工","犬犭","彐彑","囗(框)","彡","巾","亠","广","白","示礻","车車","虫","斤","夂夊","米","廿龷","𠂉","牛牜⺧","匚匸コ","山","隹","几⺇","二","高","戈","艮","门","方","云","士","石","彳 亍","丰龶","页頁","足⻊","老耂","古","羊⺷⺶芈","也","疋⺪𤴓","爪爫","可","耳","夫","㐅","甘","聿肀","马","四罒","欠","屮","里","矢","皿","不","戊戉","户","疒","见","各","自","殳","弓","川巛巜","西覀","穴","走","文","己","至","未","幺","业","巴","片爿丬","干","巳","音","九","生","七","用","且","歹歺","尚龸","酉","舌","豕","丁","千","皮","母","鸟","而","羽","鱼𩵋","六","了","食饣","弋","弗𢎨𠂔","非","尤尢","舟","臼","亡亾","由","长镸","井","予","乍","辛","束","㠯","廴","册","乃","㐄","甫","无旡","氏","身㐆","缶","亥","及","毛","句","支","乙","三","五","之","两","斗","虎⾌","行","豆","谷","革","鬼","","牙","龙","卯","气","韦","黑","兔","壴","麻","仑侖","辰","光","象","齐","丩","民","曲","面","臣","骨冎","已","黄","耒","瓜","甲","瓦","卅","入","㡀","齿","鹿","飞","鬲","豸","乡","毋毌","乌","习","鼠","黾","卌","卵","龟","雨⻗","卜⺊","禸⽱"];
const root_code = ["dk", "jr", "ji", "fi", "hb", "or", "em", "us", "ks", "ns", "id", "wg", "gt", "lc", "ry", "hx", "pd", "tp", "md", "sy", "uc", "vb", "bn", "ch", "ks", "is", "yx", "vy", "mk", "te", "nw", "kc", "pe", "qm", "qt", "sl", "wb", "nk", "ob", "gs", "hp", "ae", "xh", "xc", "cs", "il", "xd", "zj", "si", "lx", "ti", "hi", "ru", "zj", "ug", "mq", "bj", "rk", "es", "rj", "zt", "xg", "ub", "fs", "yc", "cc", "tj", "hi", "pm", "ln", "et", "qn", "nk", "vs", "ui", "oj", "me", "gg", "pg", "ig", "am", "lf", "by", "gs", "ms", "wc", "af", "wy", "pu", "ql", "cg", "gy", "ey", "ts", "ya", "zk", "qe", "hf", "bi", "zg", "bv", "nm", "ys", "eq", "sc", "dl", "os", "am", "cb", "nu", "mh", "ab", "ej", "sg", "oi", "rs", "bg", "oc", "vx", "ex", "pz", "vw", "vj", "yi", "aw", "iy", "cy", "mb", "ap", "eg", "vs", "xy", "kj", "ls", "rq", "ty", "fq", "gd", "ss", "yy", "as", "js", "ad", "lq", "rp", "km", "xn", "le", "zv", "wv", "al", "rl", "qs", "pi", "tf", "rf", "oy", "io", "pj", "fw", "dy", "pc", "qj", "iv", "wa", "nx", "xs", "ki", "uy", "ic", "vn", "vk", "nf", "du", "bs", "zs", "af", "kh", "cj", "vm", "gj", "ci", "ai", "ts", "wu", "ri", "ml", "jd", "zh", "px", "zd", "hg", "tg", "ag", "bk", "ly", "tl", "bm", "vq", "gw", "ph", "wt", "hu", "zm", "jl", "fc", "mg", "wx", "qq", "ij", "dm", "yq", "bm", "qc", "fg", "vi", "nh", "al", "yg", "sj", "rw", "ls", "ju", "fb", "lc", "xl", "cf", "ng", "mi", "ix", "ku", "xu", "zx", "ps", "dm", "lx", "bl", "wg", "tv", "yb", "vr"];
const total = root_char.length;// 字根总数

let maxProgress = 0;

let index = new Array(total); // 字根队列
let count = new Array(total); // 字根答对次数

// 这两个放在异步请求的结果里调用
// initCounter(); // 初始化进度
// showQuest();
getProgress();

function inputChanged() {
    // 只要有空格就是错的
    if (input.value.indexOf(' ') > -1) {
        count[0] = -1;
        showQuest();
    }
    if (inputEle.value.length >= checkLength) {
        let oldValue = inputEle.value.substring(0, checkLength);
        // 答对，该字根进度加1
        if (oldValue === root_code[index[0]].toLowerCase().substring(0, checkLength)) {
            count[0]++;
            nextRoot();
        }
        // 答错，该字根进度置为-1
        else {
            count[0] = -1;
            showQuest();
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
    let progress = JSON.parse(window.localStorage.getItem("progress"));
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
    window.localStorage.setItem("progress", JSON.stringify({
        "index": index,
        "count": count
    }));
}

function clearProgress() {
    localStorage.removeItem("progress");
    initCounter();
    saveProgress();
    maxProgress = 0;
    showQuest();
}
