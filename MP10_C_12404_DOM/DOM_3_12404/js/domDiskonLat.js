var totalNode;

function init() {
    totalNode = document.getElementById("totalBayar").firstChild;
    hitungTotal();
}

function hitungTotal() {
    var harga = parseFloat(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);
    var spanEl = document.getElementById("totalBayar");
    var hematEl = document.getElementById("infoHemat");

    if (diskon < 0 || diskon > 100 || isNaN(diskon)) {
        spanEl.firstChild.data = "Diskon tidak valid!";
        spanEl.style.color = "red";
        hematEl.firstChild.data = "Anda hemat: Rp0";
    } else {
        var potongan = harga * (diskon / 100);
        var akhir = harga - potongan;
        spanEl.firstChild.data = akhir;
        spanEl.style.color = "green";
        hematEl.firstChild.data = "Anda hemat: Rp" + potongan;
    }
}