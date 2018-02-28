$(document).ready(function(){
	$('form').submit(function(){
		return false;
	});
	
	$('form').submit(function(){
		var city = $('#city').val();
		$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=580ffd6255f9c5a6eb4d6b4cf33d0533", function(res){
		console.log(res);
		var html_str = "";
		html_str += "<h1>" + res.name + "</h1>"
		html_str += "<p>Temperature: " + Math.trunc((res.main.temp * (9/5)-459.67)) + String.fromCharCode(176) + " F</p>"
		$('#weather').html(html_str);
	}, 'json');
	});
});