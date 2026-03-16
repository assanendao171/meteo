let input = document.getElementById("input");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");
let icone = document.getElementById("icone");
let soleil = document.getElementById("soleil");
let vent = document.getElementById("vent");
let pluie = document.getElementById("pluie");
let bruine = document.getElementById("bruine");
let degre = document.getElementById("degre");

let apiKey = "62ecfbc2ac82aa867b7d2b579270f663";
async function avoirMeteo(ville) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`,
    );
    if (!data.ok) {
      throw new Error("ville introuvable !");
    }
    let reponse = await data.json();
    h3.textContent =`🔍 Recherche en cours...${input.value.toUpperCase()}`
    async function temps() {
      let meteo=reponse.weather[0].main
      let emoji=""
      if(meteo==="Clear"){
        emoji="☀️"
      }
      else if(meteo==="Clouds"){
        emoji="☁️"
      }
      else if(meteo==="Rain"){
        emoji= "🌧️"
      }
      else {
  emoji = "🌤️"
}
      await new Promise((resolve) => setTimeout(resolve, 4000));
soleil.textContent=` ☀️ `
      input.value=""
    }
    temps();
  } catch (Error) {
    async function wait(){
          icone.textContent = "🔍";
    h3.textContent =`Recherche en cours...${input.value}`
      await new Promise(resolve=>setTimeout(resolve,4000))
    icone.textContent = "❌  ";
h3.textContent = "Ville introuvable ";    input.value=""
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
    avoirMeteo(ville);
  }
});
