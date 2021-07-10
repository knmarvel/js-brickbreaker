let canvas = document.querySelector("#canvas");
let paddlePosition = "99"
let ballPosition = "85"

const drawBricks = function (level) {
    for (let row in level) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let column in level[row]) {
            let newBrick = document.createElement("div");
            newBrick.id = `id${row}${column}`;
            newBrick.classList.add("brick");
            if (level[row][column] === "1") {
                newBrick.classList.add("on");
            }
            rowDiv.appendChild(newBrick)

        }
        canvas.appendChild(rowDiv);
    }
}

const drawBall = function (ballPosition) {
    let ball = document.createElement("div");
    ball.id = "ball";
    ballPosition = document.querySelector(`#id${ballPosition}`);
    ballPosition.appendChild(ball);
}

const drawPaddle = function (paddlePosition) {
    let oldPaddle = document.querySelector(".paddle");
    if(oldPaddle !== null){
    oldPaddle.classList.remove("paddle");
    }
    let newPaddle = document.querySelector(`#id${paddlePosition}`);
    newPaddle.classList.add("paddle");

}

const movePaddle = function(event){
    paddlePosition = paddlePosition * 1;
    if(event.code === "ArrowLeft"){
        if(paddlePosition > 90){
            paddlePosition = (paddlePosition -= 1).toString();
            drawPaddle(paddlePosition)
        }
    }
    else if(event.code === "ArrowRight"){
        if(paddlePosition < 99){
            paddlePosition = (paddlePosition += 1).toString();
            drawPaddle(paddlePosition)
        }
    }
}


document.addEventListener("keydown", movePaddle)
drawBricks(brickPatterns[0]);
drawBall(ballPosition);
drawPaddle(paddlePosition)