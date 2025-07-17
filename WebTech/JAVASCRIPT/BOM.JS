
//screen object
//screen object is a built-in object in JavaScript
//screen object is used to get the information about the user's screen
// ? properties
//  screen.width
//  screen.height
//  screen.availWidth
//  screen.availHeight
//  screen.colorDepth
//  screen.pixelDepth
//  screen.orientation
//  screen.availLeft
//  screen.availTop
//  screen.left
//  screen.top
//  screen.deviceXDPI
//  screen.deviceYDPI
//  screen.systemXDPI
//  screen.systemYDPI
//  screen.logicalXDPI
//  screen.logicalYDPI
//  screen.orientation.onchange
//  screen.orientation.type
//  screen.orientation.angle
//  screen.updateInterval
// ? methods
//  screen.orientation.lock()
//  screen.orientation.unlock()
//  screen.orientation.addEventListener()
//  screen.orientation.removeEventListener()
//  screen.orientation.dispatchEvent()
//  screen.orientation.toString()
//  screen.orientation.toJSON()
//  screen.orientation.getCurrent()
//  screen.orientation.get()
//  screen.orientation.getCurrentType()
//  screen.orientation.getCurrentAngle()
//  screen.orientation.getCurrentOrientation()
//  screen.orientation.getCurrentOrientationType()

console.log(screen);
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
console.log(screen.orientation);
console.log(screen.availLeft);
console.log(screen.availTop);
console.log(screen.left);
console.log(screen.top);
console.log(screen.deviceXDPI);
console.log(screen.deviceYDPI);
console.log(screen.systemXDPI);
console.log(screen.systemYDPI);
console.log(screen.logicalXDPI);
console.log(screen.logicalYDPI);
console.log(screen.orientation.onchange);
console.log(screen.orientation.type);
console.log(screen.orientation.angle);
console.log(screen.updateInterval);
console.log(screen.orientation.lock());
console.log(screen.orientation.unlock());
console.log(screen.orientation.addEventListener());
console.log(screen.orientation.removeEventListener());
console.log(screen.orientation.dispatchEvent());
console.log(screen.orientation.toString());
console.log(screen.orientation.toJSON());
console.log(screen.orientation.getCurrent());
console.log(screen.orientation.get());
console.log(screen.orientation.getCurrentType());
console.log(screen.orientation.getCurrentAngle());
console.log(screen.orientation.getCurrentOrientation());
console.log(screen.orientation.getCurrentOrientationType());
// !===============================================================================================================================
//navigator object
//navigator object is a built-in object in JavaScript
//navigator object is used to get the information about the user's browser
// ? properties
//  navigator.appName
//  navigator.appVersion
//  navigator.appCodeName
//  navigator.appMinorVersion
//  navigator.appBuildID
//  navigator.appName
//  navigator.appVersion
// ? methods
//  navigator.javaEnabled()
//  navigator.cookieEnabled
//  navigator.geolocation.getCurrentPosition()
//  navigator.geolocation.watchPosition()
//  navigator.geolocation.clearWatch()

console.log(navigator);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
console.log(navigator.appMinorVersion);
console.log(navigator.appBuildID);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.javaEnabled());
console.log(navigator.cookieEnabled);
console.log(navigator.geolocation.getCurrentPosition());
console.log(navigator.geolocation.watchPosition());
console.log(navigator.geolocation.clearWatch());
// !===============================================================================================================================
//history object
//history object is a built-in object in JavaScript
//history object is used to get the information about the user's browser history
// ? properties
//  history.length
//  history.state
//  history.back()
//  history.forward()
//  history.go()
//  history.pushState()
//  history.replaceState()
//  history.scrollRestoration
console.log(history);
console.log(history.length);
console.log(history.state);
console.log(history.back());
console.log(history.forward());
console.log(history.go());
console.log(history.pushState());
console.log(history.replaceState());
// !===============================================================================================================================
//window object
//window object is a built-in object in JavaScript
//window object is used to get the information about the user's browser window
// ? properties
//  window.innerWidth
//  window.innerHeight
//  window.outerWidth
//  window.outerHeight
//  window.screenX
//  window.screenY
//  window.screenLeft
//  window.screenTop
//  window.scrollX
//  window.scrollY
// ? methods
//  window.open()
//  window.close()
//  window.alert()
//  window.confirm()
//  window.prompt()
//  window.scrollTo()
//  window.scrollBy()
//  window.scroll()
//  window.focus()
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.screenX);
console.log(window.screenY);
console.log(window.screenLeft);
console.log(window.screenTop);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(window.open());
console.log(window.close());
console.log(window.alert());
console.log(window.confirm());
console.log(window.prompt());
console.log(window.scrollTo());
console.log(window.scrollBy());
console.log(window.scroll());
console.log(window.focus());

// !===============================================================================================================================

//location object
//location object is a built-in object in JavaScript
//location object is used to get the current URL of the page
// ? properties
// ? location.href
// ? location.hostname
// ? location.pathname
// ? location.port
// ? location.protocol
// ? location.search
// ? location.hash
// ? methods
//  location.reload()
//  location.replace()
//  location.assign()
//  location.toString()
//  location.toJSON()
// !===============================================================================================================================
console.log(location);
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.port);
console.log(location.protocol);
console.log(location.search);
console.log(location.hash);
console.log(location.origin);
console.log(location.host);
console.log(location.reload());
console.log(location.replace("https://www.google.com"));
console.log(location.assign("https://www.google.com"));
console.log(location.toString());
console.log(location.toJSON());
// !===============================================================================================================================
// asyncronus and syncronous methods of the window object
// ? properties
//  window.setTimeout()
//  window.setInterval()
//  window.clearTimeout()
//  window.clearInterval()
function myFunction() {
    console.log("Hello World");
    // return "Hello World";
}

// console.log(window.setTimeout( myFunction(), 1000 ));
var a = setInterval(myFunction(),1000);
// console.log(window.clearTimeout('Hello World'));
// console.log(window.clearInterval('Hello World'));

// !===============================================================================================================================

