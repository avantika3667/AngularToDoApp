var app = angular.module('ToDoApp', []);
app.controller('todoCtrl', ["$scope", function ($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function () {
        $scope.todoList.push({ taskName: $scope.todoInput, done: false });
        $scope.todoInput = "";
        $scope.hideAddForm();
    };

    $scope.remove = function () {
        angular.forEach($scope.todoList, function (val, key) {
            if (val.done) {
                $scope.todoList.splice(key, 1);
            }
        });
    };
    $scope.delete = function (index) {
        $scope.todoList.splice(index, 1);
    }

    $scope.addToDo = function () {
        document.getElementById('fade').style.display = 'block'
        document.getElementById('light').style.display = 'block';

    }
    $scope.hideAddForm = function () {
        document.getElementById('light').style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }
}]);

