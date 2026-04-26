let montant = Number(prompt("Montant de la facture"));

if (montant > 40000) {
  montant = montant * 0.9;
}

alert("Total à payer : " + montant);