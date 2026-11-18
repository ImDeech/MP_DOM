var spanSuhu;

function init() {
    spanSuhu = document.getElementById("outputSuhu");
    konversiSuhu("celcius");
}

function konversiSuhu(id) {
    var statusEl = document.getElementById("statusCuaca");
    statusEl.firstChild.data = (f >= 86) ? "Status: Panas" : "Status: Sejuk";
    var c = parseFloat(document.getElementById(id).value);
    var f = (c * 9 / 5) + 32;

    spanSuhu.firstChild.data = f;

    if (f >= 86) {
        spanSuhu.style.color = "red";
        spanSuhu.style.fontWeight = "bold";
    } else {
        spanSuhu.style.color = "blue";
        spanSuhu.style.fontWeight = "normal";
    }
}

function resetForm() {
    document.getElementById("celcius").value = "";
    spanSuhu.firstChild.data = "0";
    spanSuhu.style.color = "";
    spanSuhu.style.fontWeight = "";
    document.getElementById("statusCuaca").firstChild.data = "Status: -";
}