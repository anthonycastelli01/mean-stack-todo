(function() {
  var app = angular.module('todo', []);

  app.controller('ListController', function() {
    this.tasks = exampleTasks;
  });

  app.controller('TaskController', function() {
    this.task = {};

    this.addTask = function(list) {
      list.tasks.push(this.task);
      this.task = {};
    };
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