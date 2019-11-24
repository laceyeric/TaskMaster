import { generateId } from "../utils.js";

export default class List {

  constructor(data) {

    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
    this.items = data.items || [];
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  // This template creates a list card with items(eventually) and new item form
  get ListTemplate() {
    return `
    <div class="col-5 mt-3 p-3 border rounded bg-info">
    <button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${this.id}')">X</button>
    <dl class="ml-5">
    <h1 class="text-center border-bottom">${this.name}</h1>
      ${this.getItemTemplates()}
      </dl>
      <form onsubmit="app.listController.addItem(event)">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter item name" />
    </div>
    <div class="form-group">
      <label for="detail">Detail</label>
      <input type="text" class="form-control" id="detail" placeholder="Enter item details" />
    </div>
    </form>
      <button onclick="app.listController.addItem('${this.id}')" class="btn btn-primary justify-content-center">Create item</button>
    </div>`;
  }

  getItemTemplates() {
    let template = "";
    this.items.forEach(item => {
      template += `
      <li>${item}</li>
      `
    })
  }
}
