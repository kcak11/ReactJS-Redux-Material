"use strict";

var name = 'Ashish';

function Uppercase(name) {
	return name.toUpperCase();
}
var tmpl = "<h1>" + Uppercase("welcome now") + "," + name + "</h1>\n<p>this is template in ES6</p>";

document.getElementById("div1").innerHTML = tmpl;
"use strict";

var customer = "Ashish";
(function () {
	//console.log("name of customer inside function",customer);
	if (true) {
		var _customer = "Kumar";
		//console.log("name of customer inside block",customer);
	}
})();
for (var i = 0; i <= 5; i++) {
	//console.log("i=",i);
}
