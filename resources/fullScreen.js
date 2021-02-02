//project 1 fullscreen
$(document).ready(function(){
    $("#project1").click(function(){
      $("figure[id!='project1']").hide();
      $("info[id!='project1Info']").hide();
      $("#projectsContainer").attr({style: 'max-height:100vv; display:flex; flex-direction: column; align-items:center;'});
      $("#project1Info").append($("#project1"));
      $("#project1Info").animate({
        height: "100%",
        width: "80%",
        'grid-area': "2 / 1 / 3 / 2",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      });
      $("project1").animate({
        height: "100%",
      });
    });
  });
//project 2 fullscreen
$(document).ready(function(){
    $("#project2").click(function(){
      $("figure[id!='project2']").hide();
      $("info[id!='project2Info']").hide();
      $("#projectsContainer").attr({style: 'max-height:100vv; display:flex; flex-direction: column; align-items:center;'});
      $("#project2Info").append($("#project2"));
      $("#project2Info").animate({
        height: "100%",
        width: "80%",
        'grid-area': "2 / 1 / 3 / 2",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      });
      $("project2").animate({
        height: "100%",
      });
    });
  });
//project 3 fullscreen
$(document).ready(function(){
    $("#project3").click(function(){
      $("figure[id!='project3']").hide();
      $("info[id!='project3Info']").hide();
      $("#projectsContainer").attr({style: 'max-height:100vv; display:flex; flex-direction: column; align-items:center;'});
      $("#project3Info").append($("#project3"));
      $("#project3Info").animate({
        height: "100%",
        width: "80%",
        'grid-area': "2 / 1 / 3 / 2",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      });
      $("project3").animate({
        height: "100%",
      });
    });
  });