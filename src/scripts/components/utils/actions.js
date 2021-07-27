/**
 * Super lightweight observer/action pattern.
 *
 ** The class that extends / creates an instance of action will be the subject.
 ** The functions registered on the actions list will be the observers.
 ** Anonymous functions cannot be removed, use remove all!
 *
 * TODO: Still dont know how to force an 'interface' or pattern in js.
 * but the subject should have a method called notify or invoke for each action.
 * That method can be added via prototype to avoid polluting the class.
 */
export default class Actions {
  actions = [];

  addActions = (...callbacks) => {
    callbacks.forEach((action) => {
      this.actions.push(action);
    });
  }

  contains = (search) => {
    const found = this.actions.find((action) => search === action);
    if (found) {
      return true;
    }
    return false;
  }

  removeAction = (search) => {
    this.actions = this.actions.filter((fun) => search !== fun);
  }

  doActions = ({ param }) => {
    this.actions.forEach((callback) => {
      callback(param);
    });
  }
}
