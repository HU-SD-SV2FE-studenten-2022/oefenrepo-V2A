import { LitElement, css, html } from "lit";
import RepairForm from '../components/repair-form';

export default class RepairformPage extends LitElement {
  static get styles() { 
    return css``; 
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <repair-form></repair-form>
    `;
  }
}

window.customElements.define('repairform-page', RepairformPage);
