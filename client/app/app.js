import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';
import 'angular-native-dragdrop'; // https://github.com/angular-dragdrop/angular-dragdrop

import {commonModule} from './common/common';
import {componentsModule} from './components/components';
import {appComponent} from './app.component';

angular.module('app', [
    uiRouter,
    'ngAnimate',
    'ang-drag-drop',
    commonModule,
    componentsModule
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', appComponent);
