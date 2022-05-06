$(document).ready(function() {

        // preload the image for each link
        var images = new Array()			
	for (i = 0; i < 6; i++) {
	        images[i] = new Image()
                var imgName = "imageswap_images/h" + (i+1) + ".jpg"
		images[i].src = imgName
        }	        

        // set up the event handlers for each link
        $("#image_list a").click(function () {
                var i = $(this).parent('li').index()
                $("#image").hide().fadeIn(1000, function(){
                        $('#image').attr("src", images[i].src);
                        $("#image").fadeIn(1000);
                      });
                $("#caption").hide().fadeIn(1000, function(){
                        $('#caption').text("James Allison: 1-" + (i + 1));
                        $("#caption").fadeIn(1000);
                      });
                
        });

    	// get the image URL and caption for each image and animate the caption

        // cancel the default action of each link
        $("#image_list a").each(function(){                
                $(this).removeAttr("href");                
        });

    // move the focus to the first link

}); // end ready