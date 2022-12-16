import { LitElement, css, html } from "lit";
import { calcNumberSum } from "../../utils/repair-utils";
import RepairService from "../../service/repair-service";

const REPAIRASSIGNMENT_CHANGED_EVENT = 'repairassignments-changed';

export default class TotalRepairTime extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      repairAssignments: { type: Array }
    }
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.repairAssignments = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
    window.addEventListener(REPAIRASSIGNMENT_CHANGED_EVENT, this.#repairAssignementChangedHandler.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener(REPAIRASSIGNMENT_CHANGED_EVENT, this.#repairAssignementChangedHandler.bind(this));
    super.disconnectedCallback();
  }

  #repairAssignementChangedHandler(event) {
    console.log(this);
    console.log('TOTAL-REPAIR-TIME has received an event');
    this.repairService.getRepairs().then((repairs) => {
      this.repairAssignments = repairs;
    });
  }

  render() {
    return html`
      <p>De totale verwachte reparatietijd van de todo list is: ${calcNumberSum(this.repairAssignments.map((repair) => repair.timeestimate))}</p>
    `;
  }
}

window.customElements.define('total-repair-time', TotalRepairTime);
