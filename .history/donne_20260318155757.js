let input = document.getElementById("input");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let icone = document.getElementById("icone");
let capital = document.getElementById("capital");
let monnaie = document.getElementById("monnaie");
let langue = document.getElementById("langue");
let population = document.getElementById("population");

async function avoirMeteo(pays) {
  try {
    let data = await fetch(`https://restcountries.com/v3.1/name/${pays}`);
    if (!data.ok) {
      throw new Error("pays introuvable !");
    }
    let res = await data.json();
    let reponse=res[0]
    h3.textContent =`🔍 Recherche en cours...${input.value}`
      await new Promise(resolve=>setTimeout(resolve,4000))
h3.textContent = "  pays trouvé ";    input.value=""

capital.textContent = `🌍 Capital : ${reponse.capital ? reponse.capital[0] : "N/A"}`;
let moncle=Object.keys(reponse.currencies)[0];
monnaie.textContent=` 💰: monnaie :${reponse.currencies[moncle].name}-${reponse.currencies[moncle].symbol}`
let clelangue=Object.values(reponse.languages).join(",")
langue.textContent=` 🗣️ : Langue :${clelangue}`
population.textContent = ` 👥 : Population :${reponse.population.toLocaleString()}`
      input.value=""

  } catch (Error) {
    async function wait(){
    h3.textContent =`🔍 Recherche en cours...${input.value}`
      await new Promise(resolve=>setTimeout(resolve,0))
h3.textContent = " ❌  pays introuvable ❌";    input.value=""
    }
    wait()
  }
}
input.focus()
btn.addEventListener("click", function () {
  if(input.value.trim()===""){
    alert("le champ est vide")
    return
  }
  let pays = input.value.trim();
  if (pays) {
    avoirMeteo(pays);
  }
  capital.textContent=` 🌍 : capital du pays`
drapeau.src=` 🕒 : drapeau `
monnaie.textContent=` 💰: monnaie`
langue.textContent=` 🗣️ : Langue `
population.textContent =`👥 : Population`
});
window.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    btn.click()
  }
})