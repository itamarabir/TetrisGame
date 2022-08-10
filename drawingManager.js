const squareSize = 20
var canvas = document.getElementById("baseCanvas");
var ctx = canvas.getContext("2d");

function drawBoard() {
    ctx.beginPath();
    ctx.rect(0, 0, BoardSize.cols * squareSize, BoardSize.rows * squareSize);
    ctx.stroke();
}

function clearBoard() {
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, BoardSize.cols * squareSize, BoardSize.rows * squareSize)
}

function drawGrid() {
    startPoint = {}
    endPoint = {}
    startPoint.col = 0
    endPoint.col = BoardSize.cols

    ctx.fillStyle = '#000000'

    //draw horizontal lines
    for(i = 0; i < BoardSize.rows; i++) {
        startPoint.row = i
        endPoint.row = i
        drawLine(startPoint, endPoint)
    }

    startPoint.row = 0
    endPoint.row = BoardSize.rows
    //draw vertical lines
    for(i = 0; i < BoardSize.cols; i++) {
        startPoint.col = i
        endPoint.col = i
        drawLine(startPoint, endPoint)
    }
}

function drawLine(startPoint, endPoint) {
    if(         startPoint.row < 0 || startPoint.row > BoardSize.rows
            ||  startPoint.col < 0 || startPoint.col > BoardSize.cols
            ||  endPoint.row < 0   || endPoint.row > BoardSize.rows
            ||  endPoint.col < 0   || endPoint.col > BoardSize.cols) {
                console.log("(" + startPoint.row + ", " + startPoint.col + ") : ("
                + endPoint.row + ", " + endPoint.col + ")")
                throw "Line is out of bounds:"
            }
    ctx.beginPath();
    ctx.moveTo(startPoint.col * squareSize, startPoint.row * squareSize)
    ctx.lineTo(endPoint.col * squareSize, endPoint.row * squareSize)
    ctx.stroke();
}

function fillSquare(position) {
    ctx.fillStyle = '#000000'
    ctx.beginPath();
    ctx.fillRect(position.col * squareSize, position.row * squareSize, squareSize, squareSize);
}