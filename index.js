  import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js@1.2.6";
  import { render } from "https://cdn.skypack.dev/solid-js@1.2.6/web";
  import html from "https://cdn.skypack.dev/solid-js@1.2.6/html";

  function Counter() {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount(count() + 1);
    var timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));
    return html`
      <button type="button" onClick=${increment}>
        Click: ${count}
      </button>
      <div>${count}</div>
    `;
  }
  render(Counter, document.body); 