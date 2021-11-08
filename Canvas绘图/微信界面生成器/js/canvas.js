/*
 * @Author: leyuans
 * @Date: 2021-06-02 16:18:42
 * @LastEditTime: 2021-06-03 16:26:57
 * @LastEditors: leyuans
 * @Description: 
 * @FilePath: \web-projects\Canvas绘图\微信界面生成器\js\canvas.js
 */

var flag_a = [],
    flag_b = [];
for(let i = 1; i < 9; i++) {
    flag_a[i] = 0;
    flag_b[i] = 0;
}

function mainView(ctx) {
    //绘制主屏幕
    ctx.beginPath();
    ctx.rect(0,0,375,667);
    ctx.fillStyle = "rgb(236,236,236)";
    ctx.fill();

    //状态栏
    ctx.beginPath();
    ctx.rect(0,0,375,20);
    ctx.fillStyle = "rgb(44,44,44)";
    ctx.fill();
    ctx.beginPath();
    var statusBar = new Image();
    statusBar.src = "./images/bar.png";
    statusBar.onload = function () {
        ctx.drawImage(statusBar,5,2);
    };
    
    //导航栏
    ctx.beginPath();
    ctx.rect(0,20,375,43);
    ctx.fillStyle = "rgb(44,44,44)";
    ctx.fill();
    ctx.beginPath();
    var back = new Image();
    back.src = "./images/back.png";
    back.onload = function () {
        ctx.drawImage(back,0,16);
    }
    ctx.beginPath();
    var person = new Image();
    person.src = "./images/person.png";
    person.onload = function () {
        ctx.drawImage(person,336,16);
    }
    ctx.beginPath();
    ctx.font ="lighter 16px Heiti SC";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("微信", 24, 32);

    ctx.beginPath();
    ctx.font = "lighter 18px STHeitiSC-Light";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(getHisName(),187,32);

    //聊天框
    ctx.beginPath();
    ctx.rect(0,63,375,556);
    ctx.fillStyle = "rgb(236,236,236)";
    ctx.fill();
    
    //输入栏
    ctx.beginPath();
    ctx.rect(0,619,375,48);
    ctx.fillStyle = "rgb(219,219,219)";
    ctx.fill();
    ctx.beginPath();
    var inputBar = new Image();
    inputBar.src = "./images/inputbar.png";
    inputBar.onload = function () {
        ctx.drawImage(inputBar,5,621);
    }
}
//绘制左边消息框的矩形部分
function drawLeftMsg(ctx,x,y,w,h) {
    ctx.beginPath();
    ctx.moveTo(x+5,y);
    ctx.lineTo(x+w,y);
    ctx.arcTo(x+w+5,y,x+w+5,y+5,5);
    ctx.lineTo(x+w+5,y+h);
    ctx.arcTo(x+w+5,y+h+5,x+w,y+h+5,5);
    ctx.lineTo(x+5,y+h+5);
    ctx.arcTo(x,y+h+5,x,y+h,5);
    ctx.lineTo(x,y+5);
    ctx.arcTo(x,y,x+5,y,5);
}
//绘制右边消息框的矩形部分
function drawRightMsg(ctx,x,y,w,h) {
    ctx.beginPath();
    ctx.moveTo(x,y+5);
    ctx.lineTo(x,y+h);
    ctx.arcTo(x,y+h+5,x-5,y+h+5,5);
    ctx.lineTo(x-w,y+h+5);
    ctx.arcTo(x-w-5,y+h+5,x-w-5,y+h,5);
    ctx.lineTo(x-w-5,y+5);
    ctx.arcTo(x-w-5,y,x-w,y,5);
    ctx.lineTo(x-5,y);
    ctx.arcTo(x,y,x+5,y,5);

}

//绘制左边消息框的三角形
function drawMyMsg(ctx,x,y,w,h) {
    ctx.beginPath();
    ctx.moveTo(x,y+12);
    ctx.lineTo(x-6,y+12+5);
    ctx.lineTo(x,y+12+5+5);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();
    drawLeftMsg(ctx,x,y,w,h);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();
}
//绘制右边消息框的三角形
function drawHisMsg(ctx,x,y,w,h) {
    ctx.beginPath();
    ctx.moveTo(x,y+12);
    ctx.lineTo(x+6,y+12+5);
    ctx.lineTo(x,y+12+5+5);
    ctx.fillStyle = "rgb(162,230,91)";
    ctx.fill();
    drawRightMsg(ctx,x,y,w,h);
    ctx.fillStyle = "rgb(162,230,91)";
    ctx.fill();
}
//绘制左边的头像
function drawMyHead(ctx,head_y) {
    ctx.beginPath();
    ctx.rect(10,head_y,40,40);
    ctx.fillStyle = "#ff6666";
    ctx.fill();
    ctx.beginPath();
    var face1 = new Image();
    face1.src = document.getElementById("imgHead2").src;
    face1.onload = function () {
        ctx.drawImage(face1,10,head_y,40,40);
    }

}

//绘制右边的头像
function drawHisHead(ctx,head_y) {
    ctx.beginPath();
    ctx.rect(375-50,head_y,40,40);
    ctx.fillStyle = "#ff6666";
    ctx.fill();
    ctx.beginPath();
    var face2 = new Image();
    face2.src = document.getElementById("imgHead1").src;
    face2.onload = function () {
        ctx.drawImage(face2,375-50,head_y,40,40);
    }
}

//绘制左边的消息
function drawLeftTxt(ctx,y,str) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = "16px STHeitiSC-Light";
    if (str.length > 13) {
        drawLongText(ctx,61+12,y+12,0,str);
    } else {
        ctx.fillText(str,61+12,y+12);
    }
}

//绘制右边的消息
function drawRightTxt(ctx,y,str) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.font = "16px STHeitiSC-Light";
    if (str.length > 13) {
        drawLongText(ctx, 375 - 61 - 4, y + 12, 1, str);
    } else {
        ctx.fillText(str,375-61-9,y+12);
    }
}

//
function drawLeft(ctx,y,str) {
    ctx.beginPath();
    var h = 40;
    ctx.font = "16px STHeitiSC-Light";
    var w = ctx.measureText(str).width+15;
    if (str.length > 13 && str.length <= 26) {
        w = 230;
        h = h + 20;
    } else if (str.length > 26){
        w = 230;
        h = h + 40;
    }
    drawMyMsg(ctx,61,y,w,h-5);
    drawMyHead(ctx,y);
    drawLeftTxt(ctx,y,str);
}

function drawRight(ctx,y,str) {
    ctx.beginPath();
    var h = 40;
    ctx.font = "16px STHeitiSC-Light";
    var w = ctx.measureText(str).width+15;
    if (str.length > 13 && str.length <= 26) {
        w = 230;
        h = h + 20;
    } else if (str.length > 26) {
        w = 230;
        h = h + 40;
    }
    drawHisMsg(ctx,375-61,y,w,h-5);
    drawHisHead(ctx,y);
    drawRightTxt(ctx,y,str);
}

function drawLeftExp(ctx,y,img) {
    ctx.beginPath();
    var b = img % 10;
    var exp = new Image();
    exp.src = "./images/exp/"+b+".png";
    exp.onload = function () {
        ctx.drawImage(exp,72,y+10);
    }
    drawMyMsg(ctx,61,y,40,35);
    drawMyHead(ctx,y);
}

function drawRightExp(ctx,y,img) {
    ctx.beginPath();
    var b = img % 10;
    var exp = new Image();
    exp.src = "./images/exp/"+b+".png";
    exp.onload = function () {
        ctx.drawImage(exp,375-92,y+10);
    }
    drawHisMsg(ctx,375-61,y,40,35);
    drawHisHead(ctx,y);
}

function drawLongText(ctx,begin_x,begin_y,lr,longText) {
    var text = "";
    var count = 0;
    if (lr != 0) {
        //对话框在左边
        begin_x = begin_x - 220;
    }
    var strLength = longText.length;
    var newText = longText.split("");
    var context = ctx;
    context.textAlign = "left";
    for(let i = 0; i <= strLength; i++) {
        if (count === 13) {
            context.fillText(text,begin_x,begin_y);
            begin_y = begin_y + 20;
            text = "";
            count = 0;
        }
        if (i === strLength) {
            context.fillText(text,begin_x,begin_y);
        }
        text += newText[0];
        count++;
        newText.shift();
    }
}

function drawTimeMsg(ctx,y,str) {
    ctx.beginPath();
    var w = ctx.measureText(str).width - 15;
    var x = 187 - w /2;
    drawLeftMsg(ctx,x,y,w,15);
    ctx.fillStyle = "rgb(206,206,206)";
    ctx.fill();
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "12px STHeitiSC-Light";
    ctx.fillStyle = "rgb(248,248,248)";
    ctx.fillText(str,188,y+4);
}

//按钮部分
function getHisName() {
    return document.getElementById("hisname").value;
}

function test(context){

    mainView(context);
    drawLeft(context, 80, "你好");
    drawRight(context, 140, "我很好，谢谢！");
    drawLeft(context, 200, "我正好十三个字你不要再数了");
    drawRight(context, 260, "我超过十三个字貌似可以自动换行了");
    drawLeft(context, 340, "我超过二十六个字了啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊");
    drawTimeMsg(context, 450, "星期六  17:59");
    drawRight(context, 480, "再见");
    drawLeft(context, 540, "再见");
}


function putContentView(ctx) {
    alert("你正在生成这张图片，不要拿去做坏事呀！");
    getHisName();
    mainView(ctx);
    var chk = new Array(8),
        dis = 0,
        len = 0;
    for(let i = 1; i < 9; i++) {
        chk[i] = document.getElementById("check"+i);
        if (chk[i].checked) {
            var player = document.getElementById("select"+i);
            var index = player.selectedIndex;
            var value = player.options[index].value;
            var content = document.getElementById("content"+i).value;
            var time = document.getElementById("time"+i);
            if (i == 1) {
                dis = 80;
                len = 60;
            } else {
                dis = dis + len;
            }
            if (time.value != "") {
                drawTimeMsg(ctx,dis,time.value);
                dis = dis + 30;
            }
            if (value == "me" && flag_b[i] == 0) {
                drawRight(ctx,dis,content);
            } else if (value == "he" && flag_b[i] == 0) {
                drawLeft(ctx,dis,content);
            } else if (value == "me" && flag_b[i] != 0) {
                drawRightExp(ctx,dis,flag_a[i]);
            } else {
                drawLeftExp(ctx,dis,flag_a[i]);
            }

            if (content.length > 13 && content.length <= 26) {
                len = 80;
            } else if (content.length > 26 && content.length <= 35) {
                len = 100;
            } else if (content.length >= 0 && content.length <= 13) {
                len = 60;
            } else {
                alert("对话框不能超过35个字符。")
            }
        }else {
            break;
        }
    }
}

function expClicked(id) {
    var img_a = id % 10;
    var b = parseInt(id / 10);
    var divImg = new Array(9);
    for (let i = 1; i < 10; i++){
       divImg[i] = document.getElementById("exp"+id);
       divImg[i].className = "";
    }
    var image = document.getElementById("exp"+id);
    image.className = "imgClicked";
    if (img_a != 9) {
        flag_a[b] = id;
        flag_b[b] = b;
    }else {
        flag_a[b] = 0;
        flag_b[b] = 0;
    }
}