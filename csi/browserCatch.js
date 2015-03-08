var loc = window.location.href;
var idx = loc.lastIndexOf("/pages");
var rootFolder;

if (idx === -1) {
	idx = loc.lastIndexOf("/");
};

rootFolder = loc.substr(0, idx);

var redirectIt = rootFolder + "/redirect.html";

browsername=navigator.userAgent;
if (browsername.indexOf("Chrome") === -1) {
	window.location.replace(redirectIt)
}