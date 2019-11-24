import List from "../Models/List.js";
import Item from "../Models/Item.js";
import store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addList(btnList) {
    let entry = new List(btnList);

    store.State.lists.push(entry);
    store.saveState();
  }

  addItem(newItem) {
    let item = new Item(newItem);
    let knownList = store.State.lists.find(elem => elem.id == item.listId);
    knownList.items.push(item);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;