"use strict";
// body game
const body = document.getElementById('body');
const w = body.offsetWidth;
const h = body.offsetHeight;
// wall "one"
const one = document.getElementById('one');
const oneW = one.offsetWidth;
const oneH = one.offsetHeight;
const oneL = one.offsetLeft;
const oneT = one.offsetTop;
// wall "two"
const two = document.getElementById('two');
const twoW = two.offsetWidth;
const twoH = two.offsetHeight;
const twoL = two.offsetLeft;
const twoT = two.offsetTop;
// wall "tree"
const tree = document.getElementById('tree');
const treeW = tree.offsetWidth;
const treeH = tree.offsetHeight;
const treeL = tree.offsetLeft;
const treeT = tree.offsetTop;
// wall "four"
const four = document.getElementById('four');
const fourW = four.offsetWidth;
const fourH = four.offsetHeight;
const fourL = four.offsetLeft;
const fourT = four.offsetTop;
// wall "five"
const five = document.getElementById('five');
const fiveW = five.offsetWidth;
const fiveH = five.offsetHeight;
const fiveL = five.offsetLeft;
const fiveT = five.offsetTop;
// wall "six"
const six = document.getElementById('six');
const sixW = six.offsetWidth;
const sixH = six.offsetHeight;
const sixL = six.offsetLeft;
const sixT = six.offsetTop;
// wall "seven"
const seven = document.getElementById('seven');
const sevenW = seven.offsetWidth;
const sevenH = seven.offsetHeight;
const sevenL = seven.offsetLeft;
const sevenT = seven.offsetTop;
// wall "eight"
const eight = document.getElementById('eight');
const eightW = eight.offsetWidth;
const eightH = eight.offsetHeight;
const eightL = eight.offsetLeft;
const eightT = eight.offsetTop;
// wall "nine"
const nine = document.getElementById('nine');
const nineW = nine.offsetWidth;
const nineH = nine.offsetHeight;
const nineL = nine.offsetLeft;
const nineT = nine.offsetTop;
// circle "then"
const then = document.getElementById('then');
const thenW = then.offsetWidth;
const thenH = then.offsetHeight;
const thenL = then.offsetLeft;
const thenT = then.offsetTop;
// tha variable for to "PAWN" the zone
let score = 0;

let pawn = document.getElementById('pawn');
window.addEventListener('keypress', keyControl);
let pawnY,pawnX;



function pos() {
  pawnX = pawn.offsetLeft;
  pawnY = pawn.offsetTop;
}

function keyControl(e) {
  if(e.keyCode === 38){ pawn.style.top = pawnY +(-2)+'px';}// keyboard: flesh up
  if(e.keyCode === 40){ pawn.style.top = pawnY +2+'px';}// keyboard: flesh down
  if(e.keyCode === 37){ pawn.style.left = pawnX +(-2)+'px';}// keyboard: flesh left
  if(e.keyCode === 39){ pawn.style.left = pawnX +2+'px';}// keyboard: flesh right
  pos();
  findPawn();
}

// Model of count of the zones;
// This same model-zone is use inside of zone.
//  =========================================
//  +-----+-----+
//  |  1  |  2  |
//  +-----+-----+
//  |  3  |  4  |
//  +-----+-----+
//  =========================================

function findPawn(){
  pos();
  if ((pawnX <= 0) || (pawnY <= 0) || (pawnX >= (w - 32) ) || (pawnY >= (h - 32)) ) {
    gameOver();
  }

  if((pawnX < 530) && (pawnY < 310)){// first division zone 1
    if((pawnX < 260) && (pawnY < 160)) {//  == division zone 1.1
      if((pawnX < 130) && (pawnY < 80)) {
        if(pawnY > 10){ takeDownWelcome(); }
        if(score === 0){
          if (pawnY > 50) {
            targetOneOn(true);
          }
        }
        colisionOne(); }
      else if((pawnX > 130) && (pawnY < 80)) { colisionTwo(); }
      else if((pawnX < 130) && (pawnY > 80)) { colisionOne(); }
      else if((pawnX > 130) && (pawnY > 80)) { colisionTwo(); }
    }
    else if((pawnX > 260) && (pawnY<160)) {// == division zone 1.2
      if((pawnX < 415) && (pawnY < 80)){ colisionTree();}
      else if((pawnX > 415) && (pawnY < 80)){ colisionTree(); }
      else if((pawnX < 415) && (pawnY > 80)){ colisionFour(); }
      else if((pawnX > 415) && (pawnY > 80)){ colisionFive(); }
    }
    else if((pawnX < 260) && (pawnY > 160)) {// == division zone 1.3
      if((pawnX < 130) && (pawnY < 228)){ colisionOne(); }
      else { colisionSix(); }
    }
    else if((pawnX > 260) && (pawnY > 160)) {// == division zone 1.4
      if((pawnX < 415) && (pawnY < 228)){ colisionSeven(); }
      else if((pawnX > 415) && (pawnY < 228)){ colisionSeven(); }
      else if((pawnX < 415) && (pawnY > 228)){ colisionSixExtend(); }
      else if((pawnX > 415) && (pawnY > 228)){ colisionEight(); }
    }
  }
  else if((pawnX > 530) && (pawnY < 310)){// first division zone 2
    if((pawnX < 780) && (pawnY < 160)) {// first division zone 2.1
      if((pawnX < 650) && (pawnY < 80)){
        colisionNine();
        targetOneOut();
      }
      else if((pawnX > 650) && (pawnY < 80)){ colisionNine(); }
      else if((pawnX < 650) && (pawnY > 80)){ colisionThen(); }
      else if((pawnX > 650) && (pawnY > 80)){ colisionThen(); }
    }
    else if((pawnX > 780) && (pawnY < 160)) {// first division zone 2.2
      if((pawnX < 910) && (pawnY < 80)){ colisionEleven(); }
      else if((pawnX > 910) && (pawnY < 80)){ colisionTwelve(); }
      else if((pawnX < 910) && (pawnY > 80)){ colisionEleven(); }
      else if((pawnX > 910) && (pawnY > 80)){ colisionTwelve(); }
    }
    else if((pawnX < 780) && (pawnY > 160)) {// first division zone 2.3
      if((pawnX < 650) && (pawnY < 228)){ colisionThen(); }
      else if((pawnX > 650) && (pawnY < 228)){ colisionThen(); }
      else if((pawnX < 650) && (pawnY > 228)){
        colisionThirteen();
        targetTwoOut();
      }
      else if((pawnX > 650) && (pawnY > 228)){ colisionFourteen(); }
    }
    else if((pawnX > 780) && (pawnY > 160)) {// first division zone 2.4
      if((pawnX < 910) && (pawnY < 228)){ colisionFifteen(); }
      else if((pawnX > 910) && (pawnY < 228)){ colisionFifteen(); }
      else if((pawnX < 910) && (pawnY > 228)){ colisionSixteen(); }
      else if((pawnX > 910) && (pawnY > 228)){ colisionSixteen(); }
    }

  }
  else if((pawnX < 530) && (pawnY > 310)){// first division zone 3
    if((pawnX < 260) && (pawnY < 480)) {// first division zone 3.1
      if((pawnX < 130) && (pawnY < 400)){ colisionSeventeen(); }
      else if((pawnX > 130) && (pawnY < 400)){ colisionEighteen(); }
      else if((pawnX < 130) && (pawnY > 400)){ colisionSeventeen(); }
    }
    else if((pawnX > 260) && (pawnY < 480)) {// first division zone 3.2
      if((pawnX < 415) && (pawnY < 400)){ colisionNineteen(); }
      else if((pawnX > 415) && (pawnY < 400)){ colisionTwenty(); }
      else if((pawnX < 415) && (pawnY > 400)){ colisionNineteen(); }
      else if((pawnX > 415) && (pawnY > 400)){ colisionTwenty(); }
    }
    else if((pawnX < 260) && (pawnY > 480)) {// first division zone 3.3
      if((pawnX < 130) && (pawnY < 560)){ colisionSeventeen(); }
      else if((pawnX < 130) && (pawnY > 560)){
        colisionSeventeen();
        targetTreeOut()
      }
      else if((pawnX > 130) && (pawnY > 560)){ colisionSeventeen(); }
    }
    else if((pawnX > 260) && (pawnY > 480)) {// first division zone 3.4
      if((pawnX < 415) && (pawnY < 560)){ colisionTwentyOne(); }
      else if((pawnX > 415) && (pawnY < 560)){ colisionTwentyTwo(); }
      else if((pawnX < 415) && (pawnY > 560)){ colisionTwentyOne(); }
      else if((pawnX > 415) && (pawnY > 560)){ colisionTwentyTwo(); }
    }

  }
  else if((pawnX > 530) && (pawnY > 310)){// first division zone 4
    if((pawnX < 780) && (pawnY < 480)) {// first division zone 4.1
      if((pawnX < 650) && (pawnY < 400)){ colisionTwentyTree(); }
      else if((pawnX > 650) && (pawnY < 400)){ colisionTwentyFour(); }
      else if((pawnX < 650) && (pawnY > 400)){ colisionTwentyFive(); }
    }
    else if((pawnX > 780) && (pawnY < 480)) {// first division zone 4.2
      if((pawnX < 910) && (pawnY < 400)){ colisionTwentySix(); }
      else if((pawnX > 910) && (pawnY < 400)){ colisionTwentySix(); }
    }
    // if((pawnX<780) && (pawnY>480)) {}
    // if((pawnX>780) && (pawnY>480)) {}
  }
}

//  1
function colisionOne() {
  pos();
  if (((pawnX+32) >= oneL) && ( pawnY <= (oneT+oneH )) && (pawnX < (oneL+oneW) ) ) {
    gameOver();
  }
  if (((pawnX+32) >= twoL) && ( pawnY <= (twoT+twoH)) && (pawnX <= (twoL+twoW))  ) {
    gameOver();
  }
}
//  2
function colisionTwo() {
  pos();
  if( (pawnX< (oneL+oneW)) || ((pawnY+32)>twoT) ){
    gameOver();
  }
}
//  3
function colisionTree() {
  pos();
  if( ((pawnX+32)>nineL) && ((pawnY+32)>nineT) ){
    gameOver();
  }
}
//  4
function colisionFour() {
  pos();
  if( (((pawnX+32)>nineL) && (pawnY < (nineT+nineH))) || ((pawnX < (twoL+twoW)) && ((pawnY+32) > twoT)) ){
    gameOver();
  }
}
//  5
function colisionFive() {
  pos();
  if( (pawnY < (nineT+nineH)) || ((pawnY+32) > sevenT)){
    gameOver();
  }
}
//  6
function colisionSix() {
  pos();
  if( (((pawnX+32) >= twoL) && ( pawnY <= (twoT+twoH))) || ( (pawnX+32)>treeL && ((pawnY+32) > treeT) ) ){
    gameOver();
  }
}
//  6extend
function colisionSixExtend() {
  pos();
  if ( (pawnX+32) > sevenL){
    gameOver();
  }
}
//  7
function colisionSeven() {
  pos();
  if( (pawnX < (twoL+twoW)) || (pawnX+32) > sevenL ){
    gameOver();
  }
}
//  8
function colisionEight() {
  pos();
  if( (pawnX < (treeL+treeW)) || (pawnY < (sevenT+sevenH)) || (((pawnX+32) > sixL) && ((pawnY+32) > sixT)) ) {
    gameOver();
  }
}
//  9
function colisionNine() {
  pos();
  if( ((pawnY+32) > nineT) && (pawnX < (nineL+nineW)) ){
    gameOver();
  }
}
//  10
function colisionThen() {
  pos();
  if( (pawnY < (nineT+nineH)) && (pawnX < (nineL+nineW)) || (((pawnY+32) > sevenT) && pawnX < (sevenL+sevenW)) ){
    gameOver();
  }
}
//  11
function colisionEleven() {
  pos();
  if( ((pawnX+32) > thenL) && ((pawnY+32) > thenT) ){
    if(score >= 6 ) { gameFinish(); }
    else if (score < 6) { gameOver(); }
  }
}
//  12
function colisionTwelve() {
  pos();
  if( (pawnX < (thenL+thenW)) && ((pawnY+32) > thenT)){
    if(score >= 6 ) { gameFinish(); }
    else if (score < 6) { gameOver(); }
  }
}
//  13
function colisionThirteen() {
  pos();
  if( (pawnY < (sevenT+sevenH)) || ( (pawnY+32) > sixT) && pawnX < (sixL+sixW) || ((pawnX+32) > eightL) ){
    gameOver();
  }
}
//  14
function colisionFourteen() {
  pos();
  if( (pawnY < (sevenT+sevenH)) || ((pawnX+32) > eightL) ){
    gameOver();
  }
}
//  15
function colisionFifteen() {
  pos();
  if( ((pawnX+32) > thenL) && (pawnY < (thenT+thenH)) && (pawnX < (thenL+thenW)) ){
    if(score >= 6 ) { gameFinish(); }
    else if (score < 6) { gameOver(); }
  }
}
//  16
function colisionSixteen() {
  pos();
  if( ((pawnY+32) > eightT) && (pawnX < (eightL+eightW)) ){
    gameOver();
  }
}
//  17
function colisionSeventeen() {
  pos();
  if( ((pawnY+32) > fourT) && ((pawnX+32) > fourL) && (pawnY < (fourT+fourW)) ){
    gameOver();
  }
}
//  18
function colisionEighteen() {
  pos();
  if( (pawnY < (treeT+treeH)) || ((pawnY+32) > fourT) ){
    gameOver();
  }
}
//  19
function colisionNineteen() {
  pos();
  if( (((pawnY+32) > fourT) && (pawnX < (fourL+fourW))) || ((pawnX+32) > fiveL) || (pawnY < (treeT+treeH)) ){
    gameOver();
  }
}
// 20
function colisionTwenty() {
  pos();
  if( (((pawnY+32) > fiveT) && (pawnX < (fiveL+fiveW))) || (((pawnX+32) > sixL) && (pawnY < (sixT+sixH))) ){
    gameOver();
  }
}
// 21
function colisionTwentyOne() {
  pos();
  if( ((pawnX < (fourL+fourW)) && (pawnY < (fourT+fourH))) || (((pawnX+32) > fiveL) && (pawnY < (fiveT+fiveH))) ){
    gameOver();
  }
}
//  22
function colisionTwentyTwo() {
  pos();
  if( (pawnY < (fiveT+fiveH)) && (pawnX < (fiveL+fiveW)) ){
    gameOver();
  }
}
//  23
function colisionTwentyTree() {
  pos();
  if( (pawnY < (sixT+sixH)) && (pawnX < (sixL+sixW)) ){
    gameOver();
  }
}
// 24
function colisionTwentyFour() {
  pos();
  if( (pawnY < (eightT+eightH)) ){
    gameOver();
  }
}
//  25
// function colisionTwentyFive() {
//   pos();
//   if(  ){
//     gameOver();
//   }
// }
//  26
function colisionTwentySix() {
  pawnX = pawn.offsetLeft;
  pos();
  if( (pawnY < (eightT+eightH)) && (pawnX < (eightL+eightW)) ){
    gameOver();
  }
}

function takeDownWelcome(){
  const welcome = document.getElementById('eleven');
  welcome.classList.remove('eleven', 'element');
  welcome.classList.add('elevenOut');
}
function gameOver() {
  const pawn = document.getElementById('pawn');
  pawn.classList.remove('pawnGo');
  pawn.classList.add('pawnOff');
  const gameOver = document.getElementById('gameOver');
  gameOver.classList.remove('gameInPlay');
  gameOver.classList.add('gameOver');

  const restart = document.getElementById('restart').addEventListener('click',function () {
    window.location.reload(true);
  })
}
function gameFinish() {
  const pawn = document.getElementById('pawn');
  pawn.classList.remove('pawnGo');
  pawn.classList.add('pawnOff');
  const gameOver = document.getElementById('gameFinish');
  gameOver.classList.remove('gameInPlay');
  gameOver.classList.add('gameFinish');

  const newGame = document.getElementById('newGame').addEventListener('click',function () {
    window.location.reload(true);
  })
}

/**
 *
 *  mobile elements of game
 */
function targetOneOn(ifIsTouched) {
  pos();
  const targetOne = document.getElementById('targetOne');

  if (ifIsTouched) {
    targetOne.classList.remove('targetOut');
    targetOne.classList.add('target','targetOne');
  }
  else {
    targetOne.classList.remove('target', 'targetOne');
    targetOne.classList.add('targetOut')
  }
}

function targetTwoOn(ifIsTouched) {
  pos();
  const targetTwo = document.getElementById('targetTwo');

  if (ifIsTouched) {
    targetTwo.classList.remove('targetOut');
    targetTwo.classList.add('target','targetTwo');
  }
  else {
    targetTwo.classList.remove('target', 'targetTwo');
    targetTwo.classList.add('targetOut')
  }
}

function targetTreeOn(ifIsTouched) {
  pos();
  const targetTree = document.getElementById('targetTree');

  if (ifIsTouched) {
    targetTree.classList.remove('targetOut');
    targetTree.classList.add('target','targetTree');
  }
  else {
    targetTree.classList.remove('target', 'targetTree');
    targetTree.classList.add('targetOut')
  }
}

function targetOneOut() {
  const targetOneXY = document.getElementById('targetOne');
  pos();
  if((pawnX === targetOneXY.offsetLeft) && (pawnY === targetOneXY.offsetTop)) {
    score += 1;
    nameOfPawn(score);
    targetOneOn(false);
    targetTwoOn(true);
  }
}
function targetTwoOut() {
  const targetTwoXY  = document.getElementById('targetTwo');
  pos();
    if((pawnX === targetTwoXY.offsetLeft) && (pawnY === targetTwoXY.offsetTop)) {
      score += 2;
      nameOfPawn(score);
      targetTwoOn(false);
      targetTreeOn(true);
  }
}
function targetTreeOut() {
  const targetTreeXY = document.getElementById('targetTree');
  pos();
    if((pawnX === targetTreeXY.offsetLeft) && (pawnY === targetTreeXY.offsetTop)) {
      score += 3;
      nameOfPawn(score);
      targetTreeOn(false);
  }
}
/**
 * pawn innerText
*/
function nameOfPawn(score) {
  const textPawn = document.getElementById('pawnText');
  textPawn.innerText = `G${score}`;
}