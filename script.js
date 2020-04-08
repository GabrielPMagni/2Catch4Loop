var corpo = document.body;
var qtdTagDiv = corpo.getElementsByTagName("div").length;
var tagDivJSS309 = corpo.getElementsByTagName("div");

function actionPing(){

    // let index1 = corpo.indexOf("jss309");
    // let index2 = index1 + corpo.indexOf("jss309");
    let spanPing;

    console.log("QTD TAG DIV: "+qtdTagDiv);

    for (let i = 0; i < qtdTagDiv; i++){
        if (tagDivJSS309[i].className == "jss309 jss305") {
            console.log("TAG DIV JSS305: "+tagDivJSS309[i].innerHTML);
            spanPing = tagDivJSS309[i].children.item(0).innerText;
        } 
    }
    return spanPing;
}

function actionDown(){
    let spanDown;

    for (let i = 0; i < qtdTagDiv; i++){
        if (tagDivJSS309[i].className == "jss309 jss311"){
            console.log("TAG DIV JSS311: "+tagDivJSS309[i].innerHTML);
            spanDown = tagDivJSS309[i].children.item(0).innerText;
        }
    }
    return spanDown;
}

function actionUp(){
    let spanUp;
    for (let i = 0; i < qtdTagDiv; i++){
        if (tagDivJSS309[i].className == "jss309 jss312"){
            console.log("TAG DIV JSS312: "+tagDivJSS309[i].innerHTML);
            spanUp = tagDivJSS309[i].children.item(0).innerText;
        }
    }
    return spanUp;
}

function arquivar(p, d, u){
    
}

var ping = actionPing();
var down = actionDown();
var up = actionUp();
var arquivo = arquivar(ping, down, up);

console.log("PING: "+ping);
console.log("DOWNLOAD: "+down);
console.log("UPLOAD: "+up);

