import { LitElement, css, html } from "lit";

export default class RepairCustomer extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        <legend>Klantgegevens</legend>
        <label for="customername">Naam:</label><input id="customername" name="customername" type="text">
        <label for="customertel">Tel:</label><input id="customertel" name="customertel" type="text">
        <label for="customeremail">Email:</label><input id="customeremail" name="customeremail" type="email">
      </fieldset>
    `
  }

}

window.customElements.define('repair-customer', RepairCustomer);
