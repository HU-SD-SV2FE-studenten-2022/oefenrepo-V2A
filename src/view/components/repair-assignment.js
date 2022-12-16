import { LitElement, css, html } from "lit";

const ESTIMATETIME_CHANGED_EVENT = 'estimated-changed';

export default class RepairAssignment extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }
  
  #estimatedtimeChanged(event) {
    const estimateChangedEvent = new CustomEvent(ESTIMATETIME_CHANGED_EVENT, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        timeestimate: Number(event.target.value),
      }
    });
    this.dispatchEvent(estimateChangedEvent);
  }

  render() {
    return html`
      <fieldset>
        <legend>Opdracht</legend>
        <label for="description">Beschrijving:</label><textarea id="desciption" name="description" row="10" col="70"></textarea>
        <label for="timeestimate">Tijdsindicatie</label><input id="timeestimate" name="timeestimate" type="number" @input="${this.#estimatedtimeChanged}">
      </fieldset>
    `
  }

}

window.customElements.define('repair-assignment', RepairAssignment);
