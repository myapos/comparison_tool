//Simple string comparison tool

//Initialization - Reset string

const initStr1 = "First input your text in area 1 ==========================================> ";
const initStr2 = "then input your text in area 2 and press \"Click Me!\" button to display results.";

const compareInputStrings = () => {
	
	const str1 = document.getElementById("area1").value;
	const str2 = document.getElementById("area2").value;
	const n = str1.localeCompare(str2);
	(n==0? displayMsg("Equal strings. "):displayMsg("Not equal strings. "));
}

const displayMsg = (msg) => {
	const displayMsg = msg+"Text areas now will reset to initial state. Thank you for using.";
	alert(displayMsg);
	console.log(displayMsg);
	resetAreasToInitialState();
}

const resetAreasToInitialState = () => {
	let str1Elem = document.getElementById("area1");
	let str2Elem = document.getElementById("area2");
	str1Elem.value = initStr1 ;
	str2Elem.value = initStr2 ;
	console.log("Reset areas to initial state");
}
const prepareArea1 = () => {
	let str1Elem = document.getElementById("area1");
	str1Elem.value = "" ;
	console.log("Empty text area1 onclick event");
}

const prepareArea2 = () => {
	let str2Elem = document.getElementById("area2");
	str2Elem.value = "" ;
	console.log("Empty text area2 onclick event");
}