// your code here
var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector(#button);

function handleSubmit(event) {
		event.preventDefault();
		var h3Value = 'https://localhost:8080/';
		var name = nameElement.value;
		var year = yearElement.value;

		if(name && year){
			h3Value += '?name=' + name + '&year=' + year;  //`?name=${name}`(you can use this one also) or if you like string then do existing method //if name is present you can add this thing
		}
		else if(name && !year){
			h3Value += '?name=' + name;
		}
	else if(!name && year){  // if both name and year exist 
		h3Value += '?year=' + year;// then use with '&' condition not '?'
	}
		h3.textContent = h3Value;
}
form.addEventListener('submit',handleSubmit) 