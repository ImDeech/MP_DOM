var targetNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var nominal = parseFloat(inputEl.value);
    var hasilUsd = (nominal / 18246).toFixed(2);

    targetNode.data = hasilUsd;

    var li = document.createElement("li");
    var teksRiwayat = document.createTextNode("Rp" + nominal + " = US$" + hasilUsd);
    li.appendChild(teksRiwayat);

    var listUl = document.getElementById("riwayat");
    listUl.appendChild(li);
}