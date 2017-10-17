'use strict';

/*
 Initial Task
 Robot lives in square and can move every time in one position (top, bottom, right, left)
 You are given a task to find from how many start position robot will move to the same position
 while left-is-free do move-left
 while top-is-free do move-top
 while right-is-free do move-right
 while bottom-is-free do move-bottom

 Additional tasks
 1. White function to build html labyrinth representation based on array
 2. White 2 classes Robot and AnimatedRobot to walk throught array

 */

/**
 * Raw labyrinth data as js array of objects
 *
 * @type {*[]}
 */
const labyrinth = [
    [
        {top: false, left: false},
        {top: false, left: true},
        {top: false, left: true},
        {top: false, left: false},
        {top: false, left: true},
        {top: false, left: false},
    ],
    [
        {top: true, left: false},
        {top: false, left: false},
        {top: true, left: true},
        {top: true, left: true},
        {top: true, left: false},
        {top: false, left: true},
    ],
    [
        {top: true, left: false},
        {top: true, left: true},
        {top: true, left: true},
        {top: false, left: true},
        {top: true, left: true},
        {top: true, left: true},
    ],
    [
        {top: true, left: false},
        {top: false, left: true},
        {top: true, left: true},
        {top: true, left: true},
        {top: true, left: true},
        {top: true, left: false},
    ],
    [
        {top: true, left: false},
        {top: true, left: true},
        {top: true, left: true},
        {top: true, left: false},
        {top: true, left: true},
        {top: true, left: true},
    ],
    [
        {top: true, left: false},
        {top: true, left: false},
        {top: false, left: true},
        {top: true, left: true},
        {top: true, left: true},
        {top: false, left: true},
    ],
];

/**
 * Simple function to visualize labyrinth
 *
 * @param labyrinth
 */

class HtmlLabyrinth{
    constructor(labyrinth, id){
        this.getLabyrinth = () => labyrinth;
        this.getID = () => id;
    }

    visualize(){
        const labyrinth = this.getLabyrinth(),
            width = 50,
            border = 4,
            totalWidth = (width + 2 * border) * labyrinth.length;
        let html = "";
        for(let x = 0, rowLen = labyrinth.length; x < rowLen; x++){
            for(let y = 0, colLen = labyrinth[x].length; y < colLen; y++){
                const style = {
                        "float": "left",
                        "width": width + "px",
                        "height": width + "px",
                        "border-top": border + "px solid rgba(0, 0, 0, .1)",
                        "border-left": border + "px solid rgba(0, 0, 0, .1)",
                    },
                    position = x + ":" + y;
                if(!labyrinth[x][y].top){
                    style["border-top"] = border+"px solid black";
                }
                if(!labyrinth[x][y].left){
                    style["border-left"] = border+"px solid black";
                }
                if(x == rowLen - 1){
                    style["border-bottom"] = border+"px solid black";
                }
                if(y == colLen - 1){
                    style["border-right"] = border+"px solid black";
                }

                let stringStyle = "";
                Object.keys(style).map(key=>{
                    stringStyle += key+": "+style[key]+";";
                });
                html += "<div position='"+position+"' style='"+stringStyle+"'></div>";
            }
        }

        const div = document.createElement("div");
        div.id = this.getID();
        div.setAttribute("style", "width: "+totalWidth+"px;");
        div.innerHTML = html;
        document.body.appendChild(div);
    }

    highLight(position){
        const [x, y] = position;
        const div = document.querySelector("[position='"+x+":"+y+"']");
        div.style.background = "red";
    }

    clear(){
        const nodes = document.querySelectorAll("#"+this.getID()+" div");
        [...nodes].map(div=>{
            div.style.background = "";
        })
    }
}




/**
 * class Robot for labyrinth walking
 */
class Robot{
    constructor(labyrinth, start){
        this.getLabyrinth = () => labyrinth;
        this.getSize = () => labyrinth.length;
        this._position = start;
    }

    get position(){
        return this._position;
    }
    set position(position){
        this._position = position;
    }

    moveLeft(){
        let [x, y] = this.position;
        y--;
        this.position = [x, y];
    }
    moveRight(){
        let [x, y] = this.position;
        y++;
        this.position = [x, y];
    }
    moveTop(){
        let [x, y] = this.position;
        x--;
        this.position = [x, y];
    }
    moveBottom(){
        let [x, y] = this.position;
        x++;
        this.position = [x, y];
    }

    isFreeLeft(){
        const labyrinth = this.getLabyrinth();
        let [x, y] = this.position;
        return labyrinth[x][y].left;
    }
    isFreeRight(){
        const labyrinth = this.getLabyrinth(),
            size = this.getSize();
        let [x, y] = this.position;
        y++;
        if(y >= size){
            return false;
        }
        return labyrinth[x][y].left;
    }
    isFreeTop(){
        const labyrinth = this.getLabyrinth();
        let [x, y] = this.position;
        return labyrinth[x][y].top;
    }
    isFreeBottom(){
        const labyrinth = this.getLabyrinth(),
            size = this.getSize();
        let [x, y] = this.position;
        x++;
        if(x >= size){
            return false;
        }
        return labyrinth[x][y].top;
    }

    run(){
        while(this.isFreeLeft()){
            this.moveLeft();
        }
        while(this.isFreeTop()){
            this.moveTop();
        }
        while(this.isFreeRight()){
            this.moveRight();
        }
        while(this.isFreeBottom()){
            this.moveBottom();
        }
        return this.position;
    }
}

/**
 * class AnimatedRobot for showing how robot moves in labyrinth
 */
class AnimatedRobot extends Robot{
    constructor(html, start){
        super(html.getLabyrinth(), start);
        this.html = html;

        this.html.highLight(start);
        this.counter = 0;
    }

    get position(){
        return this._position;
    }
    set position(position){
        this._position = position;
        this.counter+=100;
        setTimeout(()=>{
            this.html.highLight(position);
        }, this.counter)
    }

    run(){
        super.run();
        setTimeout(()=>{
            this.html.clear();
        }, this.counter+1000);
    }
}


/**
 * Check how many position will lead to starting position
 * Simple solution with O(n^2) complexity, because we have to check every cell in out matrix
 *
 * @param labyrinth
 */
const solution = (labyrinth) => {
    let iteration = 0;
    const points = [];
    for(let x = 0, rowLen = labyrinth.length; x < rowLen; x++){
        for(let y = 0, colLen = labyrinth[x].length; y < colLen; y++){
            const start = [x, y];
            const robot = new Robot(labyrinth, start);
            const finish = robot.run();
            iteration++;
            if(JSON.stringify(start) == JSON.stringify(finish)){
                points.push(x+":"+y);
            }
        }
    }
    console.log("solution", iteration);
    return points;
}

/**
 * More advanced solution with backTracking
 * The idea is that, because the last actions is moveBottom, we can check only those cells that can't go bottom, cause otherwise robot will go bottom
 * So the complexity is based on how many points in labyrinth where robot can't go bottom
 * We can count n, on the bottom, and maybe n or 2n somewhere inside the labyrinth. So the time complexity would be O(2*n) to O(m*n), but we can count
 * it like O(n)
 *
 * @param labyrinth
 */
const solutionWithBackTracking = (labyrinth) => {
    let iteration = 0;
    const points = [];
    for(let x = 0, rowLen = labyrinth.length; x < rowLen; x++){
        for(let y = 0, colLen = labyrinth[x].length; y < colLen; y++){
            const start = [x, y];
            const robot = new Robot(labyrinth, start);
            if(!robot.isFreeBottom()){
                const finish = robot.run();
                iteration++;
                if(JSON.stringify(start) == JSON.stringify(finish)){
                    points.push(x+":"+y);
                }
            }
        }
    }
    console.log("solutionWithBackTracking", iteration);
    return points;
}




const html = new HtmlLabyrinth(labyrinth, "labyrinth");
html.visualize();

const robot = new AnimatedRobot(html, [4, 2]);
robot.run();

console.log(
    solution(labyrinth),
    solutionWithBackTracking(labyrinth),
)