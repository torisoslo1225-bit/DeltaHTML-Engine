import Engine from "./engine/Engine.js";

window.addEventListener("load", () => {
  try {
    const engine = new Engine();
    engine.start();
  } catch (error) {
    document.body.innerHTML = `<pre style="color:white;background:black;padding:20px;font-size:18px">DeltaHTML Engine Error:\n${error.stack}</pre>`;
    console.error(error);
  }
});