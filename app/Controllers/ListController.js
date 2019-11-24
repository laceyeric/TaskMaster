import ListService from "../Services/ListService.js";
import store from "../store.js";
import List from "../Models/List.js";
import Item from "../Models/Item.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = '';
  let lists = store.Lists;
  lists.forEach(l => { template += l.ListTemplate; })
  console.log(store.Lists);

  document.querySelector("#lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let btnList = {
      name: formData.name.value,
    }
    ListService.addList(btnList);
    // formData.reset();
    _drawLists();
  }

  addItem(event, listId) {
    event.preventDefault();
    console.log("Did item hit the controller?");
    let formData = event.target;
    let newItem = {
      name: formData.name.value,
      // detail: formData.detail.value,
      listId: listId,
    }
    ListService.addItem(newItem);
    _drawLists();
  }
}
