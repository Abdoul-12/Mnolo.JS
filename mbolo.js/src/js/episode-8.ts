let nom = prompt("Entrez votre nom");
let sexe = prompt("Entrez votre sexe (M ou F)");

if (sexe === "M") {
  alert("Bonjour monsieur " + nom);
} else {
  alert("Bonjour madame " + nom);
}