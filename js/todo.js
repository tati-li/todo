/**
 * Created by tlitvinova on 03.09.2014.
 */

function todoCtrl($scope) {
    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {title: 'Learn AngularJS', done: false}, {title: 'Build an Angular app', done: false} ];
    localStorage.setItem('todos', JSON.stringify($scope.todos));

    $scope.allItems = function(){
        return $scope.todos.length;
    };

    $scope.ifItems = function(){
        return (!$scope.allItems() == 0)
    };

    $scope.markAllItems = function(){
        angular.forEach($scope.todos, function(todo){
            todo.done = !$scope.markAll;
        });
    };

    $scope.addNew = function(){
        if ($scope.newItem) {
            $scope.todos.push({title: $scope.newItem, done:false});
            $scope.newItem = '';
            $scope.markAll = '';
        }
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    $scope.isNew = function(){
        if (!$scope.newItem) return "btn disabled"
    };

    $scope.leftItems = function(){
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count += todo.done ? 1 : 0
        });
        return count;
    };

    $scope.clearDone = function(){
        var notDoneItems = $scope.todos;
        $scope.todos = [];
        angular.forEach(notDoneItems, function(todo){
            if (!todo.done)
            $scope.todos.push({title: todo.title, done:false});
        });
        $scope.markAll = '';
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    $scope.isDone = function(){
        var isDone = "disabled";
        angular.forEach($scope.todos, function(todo){
            if (todo.done)
            return isDone = "";
        });
        return isDone;
    };
}