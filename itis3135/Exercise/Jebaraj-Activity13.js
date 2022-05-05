$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");

            // Loop through the teammembers array
            for(var i =0;i < data.teammembers.length;i++)
            {
                var item = data.teammembers[i];
                $("#team").append("<h3>" + item.name + "</h3>" + item.title + "<br>" + item.bio + "<br>");                
            }
        }
    });
});