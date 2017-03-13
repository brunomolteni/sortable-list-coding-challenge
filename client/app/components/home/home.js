import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {homeComponent} from './home.component';
import './home.scss';

export const homeModule = angular.module('home', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        listData: dbService => dbService.getAll()
      }
    });
})
.component('home', homeComponent)
.name;