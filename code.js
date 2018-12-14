//red square defines possible region of placement
setScreen("welcomeScreen");
var counter = 1;
var previous = 0;
onEvent("start","click",function(){
  setScreen("gameScreen");
});
onEvent("La","click",function(){
  nextQuestion("L");
});
onEvent("Ra","click",function(){
  nextQuestion("R");
});
onEvent("TLa","click",function(){
  nextQuestion("TL");
});
onEvent("BLa","click",function(){
  nextQuestion("BL");
});
onEvent("TRa","click",function(){
  nextQuestion("TR");
});
onEvent("BRa","click",function(){
  nextQuestion("BR");
});
onEvent("RTLa","click",function(){
  nextQuestion("RTL");
});
onEvent("LTLa","click",function(){
  nextQuestion("LTL");
});
onEvent("RBLa","click",function(){
  nextQuestion("RBL");
});
onEvent("LBLa","click",function(){
  nextQuestion("LBL");
});
onEvent("RTRa","click",function(){
  nextQuestion("RTR");
});
onEvent("LTRa","click",function(){
  nextQuestion("LTR");
});
onEvent("RBRa","click",function(){
  nextQuestion("RBR");
});
onEvent("LBRa","click",function(){
  nextQuestion("LBR");
});
//--------------------------------
onEvent("TRTLa","click",function(){
  nextQuestion("TRTL");
});
onEvent("TLTLa","click",function(){
  nextQuestion("TLTL");
});
onEvent("TRBLa","click",function(){
  nextQuestion("TRBL");
});
onEvent("TLBLa","click",function(){
  nextQuestion("TLBL");
});
onEvent("TRTRa","click",function(){
  nextQuestion("TRTR");
});
onEvent("TLTRa","click",function(){
  nextQuestion("TLTR");
});
onEvent("TRBRa","click",function(){
  nextQuestion("TRBR");
});
onEvent("TLBRa","click",function(){
  nextQuestion("TLBR");
});
onEvent("BRTLa","click",function(){
  nextQuestion("BRTL");
});
onEvent("BLTLa","click",function(){
  nextQuestion("BLTL");
});
onEvent("BRBLa","click",function(){
  nextQuestion("BRBL");
});
onEvent("BLBLa","click",function(){
  nextQuestion("BLBL");
});
onEvent("BRTRa","click",function(){
  nextQuestion("BRTR");
});
onEvent("BLTRa","click",function(){
  nextQuestion("BLTR");
});
onEvent("BRBRa","click",function(){
  nextQuestion("BRBR");
});
onEvent("BLBRa","click",function(){
  nextQuestion("BLBR");
});

function nextQuestion(current){
  counter = counter*-1;
  if (counter === -1){
    if (previous !== 0){
    hideElement(previous + "q");
    hideElement(previous + "i");
    hideElement("L" + previous + "a");
    hideElement("R" + previous + "a");
    }
    showElement(current + "q");
    showElement(current + "i");
    showElement("T" + current + "a");
    showElement("B" + current + "a");
  }
  if (counter === 1){
    if (previous != "0"){
    hideElement(previous + "q");
    hideElement(previous + "i");
    hideElement("T" + previous + "a");
    hideElement("B" + previous + "a");
    }
    showElement(current + "q");
    showElement(current + "i");
    showElement("L" + current + "a");
    showElement("R" + current + "a");
  }
  previous = current;
}
