$(document).ready(function(){
	$.ajax({
	url: "https://api.openweathermap.org/data/2.5/group?id=5128581,2643743,6455259&units=imperial&appid=6ab9b36c34866fee710981db190ee5d3",
	type: "GET",
	dataType: "JSON",
	success: function(data) {
			// print all of the JSON to the console
			console.log(data);

			console.log(data.list[0].main.temp);
			console.log(data.list[1].main.temp);
			console.log(data.list[2].main.temp);

			$("#uno").html("It's " + data.list[0].main.temp + " degrees" + " in " + data.list[0].name + ".");
			$("#dos").html("It's " + data.list[1].main.temp + " degrees" + " in " + data.list[1].name + ".");
			$("#tres").html("It's " + data.list[2].main.temp + " degrees" + " in " + data.list[2].name + ".");
		},
		error: function(data, textStatus, errorThrown) {
			console.log("whomp, whomp");
			// Do something to handle the error
			console.log(errorThrown);
		}

	})

	$('.uno').click(function(){
   		$('.weatherImage1').toggle();
	});

	$('.dos').click(function(){
   		$('.weatherImage2').toggle();
	});

	$('.tres').click(function(){
   		$('.weatherImage3').toggle();
	});


})