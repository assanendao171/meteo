let input = document.getElementById("input");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let capital = document.getElementById("capital");
let drapeau = document.getElementById("drapeau");
let monnaie = document.getElementById("monnaie");
let langue = document.getElementById("langue");
let population = document.getElementById("population");

async function avoirPays(pays) {
  try {
    h3.textContent = `🔍 Recherche en cours... ${pays.toUpperCase()}`;
    
    let res = await fetch(`https://restcountries.com/v3.1/name/${pays}`);
    if (!res.ok) throw new Error("Pays introuvable !");
    
    let reponse = await res.json();
    let country = reponse[0];

    // Nom du pays
    h3.textContent = `✅ Pays trouvé : ${country.name.common}`;

    // Capital
    capital.textContent = `🌍 Capital : ${country.capital ? country.capital[0] : "N/A"}`;

    // Drapeau
    drapeau.src = country.flags.png;
    drapeau.alt = `Drapeau de ${country.name.common}`;

    // Monnaie
    let monnaieKey = Object.keys(country.currencies)[0];
    monnaie.textContent = `💰 Monnaie : ${country.currencies[monnaieKey].name} (${country.currencies[monnaieKey].symbol})`;

    // Langues
    let langues = Object.values(country.languages).join(", ");
    langue.textContent = `🗣️ Langue(s) : ${langues}`;

    // Population
    population.textContent = `👥 Population : ${country.population.toLocaleString()}`;

    input.value = "";

  } catch (error) {
    h3.textContent = `❌ Pays introuvable ❌`;
    input.value = "";
    drapeau.src = "";
  }
}

btn.addEventListener("click", function () {
  let pays = input.value.trim();
  if (!pays) {
    alert("Le champ est vide");
    return;
  }
  avoirPays(pays);

  // Réinitialisation avant la recherche
  capital.textContent = `🌍 Capital : `;
  drapeau.src = "";
  monnaie.textContent = `💰 Monnaie : `;
  langue.textContent = `🗣️ Langue : `;
  population.textContent = `👥 Population : `;
});

// Appuyer sur Enter pour rechercher
input.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    btn.click();
  }
});