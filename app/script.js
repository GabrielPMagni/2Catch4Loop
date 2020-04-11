try {
    var mDadosConexao = class DadosConexao {
        constructor() {

            let corpo = document.body;
            let qtdTagDiv = corpo.getElementsByTagName("div").length;
            let tagDivJSS309 = corpo.getElementsByTagName("div");

            this.ping = function () {
                let spanPing;

                for (let i = 0; i < qtdTagDiv; i++) {
                    if (tagDivJSS309[i].className == "jss309 jss305") {
                        spanPing = tagDivJSS309[i].children.item(0).innerText;
                    }
                }
                return spanPing;
            }();

            this.download = function () {
                let spanDown;

                for (let i = 0; i < qtdTagDiv; i++) {
                    if (tagDivJSS309[i].className == "jss309 jss311") {
                        spanDown = tagDivJSS309[i].children.item(0).innerText;
                    }
                }
                return spanDown;
            }();

            this.upload = function () {
                let spanUp;
                for (let i = 0; i < qtdTagDiv; i++) {
                    if (tagDivJSS309[i].className == "jss309 jss312") {
                        spanUp = tagDivJSS309[i].children.item(0).innerText;
                    }
                }
                return spanUp;
            }();


        }

        arquivar() {
            let form, ping, download, upload;
            form = document.createElement("form");
            form.style.display = "none";
            form.action = "http://127.0.0.1:868/script.php";
            form.method = "post";
            form.target = "_blank";
            ping = document.createElement("input");
            ping.type = "hidden";
            ping.name = "ping";
            ping.value = this.ping;

            download = document.createElement("input");
            download.type = "hidden";
            download.name = "download";
            download.value = this.download;

            upload = document.createElement("input");
            upload.type = "hidden";
            upload.name = "upload";
            upload.value = this.upload;

            form.appendChild(ping);
            form.appendChild(download);
            form.appendChild(upload);

            document.body.appendChild(form);
            form.submit();
        }


        mostrarDados() {
            console.log("ESPERAR: " + this.tempo);
            console.log("PING: " + this.ping);
            console.log("DOWNLOAD: " + this.download);
            console.log("UPLOAD: " + this.upload);
        }

        recarregarPagina() {
            window.location.reload(true);
        }

    }
} catch (error) {
    console.log("Já declarada classe.");
}



const sleep = (delay) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

(async () => {
    await sleep(Math.floor(Math.random() * 62.347579) + 90000);
    var pagina = new mDadosConexao();
    pagina.mostrarDados();
    pagina.arquivar();
    pagina.recarregarPagina();
})();




console.log("-----------------------------------------------------------------------------");
// console.log("ESPERAR: " + pagina.tempo);
// console.log("PING: " + pagina.ping);
// console.log("DOWNLOAD: " + pagina.download);
// console.log("UPLOAD: " + pagina.upload);
