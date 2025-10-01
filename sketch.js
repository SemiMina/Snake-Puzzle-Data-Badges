let cnv;
let canvasWidth = 1366;
let canvasHeight = 1820;
let triangleSideSize = 60;
let triangleBigSideSize =  triangleSideSize*1.414;
let greenColor = "#00A36C";
let redColor = "#DC143C";
let blueColor = "#0096FF";
let yellowColor = "#FAFA33";
let creamColor = "#FFFDD0";
let darkRedColor = "#301934";
backgroundColor = "#C1E1C1";
let table, test, totalRows;
let name, drawing, handcraft, data, dataviz;
let lastMembersCount = 20;
let sum;
let font;
let colorArray = [];
let rnd;

function preload() {
  table = loadTable("data/Датасет_ Цветы и цифры. Знакомство - Данные.csv", "csv", "header");
  font = loadFont('/fonts/asap_medium.ttf');
}

function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  background(backgroundColor);
  frameRate(25);
  angleMode(DEGREES);
  
  rowCount = table.getRowCount();
  console.log(rowCount);
  
  translate(triangleSideSize*1.3, triangleSideSize*2.5);

  // header
  textSize(54);
  textFont(font);
  strokeWeight(4);
  stroke(creamColor);
  fill(darkRedColor);
  text("FLOWERS & NUMBERS\nDATA ART COMMUNITY", 0, 0);
  
  textSize(26);
  noStroke();
  text("DATA BADGES BASED ON SKILLS LEVEL", 0, triangleSideSize*2.4);
  translate(triangleSideSize*11, -triangleSideSize*0.35);
  
  // legend
  fill(darkRedColor);
  textSize(18);
  triangleSideSize = triangleSideSize * 0.6;
  text("SKILL TYPE", 0, 0);
  translate(0, triangleSideSize*1.5);
  text("Drawing", 0, 0);
  text("Handicraft", triangleSideSize*4, 0);
  text("Data", triangleSideSize*8.6, 0);
  text("Data Viz", triangleSideSize*11.9, 0);
  translate(triangleSideSize*3.1, triangleSideSize*0.4);
  drawTriangeType1("left", "up", blueColor);
  translate(triangleSideSize*4.5, 0);
  drawTriangeType1("left", "up", yellowColor);
  translate(triangleSideSize*3.3, 0);
  drawTriangeType1("left", "up", redColor);
  translate(triangleSideSize*4.1, 0);
  drawTriangeType1("left", "up", greenColor);
  
  translate(-triangleSideSize*14.9, triangleSideSize*2);
  text("SKILL LEVEL", 0, 0);
  translate(0, triangleSideSize*1.3);
  text("low     -", 0, 0);
  translate(triangleSideSize*3.5, triangleSideSize**0.7);
  drawTriangeType1("left", "up", blueColor);
  translate(triangleSideSize*2, 0);
  drawTriangeType1("left", "up", blueColor);
  drawTriangeType1("right", "up", blueColor);
  translate(triangleSideSize*3, 0);
  drawTriangeType1("left", "up", blueColor);
  drawTriangeType1("right", "up", blueColor);
  translate(triangleSideSize, -triangleSideSize);
  drawTriangeType1("left", "down", blueColor);
  translate(triangleSideSize*1, triangleSideSize*0.7);
  text("high", 0, 0);
  
  // badges
  translate(-triangleSideSize*34.5, triangleSideSize*6.5);
  triangleSideSize = triangleSideSize / 0.6;
  textSize(20);
  let numRow = 0;
  for(let i = rowCount - lastMembersCount; i < rowCount; i++) {
    if(numRow % 4 === 0 && numRow > 0) {
       translate(-triangleSideSize*15, triangleSideSize*4);
       } else {
         translate(triangleSideSize*5, 0);
       }

    name = table.getString(i, "Name eng");
    drawing = table.getNum(i, "Рисование");
    handcraft = table.getNum(i, "Рукоделие");
    data = table.getNum(i, "Данные");
    dataviz = table.getNum(i, "Датавиз");
    sum = drawing + handcraft + data + dataviz;
    console.log(i, sum);
    
    if (sum === 5) {
      rnd = random(2);
      console.log(rnd);
      if (rnd < 1) {
        drawEnvelope5(drawing, handcraft, data, dataviz); 
      } else {
        drawFish5(drawing, handcraft, data, dataviz);
      }
    } else if (sum === 6) {
      rnd = random(4);
      console.log(rnd);
      if (rnd < 1) {
        drawHouse6(drawing, handcraft, data, dataviz);
      } else if (rnd < 2){
        drawHeart6(drawing, handcraft, data, dataviz);
      } else if (rnd < 3){
        drawCrown6(drawing, handcraft, data, dataviz);
      } else {
        drawTurtle6(drawing, handcraft, data, dataviz);
      }
    } else if (sum === 7) {
      drawDuck7(drawing, handcraft, data, dataviz);
    } else if (sum === 8) {
      rnd = random(2);
      console.log(rnd);
      if (rnd < 1) {
        drawCaterpillar8(drawing, handcraft, data, dataviz); 
      } else {
        drawPyramid8(drawing, handcraft, data, dataviz); 
      }
    } else if (sum === 9) {
      rnd = random(4);
      console.log(rnd);
      if (rnd < 1) {
        drawLadle9(drawing, handcraft, data, dataviz);
      } else if (rnd < 2){
        drawDog9(drawing, handcraft, data, dataviz);
      } else if (rnd < 3){
        drawBullet9(drawing, handcraft, data, dataviz);
      }   else {
        drawReversedPyramid9(drawing, handcraft, data, dataviz);
      }   
    } else if (sum === 10) {
      rnd = random(3);
      console.log(rnd);
      if (rnd < 1) {
        drawCandy10(drawing, handcraft, data, dataviz);  
      } else if (rnd < 2){
        drawShorts10(drawing, handcraft, data, dataviz);
      } else {
        drawPlane10(drawing, handcraft, data, dataviz);
      }
    } else if (sum === 11) {
      draShirt11(drawing, handcraft, data, dataviz);        
    } else {
      errorMessage();
    }
    
    textAlign(CENTER);
    textSize(24);
    text(name, triangleSideSize, triangleSideSize);
    
    numRow = numRow + 1;
  }
  
  // footer
  textAlign(LEFT);
  textSize(18);
  translate(0, 0);
  text("Created by Marina Kharkova, 2025", -triangleSideSize*2, triangleSideSize*3.2);
  text("'Flowers & Numbers' Data Art Community", -triangleSideSize*2, triangleSideSize*3.7);
}

function draw() {
}

function drawTriangeType1(triDirection, triPosition, triColor){
  push();
  strokeWeight(3);
  stroke(255);
  strokeJoin(BEVEL);
  fill(triColor);
  if (triDirection === "left" && triPosition === "down") {
  rotate(180);
} else if (triDirection === "right" && triPosition === "down") {
  rotate(90);
} else if (triDirection === "left" && triPosition === "up") {
  rotate(270);
} else {
  rotate(0);
}
  triangle (0, 0, 0, -triangleSideSize, triangleSideSize, 0);
  pop();
}

function drawTriangeType2(triDirection, triPosition, triColor){
  push();
  strokeWeight(3);
  stroke(255);
  strokeJoin(BEVEL);
  fill(triColor);
  if (triDirection === "gorizontal" && triPosition === "down") {
  translate(0, -triangleBigSideSize);
  rotate(90);
} else if (triDirection === "gorizontal" && triPosition === "up") {
  translate(triangleBigSideSize, 0);
  rotate(270);
} else if (triDirection === "vertical" && triPosition === "left") {
  translate(triangleBigSideSize, -triangleBigSideSize);
  rotate(180);
} else {
  rotate(0);
}
  triangle (0, 0, 0, -triangleBigSideSize, triangleBigSideSize/2, -triangleBigSideSize/2);
  pop();
}

// 5 конверт
function drawEnvelope5(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(0, -triangleBigSideSize);
    drawTriangeType2("gorizontal", "up", colorArray[4]);
    pop();
}

// 5 рыбка
function drawFish5(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(triangleBigSideSize*0.2, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("vertical", "left", colorArray[4]);
    pop();
}

// 6 домик
function drawHouse6(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    drawTriangeType1("right", "up", colorArray[0]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[1]);
    drawTriangeType1("right", "down", colorArray[2]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[3]);
    translate(-triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    drawTriangeType1("right", "up", colorArray[5]);
    translate(0, triangleSideSize);
    pop();
}

// 6 сердце
function drawHeart6(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "left", colorArray[0]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[1]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[2]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(-triangleBigSideSize, -triangleBigSideSize);
    drawTriangeType2("gorizontal", "up", colorArray[4]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[5]);
    pop();
}

// 6 корона
function drawCrown6(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[2]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[3]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[4]);
    drawTriangeType2("vertical", "left", colorArray[5]);
    pop();
}

// 6 черепаха
function drawTurtle6(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[2]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[3]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[4]);
    translate(-triangleBigSideSize*2, 0);
    drawTriangeType2("vertical", "left", colorArray[5]);
    pop();
}

// 7 утка
function drawDuck7(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(0, -triangleSideSize);
    drawTriangeType1("right", "down", colorArray[0]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[1]);
    drawTriangeType1("right", "up", colorArray[2]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[3]);
    drawTriangeType1("right", "down", colorArray[4]);
    translate(-triangleSideSize*2, 0);
    drawTriangeType1("left", "up", colorArray[5]);
    drawTriangeType1("right", "up", colorArray[6]);
    pop();
}

// 8 гусеница
function drawCaterpillar8(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleSideSize*0.5, 0);
    drawTriangeType1("left", "up", colorArray[0]);
    drawTriangeType1("right", "up", colorArray[1]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[2]);
    drawTriangeType1("right", "down", colorArray[3]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    drawTriangeType1("right", "up", colorArray[5]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[6]);
    drawTriangeType1("right", "down", colorArray[7]);
    pop();
}

// 8 пирамида
function drawPyramid8(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    drawTriangeType1("left", "up", colorArray[0]);
    drawTriangeType1("right", "up", colorArray[1]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[2]);
    drawTriangeType1("right", "down", colorArray[3]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    drawTriangeType1("right", "up", colorArray[5]);
    translate(-triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "up", colorArray[6]);
    drawTriangeType1("right", "up", colorArray[7]);
    pop();
}

// 9 ковш
function drawLadle9(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleSideSize*0.5, -triangleSideSize);
    drawTriangeType1("right", "down", colorArray[0]);
    drawTriangeType1("right", "up", colorArray[1]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[2]);
    drawTriangeType1("right", "down", colorArray[3]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    drawTriangeType1("left", "down", colorArray[5]);
    drawTriangeType1("right", "up", colorArray[6]);
    drawTriangeType1("right", "down", colorArray[7]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[8]);
    pop();
}

// 9 собака
function drawDog9(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(0, -triangleSideSize);
    drawTriangeType1("right", "down", colorArray[0]);
    drawTriangeType1("right", "up", colorArray[1]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[2]);
    drawTriangeType1("right", "up", colorArray[3]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    drawTriangeType1("left", "down", colorArray[5]);
    drawTriangeType1("right", "up", colorArray[6]);
    drawTriangeType1("right", "down", colorArray[7]);
    translate(-triangleSideSize*2, 0);
    drawTriangeType1("left", "up", colorArray[8]);
    pop();
}

// 9 пуля
function drawBullet9(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[4]);
    drawTriangeType2("vertical", "left", colorArray[5]);
    drawTriangeType2("gorizontal", "up", colorArray[6]);
    drawTriangeType2("gorizontal", "down", colorArray[7]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[8]);
    pop();
}

// 9 обратная пирамида
function drawReversedPyramid9(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "left", colorArray[0]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[1]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[2]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(-triangleBigSideSize, -triangleBigSideSize);
    drawTriangeType2("gorizontal", "up", colorArray[4]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "up", colorArray[5]);
    translate(-triangleBigSideSize*1.5, triangleBigSideSize*0.5);
    drawTriangeType2("gorizontal", "down", colorArray[6]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[7]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("gorizontal", "down", colorArray[8]);
    pop();
}

// 10 конфета
function drawCandy10(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.25, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("vertical", "left", colorArray[4]);
    translate(triangleBigSideSize*2, 0);
    drawTriangeType2("vertical", "right", colorArray[5]);
    drawTriangeType2("vertical", "left", colorArray[6]);
    drawTriangeType2("gorizontal", "up", colorArray[7]);
    drawTriangeType2("gorizontal", "down", colorArray[8]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[9]);
    pop();
}

// 10 самолет
function drawPlane10(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(triangleBigSideSize*0.2, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(-triangleBigSideSize, 0);
    drawTriangeType2("vertical", "left", colorArray[4]);
    drawTriangeType2("gorizontal", "up", colorArray[5]);
    translate(triangleBigSideSize*2, 0);
    drawTriangeType2("vertical", "right", colorArray[6]);
    drawTriangeType2("gorizontal", "down", colorArray[7]);
    translate(0, -triangleBigSideSize);
    drawTriangeType2("gorizontal", "up", colorArray[8]);
    drawTriangeType2("vertical", "left", colorArray[9]);
    pop();
}

// 10 шорты
function drawShorts10(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(0, -triangleSideSize);
    drawTriangeType1("right", "down", colorArray[0]);
    drawTriangeType1("right", "up", colorArray[1]);
    translate(triangleSideSize, -triangleSideSize);
    drawTriangeType1("left", "down", colorArray[2]);
    drawTriangeType1("right", "down", colorArray[3]);
    translate(triangleSideSize, triangleSideSize);
    drawTriangeType1("left", "up", colorArray[4]);
    translate(0, 0);
    drawTriangeType1("left", "down", colorArray[5]);
    translate(0, 0);
    drawTriangeType1("right", "up", colorArray[6]);
    translate(0, 0);
    drawTriangeType1("right", "down", colorArray[7]);
    translate(-triangleSideSize*2, 0);
    drawTriangeType1("left", "up", colorArray[8]);
    drawTriangeType1("left", "down", colorArray[9]);
    pop();
}

// 11 рубашка
function draShirt11(numBlue, numYellow, numRed, numGreen) {
    push();
    colorShuffledArray(numBlue, numYellow, numRed, numGreen);
    translate(-triangleBigSideSize*0.75, 0);
    drawTriangeType2("vertical", "right", colorArray[0]);
    drawTriangeType2("vertical", "left", colorArray[1]);
    drawTriangeType2("gorizontal", "up", colorArray[2]);
    drawTriangeType2("gorizontal", "down", colorArray[3]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[4]);
    drawTriangeType2("vertical", "left", colorArray[5]);
    drawTriangeType2("gorizontal", "up", colorArray[6]);
    translate(triangleBigSideSize, 0);
    drawTriangeType2("vertical", "right", colorArray[7]);
    drawTriangeType2("vertical", "left", colorArray[8]);
    drawTriangeType2("gorizontal", "up", colorArray[9]);
    drawTriangeType2("gorizontal", "down", colorArray[10]);
    pop();
}

function errorMessage(){
  textAlign(CENTER);
  text("error", triangleSideSize, 0);
}

function colorShuffledArray(numBlue, numYellow, numRed, numGreen) {
  colorArray = [];
  for (let x = 0; x < numBlue; x++) {
    colorArray.push("#0096FF");
  }
  for (let y = 0; y < numYellow; y++) {
    colorArray.push("#FAFA33");
  }
  for (let z = 0; z < numRed; z++) {
    colorArray.push("#DC143C");
  }
  for (let w = 0; w < numGreen; w++) {
    colorArray.push("#00A36C");
  }
  colorArray.sort(() => Math.random() - 0.5);
}