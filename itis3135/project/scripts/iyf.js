$(document).ready(function(){
  $( "#nav" ).menu({position: {at: "left bottom"}});

  $( "#accordion" ).accordion({
    active: 0,
    heightStyle: "content",
    collapsible: true,
  });
  });