import { generateId } from "../utils.js";

export default class Item {

  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name || "";
    this.detail = data.detail || "";
    this.listId = data.listId;
  }

  // template for items - to inject on list template
  get itemTemplate() {
    return `
    <dt>'${this.name}'</dt>
    <dd>${this.detail}</dd>
    <button class="btn btn-outline btn-danger" onclick="app.listController.removeItem('${this.listId}','${this.id}')">X</button>
    `;
  }

}