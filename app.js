(function() {
    var app = angular.module('personalSite', []);

    app.controller('OptionController', function(){
        this.options = links;
    });

    var works = [
    {
        title: 'Trexquant',
        desc: 'test test test',
    },
    {
        title: 'GMAT test',
        desc: 'hi hi hi',
    }];

    var links = [{
            title: 'ABOUT',
            img: 'img/freiburg.jpg',
            alt: 'cool octopus',
            ind: 1,
        },
        {
            title: 'WORKS',
            img: 'img/octopus.jpg',
            alt: 'cool machine',
            ind: 3,
        },
        {
            title: 'CONTACT',
            img: 'img/press.jpg',
            alt: 'cool tree',
            ind: 4,
        },];

    app.controller('PageController', function(){
        this.options = navs;
        this.notOnMain = true;
        this.links = links;
        this.current = 0;

        this.isSet = function(n){
            return this.current === n;
        };

        this.setCurrent = function(n){
            this.current = n;
            if (n>0) {
                this.notOnMain=true;
            }
            else {
                this.notOnMain = false;
            }
        };

        this.checkIndex = function(n){
            return n - 2 === 0;
        }
        
    });

    var navs = ['Home', 'About', 'Project Name', 'Works', 'Contact'];
    
    app.directive('navBar', function(){
        return {
            restrict: 'E',
            templateUrl: 'navbar.html'
        };
    });

    app.directive('optScreen', function(){
        return {
            restrict: 'E',
            templateUrl: 'mainlinks.html',
        };
    });

    app.directive('aboutScreen', function(){
        return {
            restrict: 'E',
            templateUrl: 'about.html',
        };
    });

    app.directive('contactScreen', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact.html',
        };
    })

    app.directive('workPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'work-panels.html',
            controller:function(){
                this.works = works;
            },
            controllerAs: "workpanel"
        };
    });


    
})();
