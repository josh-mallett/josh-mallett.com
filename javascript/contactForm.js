function formValidate(){
  var nameInput = document.forms["cForm"]["name"].value;
  var emailInput = document.forms["cForm"]["email"].value;
  var messageInput = document.forms["cForm"]["message"].value;
  var atpos = emailInput.indexOf("@");
  var dotpos = emailInput.lastIndexOf(".");


  if (nameInput == "") {
    document.getElementById("name").focus();
    $("#name").css({'color': "red", "border": "solid red 3px"});
    $("#name").blur(function(){
      var nameInput = document.forms["cForm"]["name"].value;
      if (nameInput != "") {
        $(this).css({'color': 'rgb(56, 175, 59)', "border": "solid rgb(56, 175, 59) 3px"});
      }
    });
    return false;
};

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailInput.length) {
    document.getElementById("email").focus();
    $("#email").css({'color': "red", "border": "solid red 3px"});
    $("#email").blur(function(){

    });
    return false;
  } else {
    $("#email").css({'color': "rgb(56, 175, 59)", "border": "solid rgb(56, 175, 59) 3px"});
  }

  if (messageInput == "") {
    document.getElementById("message").focus();
    $("#message").css({'color': "red", "border": "solid red 3px"});

    $("#message").blur(function(){
      var messageInput = document.forms["cForm"]["message"].value;
      if (messageInput != "") {
        $(this).css({'color': 'rgb(56, 175, 59)', "border": "solid rgb(56, 175, 59) 3px"});
      }
    });
    return false;
  } else {
    $("#name").css({'color': "rgb(56, 175, 59)", "border": "solid rgb(56, 175, 59) 3px"});
  }

}


$(document).ready(function(){
  $("#name").blur(function(){
    var nameInput = document.forms["cForm"]["name"].value;
    if (nameInput != "") {
      $(this).css({'color': 'rgb(56, 175, 59)', "border": "solid rgb(56, 175, 59) 3px"});
    }
  });

  $("#email").blur(function(){
    var emailInput = document.forms["cForm"]["email"].value;
    var atpos = emailInput.indexOf("@");
    var dotpos = emailInput.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailInput.length || !emailInput.includes("@")) {
      $(this).css({'color': "red", "border": "solid red 3px"});
    }
    else {
      $(this).css({'color': 'rgb(56, 175, 59)', "border": "solid rgb(56, 175, 59) 3px"});
    }
  });


  $("#message").blur(function(){
    var messageInput = document.forms["cForm"]["message"].value;
    if (messageInput != "") {
      $(this).css({'color': 'rgb(56, 175, 59)', "border": "solid rgb(56, 175, 59) 3px"});
    }
  });
});
