$(function(){//jqお約束

// CANVASを定義
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//変数と定数の事前宣言
const cnvWidth = 500;//canvasの幅
const cnvHeight = 300;//canvasの高さ
let cnvColor = "black";//デフォルトの線の色
let cnvLineWidth = 5;//デフォルトの線の太さ
let clickFlag = 0;//クリックしたかどうかのフラグ
let bgcolor = "white";//背景色

//背景を白にする関数定義
function setBgColor(){
    ctx.fillStyle = bgcolor;
    ctx.fillRect(0,0, cnvWidth, cnvHeight);
}

//背景を塗りつぶす
setBgColor();

$("#canvas").mousedown(function(){
        clickFlag = 1;
    }).mouseup(function(){
        clickFlag =0;
    }).mousemove(function(e){
        if(!clickFlag) return false;
        draw(e.offsetX,e.offsetY);
    });

    function draw(x,y){
        ctx.lineWidth = cnvLineWidth;
        ctx.strokeStyle = cnvColor;

        if(clickFlag == "1"){
            clickFlag = "2";
            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }
        ctx.stroke();
    }

    $(".color a").click(function(){
        cnvColor= $(this).data("color");
        return false;
    })
    

    $(".weight a").click(function(){
        cnvLineWidth= $(this).data("weight");
        return false;
    })

    $("#clear").click(function(){
        ctx.clearRect(0, 0, cnvWidth, cnvHeight);
        setBgColor();
    });

     // canvasを画像として保存
    $("#download").click(function(){
        var canvas = document.getElementById("canvas");
        var base64 = canvas.toDataURL("image/jpag");
        document.getElementById("download").href = base64;
    });

});//jqお約束





// ctx.fillStyle = 'orange';//塗りつぶしの色
// ctx.fillRect(25,25,50,50);//描画　四角形で埋める(x座標、y座標、幅、高さ)

// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 5;
// ctx.strokeRect(125,50,50,50);

// ctx.fillText("腰に手を当ててコーラ飲みたい",125,100);