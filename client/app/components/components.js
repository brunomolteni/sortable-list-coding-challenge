import angular from 'angular';
import {homeModule} from './home/home';

export const componentsModule = angular.module('app.components', [
  homeModule,
])

.name;