import angular from 'angular';
import {sortableListComponent} from './sortable-list.component';
import './sortable-list.scss';

export const sortableListModule = angular
.module('sortable-list', [])
.component('sortableList', sortableListComponent)
.name;
