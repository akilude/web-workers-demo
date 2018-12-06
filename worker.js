onmessage = function(e) {
	var data = e.data;

	if(data.id=="start"){
		var arr = [];
		var randomInt;

		for(var i = 0; i<=100000; i++){
			randomInt = Math.floor(Math.random()*1000+1);
			arr.push(randomInt);
		}

		var sorted_arr = arr.sort(function(a, b){return a-b});

		postMessage({id:'sorted_array',result:sorted_arr.toString()});
	}

	
}