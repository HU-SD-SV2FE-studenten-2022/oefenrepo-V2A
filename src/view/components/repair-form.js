import { LitElement, css, html } from "lit";
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';
import RepairService from "../../service/repair-service";

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
    return {
      repairid: { type: Number },
    };
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.repairid = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.nextId().then((id) => this.repairid = id);
  }

  #printHandler() {
    window.print();
  }

  #submitform() {
    // TODO: Reparatie toevoegen
  }

  render() {
    return html`
      <form>
        <repair-header repairid="${this.repairid}"></repair-header>
        <repair-customer></repair-customer>
        <repair-assignment></repair-assignment>
        <button @click="${this.#printHandler}">Print</button>
        <button @click="${this.#submitform}">Toevoegen</button>
      </form>
    `
  }

}

window.customElements.define('repair-form', RepairForm);
