/* Guillermo Antonio Pérez Fuentes */
function enviar_formulario() {

    let elemento = document.getElementById("elemento").value;
    let costo = document.getElementById("costo").value;
    if (elemento.length == 0) {
        document.getElementById("helpBlock").innerHTML = `
    <div class="alert alert-danger" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg> <br>
        No has ingresado el <br> NOMBRE DEL ELEMENTO
    </div>`;
    } else if (costo.length == 0) {
        document.getElementById("helpBlock").innerHTML = `
    <div class="alert alert-danger" role="alert"> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg> <br>
        No has ingresado el <br> COSTO DEL ELEMENTO
    </div>`;
    } else {
        document.getElementById("helpBlock").textContent="Para agregar un nuevo producto, porfavor ingresa los datos solicitados acontinuación y luego haz click en el botón 'Agregar producto'";
        
        /* Crea TR */
        var tr = document.createElement('TR');
        let codigo = document.getElementById("codigo").value;
        let NTR = codigo;
        NTR++;
        tr.id = "COD" + NTR;
        tr.value = NTR;
        tbody.appendChild(tr);
        document.getElementById("codigo").value = NTR;


        /* Crea TD - Código */
        var td1 = document.createElement('TD');
        NTD = NTR;
        td1.id = "TD" + NTD;
        td1.textContent = NTD;
        td1.value = NTD;
        tr.appendChild(td1);

        /* Actualizamos la cantidad de elementos en el footer */
        document.getElementById("nE").textContent = NTD;

        /* Crea TD - Elemento */
        var td2 = document.createElement('TD');
        td2.textContent = document.getElementById("elemento").value;
        tr.appendChild(td2);


        /* Crea TD - Costo */
        var td3 = document.createElement('TD');
        td3.textContent = "$ " + document.getElementById("costo").value;
        tr.appendChild(td3);
        /* Actualizamos la cantidad de costos en el footer */
        totCos = document.getElementById("cos").textContent;
        costoS = document.getElementById("costo").value;
        let newTotCos = parseFloat(totCos) + parseFloat(costoS);
        document.getElementById("cos").textContent = newTotCos;

        /* Crea TD - Fecha */
        var td4 = document.createElement('TD');
        td4.textContent = document.getElementById("fecha").textContent;
        tr.appendChild(td4);

        /* Reiniciar formulario */
        document.getElementById("formulario1").reset();

    }
}

function muestraReloj() {
    var fechaHora = new Date();
    var fecha = new Date();

    var dia = fecha.getDay();
    var mes = fecha.getUTCMonth();
    var año = fecha.getFullYear();

    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    var sufijo = ' AM';
    if (horas > 12) {
        horas = horas - 12;
        sufijo = ' PM';
    }

    if (horas < 10) { horas = '' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("fecha").innerHTML = dia + '/' + mes + '/' + año + ' - ' + horas + ':' + minutos + ':' + segundos + sufijo;
}

window.onload = function () {
    setInterval(muestraReloj, 1000);
}
/* Guillermo Antonio Pérez Fuentes */