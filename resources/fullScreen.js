//project 1 fullscreen
$(document).ready(function(){
    $("figure[id='project1']").click(function(){
      $("figure[id!='project1']").hide(); //hide all figure but project 1
      $("info[id!='project1Info']").hide(); //hide all info but project info 1
      $("#projectsContainer").css({"max-height":"100vv", "display":"flex", "flex-direction": "column", "align-items":"center"}); //making container flex
      $(this).css({"height":"70%", "background-color":"rgba(196,219,224,1)"}); //changing figure style
      $("#project1Info").append($("#project1")); //appending figure into info
      $("#project1Info").animate({ 
        height: "100%",
        width: "80%",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      },"slow"); //enlarging info
      $("#project1Info").prepend(exitButton); //adding the exit button
    });
  });

//project 2 fullscreen
$(document).ready(function(){
    $("#project2").click(function(){
      $("figure[id!='project2']").hide();
      $("info[id!='project2Info']").hide();
      $("#projectsContainer").attr({style: 'max-height:100vv; display:flex; flex-direction: column; align-items:center;'});
      $(this).attr({style: "height:70%; background-color:rgba(196,219,224,1);"});
      $("#project2Info").append($("#project2"));
      $("#project2Info").animate({
        height: "100%",
        width: "80%",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      },"slow");
      $("#project2Info").prepend(exitButton);
    });
  });

//project 3 fullscreen
$(document).ready(function(){
    $("#project3").click(function(){
      $("figure[id!='project3']").hide();
      $("info[id!='project3Info']").hide();
      $("#projectsContainer").attr({style: 'max-height:100vv; display:flex; flex-direction: column; align-items:center;'});
      $(this).attr({style: "height:70%; background-color:rgba(196,219,224,1);"});
      $("#project3Info").append($("#project3"));
      $("#project3Info").animate({
        height: "100%",
        width: "80%",
        padding: "2% 5%",
        margin: "0",
        "align-content": "space-between",
      },"slow");
      $("#project3Info").prepend(exitButton);
    });
  });

const exitButton = $("<button id='exitButton'></button>").text("X");
//made for only project 1 currently
$(document).ready(function(){
  $(exitButton).click(function(){
      $(this).hide();
      $("figure[id!='project1']").toggle();
      $("info[id!='project1Info']").toggle();
      $("#project1").css({"background-color": "#00A8A8", "height": "auto"});
      const project = $("#project1").clone();
    //  $(project).removeAttr("style");
      $("#project1").hide();
      $(project).prependTo("#projectsContainer");
      $("#project1Info").removeAttr("style");
      $("#project1Info").css({"background-color": "rgba(196,219,224,0.8)", "display": "block", "margin": "10% 10%", "border-radius": "10px", "padding": "5px", "z-index": "5", "grid-area": "3 / 2 / 4 / 5", "width":"auto", "height":"auto","align-content": "null"});
      $("#projectsContainer").css({"width": "50%", "min-height" : "100%", "background-color" : "#2EB5E0", "text-align" : "center", "display" : "grid", "grid-template-areas" : "repeat(8, 1fr)/repeat(4, 1fr)", "grid-auto-flow" : "row", "overflow-y" : "scroll", "overflow-x" : "hidden", "max-height" :"null", "flex-direction": "null", "align-items": "null"});
  });
});