$(document).ready(function(){
    $("#aboutMeButton").mouseover(function(){
      $("#aboutMeButton").animate({
        padding: "40px",
      });
    });
  });
  $(document).ready(function(){
    $("#aboutMeButton").mouseout(function(){
      $("#aboutMeButton").animate({
        padding: "20px",
      });
    });
  });