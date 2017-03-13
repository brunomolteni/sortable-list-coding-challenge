import db from 'idb-keyval'; // https://github.com/jakearchibald/idb-keyval

export class dbService{
  constructor($timeout) {
    "ngInject";
    this.list = db.get('list').then(list => { // We look into the db to see if list is populated
      if(!list){ // if not we populate it locally with an starting array and setup the db
        this.list = [{data:'Try editing me and refreshing',id:1337}];
        db.set('list', this.list);
      }
      else this.list = list; // if it is already populated we use the db value to assign locally
      return this.list;
    });
  }
  getAll() {
    return Promise.resolve(this.list);
  }

  add(data) {
    this.list.push({data:data,id:Date.now()}); // using Date.now as unique id to get correct positioning with ng-animate
    return db.set('list', this.list );
  }

  update(index, data) {
    this.list[index].data = data;
    return db.set('list', this.list );
  }

  replace(data) {
    this.list = data;
    return db.set('list', this.list );
  }

  remove(index) {
    this.list.splice(index,1);
    return db.set('list', this.list );
  }

  clear() {
    this.list = [];
    return db.clear();
  }
}