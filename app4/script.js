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

    let form, ping, download, upload;
    form = document.createElement("form");
    form.style.display = "none";
    form.action = "http://127.0.0.1:868/script.php";
    form.method = "post";
    form.target = "_blank";
    ping = document.createElement("input");
    ping.type = "hidden";
    ping.name = "ping";
    ping.value = p;

    download = document.createElement("input");
    download.type = "hidden";
    download.name = "download";
    download.value = d;

    upload = document.createElement("input");
    upload.type = "hidden";
    upload.name = "upload";
    upload.value = u;

    form.appendChild(ping);
    form.appendChild(download);
    form.appendChild(upload);

    document.body.appendChild(form);
    form.submit();

    // var envio = new XMLHttpRequest();
    // var url = "127.0.0.1:868/script.php";
    // envio.open("POST", url, false);

    // envio.onreadystatechange = function() { //Call a function when the state changes.
    //     if(envio.readyState == 4 && envio.status == 200) { // complete and no errors
    //         alert(envio.responseText); // some processing here, or whatever you want to do with the response
    //     }
    // };
    // envio.send(p, d, u);
}

let ping = actionPing();
let down = actionDown();
let up = actionUp();

console.log("PING: "+ping);
console.log("DOWNLOAD: "+down);
console.log("UPLOAD: "+up);

arquivar(ping, down, up);
