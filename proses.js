function proses() {
    const pulsa = parseInt(document.kaldiskon.nominal.value);
    const provider = document.querySelector('input[name=Pulsa]:checked').value;

    let diskon = 0;
    switch (provider) {
        case "telkomsel":
            diskon = 0.05
            break;
        case "XL":
            diskon = 0.02
            break;
        case "tri":
            diskon = 0.03
            break;
        default :
            alert("Provider yang anda pilih invalid");
            return;
    }

        let hasilbayar = pulsa - (pulsa * diskon)

        hasilbayar = hasilbayar.toLocaleString("id-ID")

        alert("Hasil dari pulsa dengan diskon " + (diskon * 100)  + "% untuk provider " + provider + " adalah Rp." + hasilbayar );
}