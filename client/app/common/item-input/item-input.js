import angular from 'angular';
import {itemInputComponent} from './item-input.component';
import './item-input.scss';

export const itemInputModule = angular
.module('item-input', [])
.component('itemInput', itemInputComponent)
.name;
