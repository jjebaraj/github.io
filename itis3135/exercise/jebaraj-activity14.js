$(document).ready(function() {
    $("nav#nav_list ul li a").click(function(){
        //Get the title of the clicked link
        var elem = $(this).attr('title'); 
        // Path to the json file based on the title
        var name = "json_files/" + elem + ".json";

        // Set the json content to main
        $("main").html("");

        // Read the json and assign the different attributes
        $.getJSON(name, function(data) {
            var item = data.speakers[0];
           $('main').html('<h1>' + item.title + '</h1>');
           $('main').append('<h2>' + item.month+ '</h2>');
           $('main').append('<h3>' + item.speaker+ '</h3>');
           $('main').append('<img src="' + item.image +'">');
           $('main').append('<p>' + item.text+ '</p>');
        });
     });
}); // end ready