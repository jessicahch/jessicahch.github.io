function reproducirHB(){

	var audio= new Audio("../animacion/public/audios/hb.mp3");

	audio.play();

	audio.volume=0.7;



}

function reproducirFuegosArtificiales(){

	var audio= new Audio("../animacion/public/audios/fuegos_artificiales.mp3");

	audio.play();

	audio.volume=0.3;

	//console.log("duration:" + audio.duration);

	if(audio.currentTime == 9)
	{
		//console.log("se paró");
		//.load();
		audio.play();

	}

}