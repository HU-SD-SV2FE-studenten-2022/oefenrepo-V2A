import { LitElement, css, html } from "lit";
import TodoList from '../components/todo-list';
import TotalRepairTime from '../components/total-repair-time';

export default class DashboardPage extends LitElement {
  static get styles() { 
    return css``; 
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <h1>Dashboard</h1>
      <total-repair-time></total-repair-time>
      <todo-list></todo-list>
      <a href="/repairform">Nieuwe Reparatie</a>
    `;
  }
}

window.customElements.define('dashboard-page', DashboardPage);
