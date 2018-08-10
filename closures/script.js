// 1-4
var nonsense = function(string) {
    var blab = function(){
        alert(string);
    }
    return blab;
}

var blabLater = nonsense('foo');
var blabAgainLater = nonsense('bar');

blabLater();
blabAgainLater();

// 5
var lastNameTrier = function(firstName){ 
     var innerFunction = function(lastName) { 
         console.log(firstName + ' ' + lastName)
     };
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown'
 
firstNameFarmer('Jane'); //logs 'Farmer Jane'
firstNameFarmer('Lynne');

// 6

var storyWriter = function() {
    var story = '';
    return {
        addWords: function(string){
            story += string + ' ';
            return story.trim();
        },
        erase: function(){
            return story = '';
        }
    }
}