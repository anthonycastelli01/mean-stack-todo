(function() {
  var app = angular.module('todo', []);

  app.controller('ListController', function() {
    this.tasks = exampleTasks;
  });

  var exampleTasks = [
    {
      name: "Feed the dog"
    },
    {
      name: "Pet the cat"
    }
  ];
})();