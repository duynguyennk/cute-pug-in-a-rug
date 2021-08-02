const canvas = document.querySelector('canvas');
const secondsCount = document.querySelector(".seconds");
const context = canvas.getContext('2d');
const pugDimension = { width: 198 * 2, height: 198 * 2 }

const startTime = Date.now();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.translate(window.innerWidth / 2, window.innerHeight / 2);

const image = new Image();
image.src = 'assets/cute-pug.png';

const loopingPugs = 40;
const offsetDistance = 100;
let currentOffset = 0;

image.onload = () => {
    startLooping();
}

function draw(offset) {
    context.drawImage(
        image,
        -pugDimension.width / 2 - offset / 2,
        -pugDimension.height / 2 - offset / 2,
        pugDimension.width + offset,
        pugDimension.height + offset
    );
}


function loopDraw() {
    for (let i = loopingPugs; i >= 1; i--) {
        draw(i * offsetDistance +currentOffset);
    }
    draw(offsetDistance);
    currentOffset++;
    currentOffset%=offsetDistance;

    const newTime = Math.floor((Date.now() -startTime)/1000);
    secondsCount.innerText = newTime;

    requestAnimationFrame(loopDraw);
}

function startLooping() {
    requestAnimationFrame(loopDraw);
}