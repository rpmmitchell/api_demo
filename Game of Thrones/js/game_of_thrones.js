$(document).ready(function(){
	$('img').click(function(){
		var id = $(this).attr('id');
		$.get("https://anapioficeandfire.com/api/houses/" + id + "/", function(res){
			console.log(res);
			var html_str = "";
			var titles = "";
			html_str += "<p> Name: " + res.name + "</p>";
			html_str += "<p> Words: " + res.words + "</p>";
			for(var i = 0; i < res.titles.length; i++){
				if( i < res.titles.length - 1){
					titles += " " + res.titles[i] + ",";
				}
				else {
					titles += " " + res.titles[i] + "";
				}
			};
			html_str += "<p> Titles: " + titles + "</p>"
			$('#content').html(html_str);
		}, "json");

	});
});