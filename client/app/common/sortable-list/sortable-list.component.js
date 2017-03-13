import template from './sortable-list.html';

export const sortableListComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
    onRemove: '&',
    onReorder: '&',
    onEdit: '&'
  },
  template
};