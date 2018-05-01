//===============================================================
//===============================================================
//===============================================================
//JS for the typing carousel
 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 5) || 2000;
  this.txt = '';
  this.tick();
};

var TxtRotateTwo = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 5) || 2000;
  this.txt = '';
  this.tickTwo();
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum;
  
  var fullTxt = this.toRotate[0];

  this.txt = fullTxt.substring(0, this.txt.length + 1);
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;
  if(i == 1){
    nextSentance();
    return;
  }else{
      if (this.txt === fullTxt) {
      delta = this.period;
      this.loopNum++
      } else if (this.txt === '') {
        delta = 500;
      }
  }
  setTimeout(function() {
    that.tick();
  }, delta);
};

TxtRotateTwo.prototype.tickTwo = function() {
  var i = this.loopNum;
  
  var fullTxt = this.toRotate[0];

  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;
  if(i == 1){
    $(".enter").fadeIn(3000)
    return;
  }else{
      if (this.txt === fullTxt) {
      delta = this.period;
      this.loopNum++
      } else if (this.txt === '') {
        delta = 500;
      }
  }
  setTimeout(function() {
    that.tickTwo();
  }, delta);
};

function nextSentance(){
  console.log("nextSentance")
  var elementTwo = document.getElementsByClassName('txt-rotate-Two');
  var toRotate = elementTwo[0].getAttribute('data-rotate');
  var period = elementTwo[0].getAttribute('data-period');
  if (toRotate) {
    new TxtRotateTwo(elementTwo[0], JSON.parse(toRotate), period);
  }
};

window.onload = function() {
  $(".enter").hide()
  setTimeout(startPage, 1000);

  function startPage (){
    var elements = document.getElementsByClassName('txt-rotate-One');
    var toRotate = elements[0].getAttribute('data-rotate');
    var period = elements[0].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[0], JSON.parse(toRotate), period); 
    };
  };
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
//===============================================================
//===============================================================
//===============================================================
