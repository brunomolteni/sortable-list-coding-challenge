import angular from 'angular';
import {dbModule} from './db/db';
import {sortableListModule} from './sortable-list/sortable-list';
import {itemInputModule} from './item-input/item-input';

export const commonModule = angular.module('app.common', [
  dbModule,
  sortableListModule,
  itemInputModule
])
.name;