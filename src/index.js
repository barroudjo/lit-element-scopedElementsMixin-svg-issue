import { html, svg, render } from "lit-html";
import { LitElement } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

const renderCircle = () => svg`<circle cx="50" cy="50" r="50"></circle>`;

class TestingSvg extends LitElement {
  render() {
    return html`
      <div><slot></slot></div>
      <svg
        width="200px"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${renderCircle()}
      </svg>
    `;
  }
}

window.customElements.define("testing-svg", TestingSvg);
window.customElements.define(
  "testing-svg-with-scopedelementmixin",
  ScopedElementsMixin(TestingSvg)
);
render(
  html`
    <testing-svg>not using ScopedElementsMixin</testing-svg>
    <testing-svg-with-scopedelementmixin
      >using ScopedElementsMixin</testing-svg-with-scopedelementmixin
    >
  `,
  document.body
);
