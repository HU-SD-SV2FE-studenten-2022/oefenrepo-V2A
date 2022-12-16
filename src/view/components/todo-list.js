import { LitElement, css, html } from "lit";
import TodoListItem from "./todo-list-item";
import RepairService from "../../service/repair-service";

const REPAIRASSIGNMENT_CHANGED_EVENT = 'repairassignments-changed';

export default class TodoList extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      todoRepairs: { type: Array },
    }
  }

  constructor() {
    super();
    this.repairService = new RepairService();
    this.todoRepairs = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.repairService.getRepairs().then((repairs) => {
      this.todoRepairs = repairs;
    });
    this.addEventListener(REPAIRASSIGNMENT_CHANGED_EVENT, this.#repairAssignementChangedHandler);
  }

  disconnectedCallback() {
    this.removeEventListener(REPAIRASSIGNMENT_CHANGED_EVENT, this.#repairAssignementChangedHandler);
    super.disconnectedCallback();
  }

  #repairAssignementChangedHandler(event) {
    this.repairService.getRepairs().then((repairs) => {
      this.todoRepairs = repairs;
    });
  }
  
  render() {
    return html`
      <ul>
        <!-- ${this.todoRepairs.map((repair) => html`<li>ID: ${repair.id} - EstTime: ${repair.timeestimate} <button>Verwijder</button></li>`)} -->
        ${this.todoRepairs.map((repair) => html`
          <todo-list-item id="${repair.id}" esttime="${repair.timeestimate}"></todo-list-item>
        `)}
      </ul>
    `;
  }
}

window.customElements.define('todo-list', TodoList);
