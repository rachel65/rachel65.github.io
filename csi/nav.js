var loc = window.location.href;
var idx = loc.lastIndexOf("/pages");
var rootFolder;

if (idx === -1) {
	idx = loc.lastIndexOf("/");
};

rootFolder = loc.substr(0, idx);

document.write(
'<div class="nav-item">' +
	'<a href="#" title="Other Sites">' +
		'SITES' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="' + rootFolder + '/mitApp.html" title="MIT App Inventor">' +
		'MIT APPS' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="#" title="About">' +
		'ABOUT' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="' + rootFolder + '/photoshop.html" title="Adobe Photoshop">' +
		'PHOTOSHOP' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="' + rootFolder + '/flash.html" title="Adobe Flash">' +
		'FLASH' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="' + rootFolder + '/dreamweaver.html" title="Adobe Dreamweaver">' +
		'DREAMWEAVER' +
	'</a>' +
'</div>' +
'<div class="nav-item">' +
	'<a href="' + rootFolder + '/portal.html" title="Home Page">' +
	'HOME' +
	'</a>' +
'</div>' +
'<script type="text/javascript" src="csi/browserCatch.js"></script>'
);