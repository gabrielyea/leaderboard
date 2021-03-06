export default class LocalStorage {
  saveData = ({ data }) => {
    window.localStorage.setItem('my-score-data', JSON.stringify(data));
  };

  loadInputData = () => {
    if (!this.isEmpty()) {
      const loadedData = JSON.parse(window.localStorage.getItem('data'));
      return loadedData;
    }
    return null;
  };

  isEmpty = () => {
    if (localStorage.getItem('data') === null || localStorage.length <= 0) {
      return true;
    }
    return false;
  }
}
