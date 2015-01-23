(function() {
    var app = angular.module('personalSite', []);

    app.controller('OptionController', function(){
        this.options = links;
    });

    var works = [
    {
        title: 'Trexquant Data Tabulator',
        subtitle: 'Fast, Reliable Representation of Performance',
        desc: "Responding to the need for information to be easily and quickly understood, I developed an internal PHP/Javascript application to visualize financial data from Bloomberg. Our firm’s daily and long-term profits and losses are graphed and tracked. The data tabulator uses a series of methods—such as heat maps and graphs—to display the performance of individual financial strategies that are being traded within the company's portfolio."
    },
    {
        title: 'Trade Simulator',
        subtitle: 'Intra Day Trade Simulations',
        desc: "At TrexQuant, I created an Intra-day simulator that modeled profits and losses from trading stocks within a 12-hour period using MATLAB. The results provided substantive information to evaluate and test certain alpha ideas. "
    },
    {
        title: 'GRE Vocab Quizzer',
        subtitle: 'Smarter Questions, Smarter Answers',
        desc: 'A Django application designed to help students study for the GRE test, this vocabulary quizzer was designed to respond to the strengths and weaknesses of each student. By remembering and focusing on the words that students struggle with, adaptability becomes a crucial element to this application. Similar quizzers randomly generate answers and fail to enhance the user’s performance. To address this issue, I applied Levenshtein distances to develop a system that generates answer choices that are similar to each other, thus increasing the user’s need for attention. '

    },
    {
        title: 'MATLAB Mesh Generator',
        subtitle: 'Easy Meshes for the Uninitiated',
        desc: "I participated in research project led by Dr. Anne Fausto-Sterling that explored whether or not mothers inherently preferred certain interactions with their children based on gender. Although I initially used MATLAB and SPSS to conduct statistical analysis, I eventually converted the data into an interface that could be used by those who were unfamiliar with such programs. The GUIDE toolbox allowed users to easily visualize represented data and increased the process’ efficiency by 300%, providing a smooth transition after I graduated. "
        }
    ];

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

    var navs = ['Home', 'About', 'Phil Park', 'Works', 'Contact'];
    
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

                this.workBlurb = "This page features a collection of several of my projects. Please click to find out more individual information";

                this.setWork = function(work) {
                    this.current = work;
                    this.workBlurb = this.current.desc;
                }

                this.workSelected = function(work) {
                    return this.current === work;
                }
                
                this.setBlurb = function(t) {
                    this.workBlurb = t;
                }

            },
            controllerAs: "workpanel"
        };
    });


    
})();
