import { LitElement, css, html } from "lit";
import RepairService from "../../service/repair-service";

const REPAIRASSIGNMENT_CHANGED_EVENT = 'repairassignments-changed';

export default class TodoListItem extends LitElement {
  static get styles() {
    return css``; 
  }

  static get properties() {
    return {
      id: { type: Number },
      esttime: { type: Number },
    };
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.todoRepairs = [];
  }

  #removeItem() {
    this.repairService.deleteRepair(this.id).then((repairs) => {
      const repairAssignmentChangedEvent = new CustomEvent(REPAIRASSIGNMENT_CHANGED_EVENT, {
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      this.dispatchEvent(repairAssignmentChangedEvent);
    });
  }

  render() {
    return html`
      <li>
          ID: ${this.id} -
          EstTime: ${this.esttime}
          <button @click="${this.#removeItem}">Verwijder</button>
      </li>
    `;
  }
}

window.customElements.define('todo-list-item', TodoListItem);
