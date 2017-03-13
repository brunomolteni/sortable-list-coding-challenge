import angular from 'angular';
import {dbService} from './db.service';

export const dbModule = angular
.module('db', [])
.service('dbService', dbService)
.name;
