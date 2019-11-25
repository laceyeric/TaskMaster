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
    let knownList = store.Lists.find(elem => elem.id == item.listId);
    knownList.items.push(item);
    store.saveState();
  }

  // remove a list. compare id from button submit to id on object. note index of true return and splice to remove.
  removeList(str) {
    var alert;
    var r = confirm("Are you sure you want to delete this?");
    if (r == true) {
      let listIndex = store.State.lists;
      for (let i = 0; i < listIndex.length; i++) {
        if (listIndex[i].id == str) {
          listIndex.splice(i, 1);
          console.log(listIndex);
          store.saveState();
          return;
        } else {
        }
      }
    }
  }

  // acts when delete button is clicked.  removes the item and waits for confirm window entry
  removeItem(id1, id2) {
    var alert;
    var r = confirm("Are you sure you want to delete this?");
    if (r == true) {
      let itemIndex = store.State.lists.find(elem => elem.id == id2);
      for (let i = 0; i < itemIndex.items.length; i++) {
        if (itemIndex.items[i].id == id1) {
          itemIndex.items.splice(i, 1);
          console.log(itemIndex.items);
          store.saveState();
          // alert = "This object will be removed";
          return;
        } else {
          // alert = "Canceled";
        }
        // document.getElementById("alert").innerHTML = alert;
      }
    }
  }

  warning() {
    var alert;
    var r = confirm("Are you sure you want to delete this?");
    if (r == true) {
      alert = "Canceled";
    } else {
      alert = "This object will be removed";
    }
    document.getElementById("demo").innerHTML = alert;
  }

}
const SERVICE = new ListService();
export default SERVICE;



// let itemIndex = store.State.lists.find(elem => elem.id == id2);
//       for (let i = 0; i < itemIndex.items.length; i++) {
//         if (itemIndex.items[i].id == id1) {
//           itemIndex.items.splice(i, 1);
//           console.log(itemIndex.items);
//           store.saveState();
//           return;