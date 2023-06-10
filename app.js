window.onload = function () {

    let saniye = "00", salise = "00"; dakika = "00";


    let saniyeler = document.getElementById("saniye");
    let saliseler = document.getElementById("salise");
    let dakikalar = document.getElementById("dakika");

    let baslatButonu = document.getElementById("basla");
    let durdurButonu = document.getElementById("durdur");
    let resetButonu = document.getElementById("reset");


    let lnterval;

    baslatButonu.onclick = function () {

        clearInterval(lnterval);
        lnterval = setInterval(zamanlayici, 10)
    }

    durdurButonu.onclick = function () {
        clearInterval(lnterval);

    }

    resetButonu.onclick = function () {

        clearInterval(lnterval);
        salise = "00";
        saniye = "00";
        dakika = "00";

        saniyeler.innerHTML = saniye;
        saliseler.innerHTML = salise;

    }


    function zamanlayici() {

        salise++;
        if (salise <= 9) {
            saliseler.innerHTML = "0" + salise;
        }
        if(salise>9){
            saliseler.innerHTML = salise;
        }
        if(salise>99){
            saniye++;
            saniyeler.innerHTML = "0"+saniye;
            salise=0;
            saliseler.innerHTML="0"+0;

        }
        if(saniye>9){
            saniyeler.innerHTML =saniye;
        }
        if(saniye>59){
            dakika++;
            dakikalar.innerHTML="0"+dakika;
            saniyeler.innerHTML="0"+saniye;
            saniye=0;
            saniyeler.innerHTML="0"+0;
        }
    }





}