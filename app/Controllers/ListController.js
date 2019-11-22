import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  console.log(store.Lists);

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
