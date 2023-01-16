import { LitElement, css, html } from "lit";
import { Router } from '@vaadin/router';
import RepairHeader from './repair-header';
import RepairCustomer from './repair-customer';
import RepairAssignment from './repair-assignment';
import RepairService from "../../service/repair-service";
import Repair from "../../model/repair";

const ESTIMATETIME_CHANGED_EVENT = 'estimated-changed';

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
    this.estimatedRepairtime = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.nextId().then((id) => {
      this.repairid = id;
    });
    window.addEventListener(ESTIMATETIME_CHANGED_EVENT, (e) => this.#estimatedTimeEventHandler(e));
  }

  disconnectedCallback() {
    window.removeEventListener(ESTIMATETIME_CHANGED_EVENT, this.#estimatedTimeEventHandler);
    super.disconnectedCallback();
  }

  #estimatedTimeEventHandler(event) {
   this.estimatedRepairtime = event.detail.timeestimate; 
  }

  #printHandler() {
    window.print();
  }

  #submitform(event) {
    event.preventDefault();
    const newRepair = new Repair(this.repairid, this.estimatedRepairtime);
    this.repairService.addRepair(newRepair).then(() => Router.go('/'));
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
