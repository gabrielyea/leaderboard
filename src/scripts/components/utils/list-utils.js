export default class MyList {
  addToList = ({ list, item }) => {
    list = list.concat(item);
    return list;
  }

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

  findElement = (searchThis) => {
    const found = this.taskList.find((element) => element.reference === searchThis);
    return found;
  }
}