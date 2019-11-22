import ListService from "../Services/ListService.js";
import store from "../store.js";
import List from "../Models/List.js";

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

  addList() {
    event.preventDefault();
    console.log("add list hits the controller");
    // TODO get this data from form submission
    let btnList = {
      name: "fakeList",
      items: []
    }
    ListService.addList(btnList);
    _drawLists();
  }
}
