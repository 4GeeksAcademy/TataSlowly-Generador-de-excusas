window.onload = function() {

  const who = ['El Perro', 'Mi Abuela', 'El Cartero', 'Mi Loro'];
  const action = ['Comió', 'Orinó', 'Aplastó', 'Rompió'];
  const what = ['Mi tarea', 'Mi Telefono', 'El Carro'];
  const when = ['Antes De La Clase', 'Cuando estaba durmiendo', 'Mientras hacía ejercicio', 'durante mi almuerzo', 'Mientras estaba orando'];

  function pickRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "";
    const idx = Math.floor(Math.random() * arr.length);
    console.log(`pickRandom -> length: ${arr.length}, idx: ${idx}`); 
    return arr[idx];
  }

  function generateExcuse() {
    const rdmWho = pickRandom(who);
    const rdmAction = pickRandom(action);
    const rdmWhat = pickRandom(what);
    const rdmWhen = pickRandom(when);

    const excuse = `${rdmWho} ${rdmAction} ${rdmWhat} ${rdmWhen}`;
    console.log("Generated excuse:", excuse); 
    return excuse;
  }

  const el = document.getElementById("excuse") || document.querySelector("#excuse");
  if (!el) {
    console.error("Elemento #excuse NO encontrado en el DOM. Verifica que exista en index.html");
    return;
  }

  el.innerHTML = generateExcuse();
  console.log("Excuse injected into #excuse");
};
