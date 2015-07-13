var PROV_ELEMENT_ID = 'generated_proverb';
var SRC_ELEMENT_ID = "src_proverbs";

function print_proverb(string)
{
	var div = document.getElementById(PROV_ELEMENT_ID);
	var result = "";
	result += "<p>" + string + "</p>";
	
	div.innerHTML = result;
}

function print_src_proverbs()
{
	out = "";
	var prov_array = LAST_PROVERBS;
	
	for(var i = 0; i < prov_array.length; i++){
		out += prov_array[i];
		out += "<br>"
	}
	
	var div = document.getElementById(SRC_ELEMENT_ID);
	var result = "<p>" + out + "</p>";
	
	div.innerHTML = result;
}


function capitalize(string) {
	// taken from http://stackoverflow.com/a/1026087
	return string[0].toUpperCase() + string.slice(1);
}
