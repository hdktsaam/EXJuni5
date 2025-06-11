// Onderstaande JS code krijg je van mij
// pas aan waar jij denkt dat het nodig is!
const klanten = [
  {
    klantID: 1,
    naam: "Karel Kleintjes",
  },
  {
    klantID: 2,
    naam: "Els Dotjes",
  },
];

const facturenData = {
  1: [
    { id: 101, bedrag: 250, betaald: true },
    { id: 102, bedrag: 125, betaald: false },
    { id: 103, bedrag: 300, betaald: true },
  ],
  2: [
    { id: 201, bedrag: 400, betaald: false },
    { id: 202, bedrag: 150, betaald: false },
  ],
};

const klantSelect = document.getElementById("klantSelect");
const betaaldContainer = document.getElementById("betaaldContainer");
const nietBetaaldContainer = document.getElementById("nietBetaaldContainer");
// ______________________________________________________________________________________

const init = () => {
  klanten.forEach((klant) => {
    const newKlant = document.createElement("option");
    newKlant.value = klant.klantID;
    newKlant.innerHTML = klant.naam;
    klantSelect.appendChild(newKlant);
  });
};

init();

klantSelect.addEventListener("change", function () {
  const klantId = this.value;
  betaaldContainer.innerHTML = "";
  nietBetaaldContainer.innerHTML = "";

  if (facturenData[klantId]) {
    facturenData[klantId].forEach((factuur) => {
      const factuurDiv = document.createElement("div");
      factuurDiv.className = `factuur ${
        factuur.betaald ? "betaald" : "niet-betaald"
      }`;
      factuurDiv.textContent = `Factuur #${factuur.id} - €${factuur.bedrag}`;
      factuurDiv.setAttribute("betaald", factuur.betaald);
      factuurDiv.setAttribute("bedrag", factuur.bedrag);
      factuurDiv.addEventListener("click", clickedFactuur);
      if (factuur.betaald) {
        betaaldContainer.appendChild(factuurDiv);
      } else {
        nietBetaaldContainer.appendChild(factuurDiv);
      }
    });
  }
});

const clickedFactuur = (args) => {
  alert(args.target.getAttribute("bedrag") + "€");
};
