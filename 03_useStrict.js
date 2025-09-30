"use strict";// treat all code as newer version

//alert(3+3); // alert is a browser-specific function, and does not work in Node.js


//if we use this with strict we will get undefined both in browser as well as IDE
function showThisStrict() {
    console.log(this);
}
showThisStrict();

//It prevents automatic binding of this to the global object.