import { LitElement, css, html } from "lit";

export default class RepairAssignment extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <legend>Opdracht</legend>
        <label for="description">Beschrijving:</label><textarea id="desciption" name="description" row="10" col="70"></textarea>
        <label for="timeestimate">Tijdsindicatie</label><input id="timeestimate" name="timeestimate" type="number">
      </fieldset>
    `
  }

}

window.customElements.define('repair-assignment', RepairAssignment);
