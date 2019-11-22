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
      <h1 class="text-center border-bottom">${this.name}
      </h1>
      <button onclick="app.listController.addItem('${this.id}')" class="btn btn-primary">Create item</button>
    </div>`;
  }
}



// <form onsubmit="app.listController.addItem(event)">
// <div class="form-group">
//   <label for="name">Name</label>
//   <input type="text" class="form-control" id="name" placeholder="Enter item name" />
// </div>
// </form>