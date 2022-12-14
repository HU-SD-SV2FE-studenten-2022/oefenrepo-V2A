import { LitElement, css, html } from "lit";
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';

export default class RepairForm extends LitElement {
  static get styles() {
    return css`
      repair-assignment {
        display: block;
      }

      @media print {
        repair-assignment {}
      }
    `;
  }

  static get properties() {
    return {};
  }

  #printHandler() {
    window.print();
  }

  render() {
    return html`
      <form>
        <repair-header></repair-header>
        <repair-customer></repair-customer>
        <repair-assignment></repair-assignment>
        <button @click="${this.#printHandler}">Print</button>
      </form>
    `
  }

}

window.customElements.define('repair-form', RepairForm);
