//GENERADOR DE ALERTA PERSONALIZADA ALERT
alerta = function (txt, titulo, txtDefault, alto = "auto", ancho = "300px", textbox, txtComodin, idComodin, clickComodin = "", idDefault = "closeBtn", idcont = "modalContainer") {
    var d = document, destruir = function () { d.getElementsByTagName("html")[0].removeChild(d.getElementById(idcont)); d.getElementsByTagName("body")[0].style.opacity = 1; };
    if (d.getElementById(idcont)) return;
    d.getElementsByTagName("body")[0].insertAdjacentHTML('beforebegin', '<div id="'+idcont+'"></div>'); var contenedor = d.querySelector('#'+idcont); d.getElementsByTagName("body")[0].style.opacity = 0.5;
    contenedor.style = "position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 10000;"; contenedor.style.height = d.documentElement.scrollHeight + "px";
    var cuadro = contenedor.appendChild(d.createElement("div")); //cuadro.id = "alertBox";
    cuadro.style = "position: relative; min-height: " + alto + "; height: auto; width: " + ancho + "; margin-top: 100px; border: 2px solid #000; border-radius: 10px; background-color: gray; text-align: center;";
    if (d.all && !window.opera) cuadro.style.top = d.documentElement.scrollTop + "px"; cuadro.style.left = (d.documentElement.scrollWidth - cuadro.offsetWidth) / 2 + "px";
    var enc = cuadro.appendChild(d.createElement("div")); enc.style = "text-align: center; font: bold 0.9em verdana,arial; color: #FFF; border-radius: 10px 10px 0px 0px;";
    var tit = enc.appendChild(d.createElement("h1")); tit.style = "font-size: 18px;"; tit.appendChild(d.createTextNode(titulo));
    var msg = enc.appendChild(d.createElement("p")); msg.innerHTML = txt; msg.style = "font: 15px verdana,arial; height: auto; padding: 10px 30px; text-align: center; background-color: dimgray;";
    var foo = cuadro.appendChild(d.createElement("div")); foo.style = "text-align: center; padding-bottom: 5px;";
    if (txtComodin != undefined) {
        if (textbox != false) { var textb = '<input type="text" id="textbox1" placeholder="' + textbox + '" style="margin: 5px 0px 5px 0px; padding: 3px; border: 2px solid #000; width: 150px; text-align: center; font: 0.9em verdana,arial; text-transform: uppercase;"><br>'; } else { var textb = ''; }
        foo.insertAdjacentHTML('beforeend', textb + '<input type="button" value="' + txtComodin + '" id="' + idComodin + '" onclick="' + clickComodin + '"><input type="button" value="' + txtDefault + '" id="' + idDefault + '">');
        foo.insertAdjacentHTML('beforeend', '<label id="lblmod" style="display: none; color: red; font: 1em verdana,arial; position: relative; text-align: center; margin: 5px 10px; text-transform: uppercase;"></label>');
        var btnDefault = document.getElementById(idDefault), btnComodin = document.getElementById(idComodin), textbox1 = document.getElementById("textbox1");
        var estilos = "background-color: #606060; position: relative; margin: 5px 10px; padding: 3px; border: 2px solid #000; width: 70px; text-align: center; font: 0.8em verdana,arial; text-transform: uppercase; color: #FFF;";
        btnDefault.style = estilos; btnComodin.style = estilos;
        if (textbox != false) { textbox1.focus(); }
        if (clickComodin == "") { btnComodin.onclick = destruir; } btnDefault.onclick = destruir;
    } else {
        var btnDefault = foo.appendChild(d.createElement("a")); btnDefault.id = idDefault;
        btnDefault.style = "display: block; position: relative; margin: 5px auto; padding: 3px; border: 2px solid #000; width: 70px; font: 0.7em verdana,arial; text-transform: uppercase; text-align: center; color: #FFF; background-color: #606060; text-decoration: none;";
        btnDefault.appendChild(d.createTextNode(txtDefault)); btnDefault.href = "#"; btnDefault.onclick = destruir;
    }
}