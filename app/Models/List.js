import { generateId } from "../utils.js";
import Item from "./Item.js";

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
    <div class="col-12 col-sm-6 col-md-4 mt-3 p-3 border rounded bg-info">
    <button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${this.id}')">X</button>
    <h1 class="text-center border-bottom mb-2">${this.name}</h1>
    <dl class="ml-5">
      ${this.getItemTemplates()}
    </dl>
      <form onsubmit="app.listController.addItem(event, '${this.id}')">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter item name" />
    </div>
    <button type="submit" class="btn btn-primary justify-content-center">Create item</button>
    </form>
    </div>`;
  }

  getItemTemplates() {
    let template = "";
    this.items.forEach(item => {
      template += `
      <li class="justify-content-around">${item.name}: ${item.detail} <div class="btn-group"><button type="button" class="btn btn-outline btn-danger" onclick="app.listController.removeItem('${item.id}','${this.id}')">X</button></div></li>
      `
    });
    return template;
  }
}

      // <div class="form-group">
      //   <label for="detail">Detail</label>
      //   <input type="text" class="form-control" id="detail" placeholder="Enter item details" />
      // </div>
