
var arrayInt = new Array();

arrayInt.push(3);
arrayInt.push(8);
arrayInt.push(213);
arrayInt.push(213123);

document.write("<br>");

for(var i = 0; i <arrayInt.length; i++) {
	document.writeln(i + "번 인덱스의 원소 값 : " + arrayInt[i] + "<br>");
}

document.writeln("arrayInt 배열의 원소 수 : " + arrayInt.length + "<br>");