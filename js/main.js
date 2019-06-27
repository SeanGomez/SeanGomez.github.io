$(document).ready(function(){

        var count = 0;
        $("#cog, #cogOne, #cogTwo").click(function(){
                        
			count += 1;
			
                        if(count== 1) {
                                $("#cog, #cogOne, #cogTwo").css("animation-play-state", "running");
                                }
                        else if(count == 3){
                                $("#cog, #cogOne, #cogTwo").css("animation-play-state", "running");
                        } 
			else if(count == 5){
                                $("#cog, #cogOne, #cogTwo").css("animation-play-state", "running");
                        } 
			else if(count == 7){
                                $("#cog, #cogOne, #cogTwo").css("animation-play-state", "running");
                        } 
			else if(count == 9){
                                $("#cog, #cogOne, #cogTwo").css("animation-play-state", "running");
                        } 

                        else{ $("#cog, #cogOne, #cogTwo").css("animation-play-state", "paused")};
                        });
                                                      
                        

});


$("#cog, #cogOne, #cogTwo").hover(function(){

	$("div.wrapper").innerHTML="<h1>hi</h1>";


});



























/* */
