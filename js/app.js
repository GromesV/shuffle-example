var app = angular.module('app', []);

// Define the `PhoneListController` controller on the `app` module
app.controller('QnrController', function QnrController($scope) {
    var vm = this;
    this.hi = 'hello'

    Questions = [
        {
            'text' : 'favorite animal',
            'answers' : [
                {
                    'val': 1,
                    'text' : 'dog',
                },
                {
                    'val': 2,
                    'text' : 'cat',
                },
                {
                    'val': 3,
                    'text' : 'bird',
                },
                {
                    'val': 4,
                    'text' : 'fish',
                },
            ]
        },
        {
            'text' : 'favorite food',
            'answers' : [
                {
                    'val': 1,
                    'text' : 'pizza',
                },
                {
                    'val': 2,
                    'text' : 'sandwich',
                },
                {
                    'val': 3,
                    'text' : 'spaghetti',
                },
                {
                    'val': 4,
                    'text' : 'sarma',
                },
            ]
        },
        {
            'text' : 'favorite music',
            'answers' : [
                {
                    'val': 1,
                    'text' : 'rock',
                },
                {
                    'val': 2,
                    'text' : 'classical',
                },
                {
                    'val': 3,
                    'text' : 'hip hip',
                },
                {
                    'val': 4,
                    'text' : 'electro',
                },
            ]
        },
    ]

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    Questions[0].answers = shuffle(Questions[0].answers).slice(0,2);

    this.qstNdx = 0;

    this.next = function(){
        this.qstNdx++;
        this.question = Questions[this.qstNdx];
    }

    this.back = function(){
        this.qstNdx--;
        this.question = Questions[this.qstNdx];
    }


    this.init = function(){
        this.question = Questions[this.qstNdx];
    }

    this.init();

});