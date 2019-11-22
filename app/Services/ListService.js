import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addList(rawdata) {
    console.log("Did we get to the Service?");
    let entry = new List(rawdata);

    store.State.lists.push(entry);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
