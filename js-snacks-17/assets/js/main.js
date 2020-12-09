/* Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area. */
const triangolo = {
    base: 3,
    altezza: 4,
}
const base = triangolo.base;//cateto uno
const altezza = triangolo.altezza;// cateto due
const area = (base * altezza) / 2;
console.log(area);
const ipotenusa = Math.sqrt(Math.pow(base, 2) + Math.pow(altezza, 2));
const perimetro = base + altezza + ipotenusa;
console.log(perimetro);