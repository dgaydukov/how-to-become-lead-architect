//'use strict';


/**
 * Tell everything you know about inheritance
 *
 *
 * There are 5 approaches
 * 1. Closure Way
 * 2. Constructor
 * 3. Prototype
 * 4.
 * 5. ES6 Class
 */


(()=>{
    function Printer(pageNumber) {
        console.log("Initial pageNumber "+pageNumber);
        var _pageNumber = pageNumber;

        this.getPageNumber = function(){
            return _pageNumber;
        }

        this.setPageNumber = function (pageNumber) {
            console.log("setting pageNumber to "+pageNumber);
            _pageNumber = pageNumber;
        }

        this.print = function () {
            console.log("print "+_pageNumber+" pages");
        }
    }

    console.log("--------------------------Closure Way-------------------------------")
    var printer = new Printer(10);
    printer.setPageNumber(20);
    printer.print();
})();


(()=>{
    function Printer(pageNumber) {
        console.log("Initial pageNumber "+pageNumber);
        this._pageNumber = pageNumber;

        this.getPageNumber = function(){
            return this._pageNumber;
        }

        this.setPageNumber = function (pageNumber) {
            console.log("setting pageNumber to "+pageNumber);
            this._pageNumber = pageNumber;
        }

        this.print = function () {
            console.log("print "+this._pageNumber+" pages");
        }
    }

    console.log("--------------------------Constructor-------------------------------")
    var printer = new Printer(10);
    printer.setPageNumber(20);
    printer.print();
})();

(()=>{
    function Printer(pageNumber) {
        console.log("Initial pageNumber "+pageNumber);
        this._pageNumber = pageNumber;
    }

    Printer.prototype.getPageNumber = function(){
        return this._pageNumber;
    }

    Printer.prototype.setPageNumber = function (pageNumber) {
        console.log("setting pageNumber to "+pageNumber);
        this._pageNumber = pageNumber;
    }

    Printer.prototype.print = function () {
        console.log("print "+this._pageNumber+" pages");
    }

    console.log("--------------------------Prototype-------------------------------")
    var printer = new Printer(10);
    printer.setPageNumber(20);
    printer.print();
})();



(()=>{
    /*
     In this case you don't need to (and cannot) create an instance of the class, it already exists. So you simply start using this instance
     */
    var Printer = {
        _pageNumber: 0,
        init: function (pageNumber) {
            console.log("Initial pageNumber "+pageNumber);
            _pageNumber = pageNumber;
            return this;
        },
        getPageNumber: function (){
            return _pageNumber;
        },
        setPageNumber(pageNumber) {
            console.log("setting pageNumber to "+pageNumber);
            _pageNumber = pageNumber;
            return this;
        },
        print(){
            console.log("print "+_pageNumber+" pages");
        }
    }

    console.log("--------------------------Object-------------------------------")
    var printer = Printer.init(10);
    printer.setPageNumber(20);
    printer.print();
})();



(()=>{
    class Printer{
        constructor(pageNumber){
            console.log("Initial pageNumber "+pageNumber);
            this._pageNumber = pageNumber;
        }
        get pageNumber(){
            return this._pageNumber;
        }
        set pageNumber(pageNumber) {
            console.log("setting pageNumber to "+pageNumber);
            this._pageNumber = pageNumber;
        }

        print(){
            console.log("print "+this._pageNumber+" pages");
        }
    }

    console.log("--------------------------ES6 Class-------------------------------")
    var printer = new Printer(10);
    printer.pageNumber = 20;
    printer.print();
})();