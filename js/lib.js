var buffer = "";
function print(str) {
	buffer += str + "<br>";
	document.getElementById("print").innerHTML = buffer;
}
