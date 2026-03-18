let input = document.getElementById("input");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let icone = document.getElementById("icone");
let capital = document.getElementById("capital");
let heure = document.getElementById("heure");
let monnaie = document.getElementById("monnaie");
let langue = document.getElementById("langue");
let population = document.getElementById("population");

async function avoirdonne(pays) {
  try {
    let data = await fetch(`https://restcountries.com/v3.1/name/${pays}`);
    if (!data.ok) {
      throw new Error("pays introuvable !");
    }
    let reponse = await data.json();
    h3.textContent =`🔍 Recherche en cours...${input.value.toUpperCase()}`
          await new Promise((resolve) => setTimeout(resolve, 4000));
    h3.textContent =`pays trouvé ${input.value.toUpperCase()}`

      await new Promise((resolve) => setTimeout(resolve, 0));
capital.textContent=`🌍 : capital du pays${input.value.toUpperCase()}`
heure.textContent=` 🕒 : heure locale  ${reponse.name} : ${reponse.main.temp}°C`
monnaie.textContent=` 💰: monnaie ${reponse.clouds.all}mm`
langue.textContent=` 🗣️ : Langue ${reponse.main.humidity}mm`
population.textContent=` 👥 : Population${reponse.population} ps`
      input.value=""
    
    temps();
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
  let ville = input.value.trim();
  if (ville) {
    avoirdonne(ville);
  }
  soleil.textContent=` ☀️ : région géographique `
degre.textContent=` 🌡️ Température `
neige.textContent=` ☁️ : Neige `
bruine.textContent=` 🌦️ : Bruine  `
vent.textContent=` 💨 : Vent `
});
window.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    btn.click()
  }
})