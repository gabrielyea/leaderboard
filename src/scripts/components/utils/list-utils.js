export default class MyList {
  addToList = ({ list, item }) => {
    list = list.concat(item);
    return list;
  }

  /**
 * Removes by index
 *
 * @param {list} list Should be an array of objects with at least one index.
 * @example myList = [{index: 1, vale: x}]
 */
  removeFromList = ({ list, index }) => {
    list = list.filter((listItem) => listItem.index !== index);
    return list;
  }

  mySort = (list) => {
    const byScore = (a, b) => {
      if (a.score > b.score) {
        return 1;
      }
      return -1;
    };

    return list.sort((byScore));
  }

  /**
   * Finds the html element task object in the list.
   *
   ** Searches by element.reference.
   * @param {HTMLElement} searchThis A html object.
   * @returns {Task} task object associated with the html element.
   */
  findElement = (searchThis) => {
    const found = this.taskList.find((element) => element.reference === searchThis);
    return found;
  }
}