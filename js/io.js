var ELEMENT_ID = 'generated_proverb';

function pretty_print(string)
{
	var div = document.getElementById(ELEMENT_ID);
	var result = "";
	result += "<p>" + string + "</p>";
	
	div.innerHTML = result;
}


function capitalize(string) {
	// taken from http://stackoverflow.com/a/1026087
	return string[0].toUpperCase() + string.slice(1);
}
