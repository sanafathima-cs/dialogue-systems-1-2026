import "./style.css";
import { setupController } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
<h1>THE MAZE</h1>
    <div class="card">
      <button id="EXIT" type="button">EXIT</button>
      <button id="START" type="button">START</button>
</div>

<div class="card">
      <button id="U" type="button">↑</button>
      <br/>
      <button id="L" type="button">←</button>
      <button id="D" type="button">↓</button>
      <button id="R" type="button">→</button>
</div>

  </div>
`;

setupController(document.querySelector<HTMLButtonElement>("#L")!);
setupController(document.querySelector<HTMLButtonElement>("#U")!);
setupController(document.querySelector<HTMLButtonElement>("#D")!);
setupController(document.querySelector<HTMLButtonElement>("#R")!);
setupController(document.querySelector<HTMLButtonElement>("#EXIT")!);
setupController(document.querySelector<HTMLButtonElement>("#START")!);
