import template from './home.html';

export const homeComponent = {
  restrict: 'E',
  bindings: {
    listData: '<'
  },
  template,
  controller: class HomeController {
    constructor(dbService) {
      "ngInject";
      this.db = dbService;
    }
    $onChanges(changes) {
      if (changes.listData) {
          this.list = [].concat(changes.listData.currentValue);
      }
    }
    addItem(val) {
      this.db.add(val).then( ()=> this.updateList() );
    }
    editItem(id,val) {
      this.db.update(id,val).then( ()=> this.updateList() );
    }
    removeItem(index){
      this.db.remove(index).then( ()=> this.updateList() );
    }
    reorderList(sourceIndex,targetIndex){
      this.list.splice(targetIndex, 0, this.list.splice(sourceIndex, 1)[0]);
      this.db.replace(this.list).then( ()=> this.updateList() );
    }
    clearList(newList){
      this.list = [];
      this.db.clear();
    }
    updateList() {
      return this.db.getAll().then(list=>{
          this.list = list; 
      })
    }
  }
};