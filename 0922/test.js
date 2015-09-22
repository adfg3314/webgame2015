

function Write99dan(_start,_end){
	var start = _start;
	var end = _end;
	for(var i =start; i<end+1; i++){
		document.write("\n");
		document.write(i + "단" + "\n");
		for(var j=1; j<10; j++){
			document.write(i + "x" + j + "=" + i*j + "\n");
		}
	}
}

Write99dan(2,14);