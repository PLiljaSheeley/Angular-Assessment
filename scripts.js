var app = angular.module('myApp',[]);

app.controller('MainController', function($scope, $http){  

	var vm = this;
	vm.messages = [];
	vm.userInput = '';
	vm.buttonClicked = false;
	vm.count = 0;
	vm.previousMessage = false;
	vm.currentMessage = '';
	vm.messagesToShow = [];

	vm.showUserInput = function(){

		vm.currentMessage = vm.userInput;
		vm.count++;
		vm.buttonClicked = true;

		if (vm.count>1){
			vm.previousMessage = true;
			
		}
		vm.messages.push(vm.currentMessage);
		vm.userInput = '';
		


	}

})