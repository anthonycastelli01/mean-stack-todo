(function() {
  var app = angular.module('todo', []);

  app.controller('TodoController', function() {
    this.tasks = {};
  })
})();