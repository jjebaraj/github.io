$(document).ready(function() {
    $.ajax({        
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $('#faculty').html("");
            console.log(data);
            // Loop through the teammembers array
            for(var i =0;i < data.facultymembers.length;i++)
            {
                var item = data.facultymembers[i];
                //image, full name, department, and bio line
                $('#faculty').append("<img src='" + item.image + "'/>");
                $('#faculty').append("<h2>" + item.full_name + "</h2>");
                $('#faculyt').append("<h3>" + item.department + "</h3>");
                $('#faculty').append('<p>' + item.bio + '</p>');
           
            }
        }
    });
});