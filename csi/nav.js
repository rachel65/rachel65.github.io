var loc = window.location.href;
var idx;
var rootFolder;

if (idx === -1) {
	idx = loc.lastIndexOf("/");
} else {
	idx = loc.lastIndexOf("/pages");
};

rootFolder = loc.substr(0, idx);

document.write(
'<div class="nav-item"><a href="' + rootFolder + '/otherSites.html">SITES</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/mitApp.html">MIT APP INVENTOR</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/aboutMe.html">ABOUT</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/photoshop.html">PHOTOSHOP</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/flash.html">FLASH</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/dreamweaver.html">DREAMWEAVER</a></div>' +
'<div class="nav-item"><a href="' + rootFolder + '/portal.html">HOME</a></div>'
);