let input = document.getElementById("input");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let icone = document.getElementById("icone");
let capital = document.getElementById("capital");
let drapeau = document.getElementById("drapeau");
let monnaie = document.getElementById("monnaie");
let langue = document.getElementById("langue");
let population = document.getElementById("population");

async function avoirMeteo(pays) {
  try {
    let data = await fetch(`https://restcountries.com/v3.1/name/${pays}`);
    if (!data.ok) {
      throw new Error("pays introuvable !");
    }
    let reponse = await data.json();
    h3.textContent =`🔍 Recherche en cours...${input.value.toUpperCase()}`
    h3.textContent =`pays trouvé ${input.value.toUpperCase()}`

capital.textContent=`🌍 : capital du pays${reponse.capital[0].toUpperCase()}`
drapeau.src.textContent=` 🕒 : drapeau   ${reponse.flags.png}`
let moncle=Object.keys(reponse.currencies)[0];
monnaie.textContent=` 💰: monnaie ${reponse.currencies.[moncle].name}-${reponse.currencies[moncle].symbol}`
let clelangue=Object.keys(reponse.languages)
langue.textContent=` 🗣️ : Langue ${clelangue}mm`
population.textContent = ` 👥 : Population${reponse.population} ps`
      input.value=""

  } catch (Error) {
    async function wait(){
    h3.textContent =`🔍 Recherche en cours...${input.value}`
      await new Promise(resolve=>setTimeout(resolve,4000))
h3.textContent = " ❌  pays introuvable ❌";    input.value=""
    }
    wait()
  }
}
btn.addEventListener("click", function () {
  if(input.value===""){
    alert("le champ est vide")
    return
  }
  let pays = input.value.trim();
  if (pays) {
    avoirMeteo(pays);
  }
  capital.textContent=` 🌍 : capital du pays`
drapeau.textContent=` 🕒 : drapeau `
monnaie.textContent=` 💰: monnaie`
langue.textContent=` 🗣️ : Langue `
population.textContent=`👥 : Population`
});
window.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    btn.click()
  }
})