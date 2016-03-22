var headID = document.getElementsByTagName("head")[0];         
var cssNode = document.createElement('link');
var mousewidth = 5;
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.media = 'screen';
headID.appendChild(cssNode);


var image = new Image();

image.onLoad = function() {


}

image.src="http://i64.tinypic.com/2s1qir4.png";

image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.zIndex = "999999";


var body = document.getElementsByTagName("body")[0];

body.appendChild(image);

document.onmousemove = function(e) {
    image.style.top = e.clientY + (window.pageYOffset || document.documentElement.scrollTop) + "px";
    image.style.left = (e.clientX) + "px";
}

