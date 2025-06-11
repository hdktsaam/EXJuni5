// Voorbeeldgebruik
const klant1 = new Klant(1, "Karel kleintjes", "karel.kleintjes@example.com");
const factuur1 = new Factuur("F2025001", "2025-06-01", 250.0);
const factuur2 = new Factuur("F2025002", "2025-06-05", 120.0, true);

klant1.voegFactuurToe(factuur1);
klant1.voegFactuurToe(factuur2);

klant1.printFacturen();
console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
