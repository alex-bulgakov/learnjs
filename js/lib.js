var buffer = "";
function print(str) {
	buffer += str;
	document.getElementById("print").innerHTML = buffer;
}
