let container;
let startTime;
let img;
let buttImg;
let hitImg;
let clickX;
let clickY;

let portions;

let clickTime = -1;

function createImg(path) {
    const oImg = document.createElement("img");
    oImg.setAttribute('src', path);
    oImg.setAttribute('draggable', false);
    container.appendChild(oImg);
    return oImg;
}

function setup() {
    container = document.getElementById("container");
    img = createImg(`imgs/City1.png`);
    buttImg = createImg("imgs/bigDango.png");
    buttImg.style.position = "absolute";
    hitImg = createImg("imgs/Hit1.png");
    hitImg.style.position = "absolute";
    buttImg.style.cursor = "pointer";
    hitImg.style.pointerEvents = "none";
    setMaxSize();

    startTime = window.performance.now();
    main();
}

function g() {
    const tSinceStart = window.performance.now() - startTime;
    const animIndex = Math.floor(tSinceStart / 100) % 18;

    img.setAttribute('src', `imgs/City${animIndex+1}.png`);
    buttImg.setAttribute('src', `imgs/bigDango${animIndex + 1}.png`);
        
    if (clickTime > 0) {
        buttImg.setAttribute('src', `imgs/butt${animIndex % 8 + 1}.png`);
        const tSinceClick = window.performance.now() - clickTime;
        
        if (tSinceClick > 500) {
            clickTime = -1;
            hitImg.style.display = "none";
        }

        hitImg.setAttribute('src', `imgs/Hit${Math.floor(tSinceClick / 100) % 5 + 1}.png`);

        hitImg.style.top = (clickY - portions * 6) + "px";
        hitImg.style.left = (clickX - portions * 6) + "px";
    }
}

function main() {
	var stopMain = window.requestAnimationFrame(main);
	g();
}

function onClick(e) {
    hitImg.style.display = "block";
    clickTime = window.performance.now();
    const r = img.getBoundingClientRect();
    clickX = e.clientX - r.left;
    clickY = e.clientY - r.top;
}

function setMaxSize() {
	const screenHeight = screen.height;
    document.body.height = screenHeight;
	portions = Math.floor(screenHeight / 360);
    const height = portions * 360;
    const width = portions * 640;

    buttImg.style.width = (21 * portions) + "px";
    buttImg.style.height = (20 * portions) + "px";
    buttImg.style.bottom = (28 * portions) + "px";
    buttImg.style.left = (330 * portions) + "px";

	container.style.width = width + "px";
	container.style.height = height + "px";
    img.style.width = width + "px";
	img.style.height = height + "px";

    hitImg.style.width = (12*portions)+"px";
    hitImg.style.height = (12*portions)+"px";

    buttImg.addEventListener('mousedown', onClick);
}

setup();