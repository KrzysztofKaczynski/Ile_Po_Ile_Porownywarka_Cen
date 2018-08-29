function Przelicz() {
    const priceOne = parseFloat(document.calc.liczba.value);
    const unitsOfWeightOne = parseFloat(document.calc.liczba2.value);
    const priceTwo = parseFloat(document.calc.liczba3.value);
    const unitsOfWeightTwo = parseFloat(document.calc.liczba4.value);
    const typ_konwersji = document.calc.konwersja.value;

    if (!isNaN(priceOne) && !isNaN(unitsOfWeightOne) && !isNaN(priceTwo) && !isNaN(unitsOfWeightTwo)) {
        if (typ_konwersji === "1gram") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne).toPrecision(3) + " zł za 1 gram";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo).toPrecision(3) + " zł za 1 gram";
        }
        if (typ_konwersji === "10gram") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne * 10).toPrecision(3) + " zł za 10 gram";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo * 10).toPrecision(3) + " zł za 10 gram";
        }
        if (typ_konwersji === "100gram") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne * 100).toPrecision(3) + " zł za 100 gram";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo * 100).toPrecision(3) + " zł za 100 gram";
        }
        if (typ_konwersji === "1szt") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne).toPrecision(3) + " zł za 1 szt.";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo).toPrecision(3) + " zł za 1 szt.";
        }
        if (typ_konwersji === "10ml") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne * 10).toPrecision(3) + " zł za 10 ml.";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo * 10).toPrecision(3) + " zł za 10 ml.";
        }
        if (typ_konwersji === "100ml") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne * 100).toPrecision(3) + " zł za 100 ml.";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo * 100).toPrecision(3) + " zł za 100 ml.";
        }
        if (typ_konwersji === "1litr") {
            document.calc.wynik.value = (priceOne / unitsOfWeightOne).toPrecision(3) + " zł za 1 litr.";
            document.calc.wynik2.value = (priceTwo / unitsOfWeightTwo).toPrecision(3) + " zł za 1 litr.";
        }
    } else {
        alert("Wprowadz poprawne dane liczbowe we wszystkich polach");
        return false;
    }
    return true;
}