"use strict";
var Mas1=document.querySelectorAll('.slide3');
var Mas2=document.querySelectorAll('#slides3 img');
// console.log(Mas2);
var links = document.querySelectorAll('.remove-link');
links.forEach(function(entry) {
  entry.addEventListener('click',function (evt) {
    evt.preventDefault();
  })
});

Mas2.forEach(function(entry) {
 entry.addEventListener('click', function(e){
  NewImage(entry)
  var NeedDeleteImage = document.getElementById("Image-For-Delete");
  NeedDeleteImage.addEventListener('click', function(e) {
   RemoveNewImage();
 })
})
});
  var NewImage = function(evt) {
   var BigImage = document.createElement('img');
   BigImage.className = "image-output";
   BigImage.id = "Image-For-Delete";
   BigImage.src=evt.src;
   document.body.appendChild(BigImage);
 }


var ESC_KEY_CODE=27;
document.onkeydown  = function(evt) {
  if (evt.keyCode == ESC_KEY_CODE) {
    // Mas2.forEach(function(entry) {
    //   entry.classList.remove('image-output');
    // });
    RemoveNewImage();
  }
}

 var RemoveNewImage = function(evt) {
  var elem = document.getElementById("Image-For-Delete");
  if (elem) {  elem.parentNode.removeChild(elem)}

}

var SwapSrcToDataSrc = function(el) {
      if (el.hasAttribute('data-src')) {
       el.src=el.getAttribute('data-src');
       el.removeAttribute('data-src')
    }
}
Mas2.forEach(function(element) {
  element.addEventListener('mouseover', function(evt) {
    SwapSrcToDataSrc(element);
  })
})
var mas = function(a,b) {
  for (var i=a; i<b; i++) {
    SwapSrcToDataSrc(Mas2[i])
  }
}
mas(0,8);
var n=8;
var m=16;
var timerId = setInterval(function(evt) {

  mas(n,m);
  n+=8;
  m+=8;
if (m>=Mas2.length) { clearInterval(timerId);}
}, 1500);
// console.log('success')