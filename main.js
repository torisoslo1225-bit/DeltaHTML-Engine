import Engine from "./engine/Engine.js";
import TestRoom from "./overworld/TestRoom.js";
import TestPlayer from "./overworld/TestPlayer.js";

window.addEventListener("load", () => {
  try {
    const engine = new Engine();
    engine.scene = new TestRoom();
    engine.player = new TestPlayer(320,240);
    engine.start();
  } catch (error) {
    document.body.innerHTML = `<pre style="color:white;background:black;padding:20px;font-size:18px">DeltaHTML Engine Error:\n${error.stack}</pre>`;
    console.error(error);
  }
});