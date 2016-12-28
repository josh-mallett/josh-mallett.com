var mobileMenu = function(){
  $(".rotateMenu").on("click", function(){
  if(!$(".rotateMenu").hasClass("spinningBurger") && !$(".rotateMenu").hasClass("unspinnedBurger")){
    $(".rotateMenu").addClass("spinningBurger");
    $(".slide-out").removeClass("outOfView").addClass("inView");
    //$(".content").css({"overflowY":"hidden"});
    $(".overlay").css({"left":"0%"});
  } else if($(".rotateMenu").hasClass("spinningBurger")) {
      $(".rotateMenu").removeClass("spinningBurger").addClass("unspinnedBurger");
      $(".slide-out").removeClass("inView").addClass("outOfView");
      //$(".content").css({"overflowY":"scroll"});
      $(".overlay").css({"left":"100%"});
  } else if ($(".rotateMenu").hasClass("unspinnedBurger")) {
      $(".rotateMenu").removeClass("unspinnedBurger").addClass("spinningBurger");
      $(".slide-out").removeClass("outOfView").addClass("inView");
      //$(".content").css({"overflowY":"hidden"});
      $(".overlay").css({"left":"0%"});
    }

  });
}


var portfolio = function(){
  $(".proj").on("click", function(){
    $(".boxes").css({"display":"block"});
    setTimeout(function() {
      $(".boxes").toggleClass("boxOut boxIn");
    }, 10);

    if ($(window).width() <= 1000) {
      $(".content").css({"overflow-y":"auto"});
    }


    if ($(".contact").hasClass("contactIn")) {
      $(".contact").removeClass("contactIn").addClass("contactOut");
      $(".content").css({"overflow-y": "hidden"});
      setTimeout(function(){
        $(".contact").css({"display":"none"});
        $(".content").css({"overflow-y":"auto"});
      }, 400);
    }

    if ($(".about").hasClass("aboutIn")) {
      $(".about").removeClass("aboutIn").addClass("aboutOut");
      setTimeout(function(){
        $(".about").css({"display":"none"});
      }, 400);
    }




    if ($(".Cexit").hasClass("cIn")){
      $(".Cexit").removeClass("cIn").addClass("cOut");
    }

    if ($(".slide-out").hasClass("inView")) {
      $(".slide-out").removeClass("inView").addClass("outOfView");
      $(".overlay").css({"left":"100%"});
      $(".rotateMenu").removeClass("spinningBurger").addClass("unspinnedBurger");
    }

    $(".content").animate({ scrollTop: 0 }, 0);
  });
}

var about = function(){
  $(".aboutBtn").on("click", function(){
    $(".about").css({"display":"block"});
    setTimeout(function () {
      $(".about").toggleClass("aboutOut aboutIn");
    }, 10);
    setTimeout(function(){
      $(".content").css({"overflow-y":"auto"});
    }, 500);


    if ($(".Cexit").hasClass("cIn")){
      $(".Cexit").removeClass("cIn").addClass("cOut");
    }

    $(".contact").removeClass("contactIn").addClass("contactOut");
    $(".content").css({"overflow-y": "hidden"});
    setTimeout(function(){
      $(".contact").css({"display":"none"});
      $(".content").css({"overflow-y":"auto"});
    }, 400);



    $(".boxes").removeClass("boxIn").addClass("boxOut");
    setTimeout(function(){
      $(".boxes").css({"display":"none"});
    }, 400);

    if ($(".slide-out").hasClass("inView")) {
      $(".slide-out").removeClass("inView").addClass("outOfView");
      $(".overlay").css({"left":"100%"});
      $(".rotateMenu").removeClass("spinningBurger").addClass("unspinnedBurger");
    }

    $(".content").animate({ scrollTop: 0 }, 0);
  });
}

var contact = function(){
  $(".contactBtn").on("click", function(){
    $(".contact").css({"display":"block"});
    setTimeout(function () {
      $(".contact").toggleClass("contactOut contactIn");
    }, 10);
    setTimeout(function(){
      $(".content").css({"overflow-y":"hidden"});
    }, 500);



    $(".about").removeClass("aboutIn").addClass("aboutOut");
    setTimeout(function(){
      $(".about").css({"display":"none"});
    }, 400);

    $(".boxes").removeClass("boxIn").addClass("boxOut");
    setTimeout(function(){
      $(".boxes").css({"display":"none"});
    }, 400);



    if ($(".Cexit").hasClass("cNeu")) {
      $(".Cexit").removeClass("cNeu").addClass("cIn");
    }
    else if ($(".Cexit").hasClass("cIn")){
      $(".Cexit").removeClass("cIn").addClass("cOut");
    }
    else if ($(".Cexit").hasClass("cOut")){
      $(".Cexit").removeClass("cOut").addClass("cIn");
    }

    if ($(".slide-out").hasClass("inView")) {
      $(".slide-out").removeClass("inView").addClass("outOfView");
      $(".overlay").css({"left":"100%"});
      $(".rotateMenu").removeClass("spinningBurger").addClass("unspinnedBurger");
    }


    $(".content").animate({ scrollTop: 0 }, 0);
  });
}

var exits = function(){
  $(".x").on("click", function(){
    $(".boxes").removeClass("boxIn").addClass("boxOut");
    $(".about").removeClass("aboutIn").addClass("aboutOut");
    $(".content").css({"overflow-y":"hidden"});


  });

  $(".Cexit").on("click", function(){
    if ($(this).hasClass("cIn")) {
      $(this).removeClass("cIn").addClass("cOut");
    }
    $(".contact").removeClass("contactIn").addClass("contactOut");
  });
}

var slideCard = function(){
  $(".ab").on("click", function(){
    $(".Langs").addClass("changeInfo");

    if($(this).hasClass("htmlBtn")){
      $(this).css({"background": "rgb(168, 224, 255)"});
      $(this).siblings().css({"background": "white"});
      setTimeout(function(){
        $("li.LHTML").css({"display": "block"});
        $("li.LHTML").siblings().css({"display":"none"});
        $(".Langs").css({"background": "rgb(168, 224, 255)"});
      },400);
    }
    else if ($(this).hasClass("cssBtn")) {
      $(this).css({"background": "rgb(255, 137, 178)"});
      $(this).siblings().css({"background": "white"});
      setTimeout(function(){
        $("li.CSS_Sass").css({"display": "block"});
        $("li.CSS_Sass").siblings().css({"display":"none"});
        $(".Langs").css({"background": "rgb(255, 137, 178)"});
      },400);
    }
    else if ($(this).hasClass("jsBtn")) {
      $(this).css({"background": "rgb(243, 253, 139)"});
      $(this).siblings().css({"background": "white"});
      setTimeout(function(){
        $("li.JS").css({"display": "block"});
        $("li.JS").siblings().css({"display":"none"});
        $(".Langs").css({"background": "rgb(243, 253, 139)"});
      },400);
    }
    else if ($(this).hasClass("javaBtn")) {
      $(this).css({"background": "rgb(224, 178, 255)"});
      $(this).siblings().css({"background": "white"});
      setTimeout(function(){
        $("li.Java").css({"display": "block"});
        $("li.Java").siblings().css({"display":"none"});
        $(".Langs").css({"background": "rgb(224, 178, 255)"});
      },400);
    }
    else if ($(this).hasClass("droidBtn")) {
      $(this).css({"background": "rgb(137, 255, 155)"});
      $(this).siblings().css({"background": "white"});
      setTimeout(function(){
        $("li.Android").css({"display": "block"});
        $("li.Android").siblings().css({"display":"none"});
        $(".Langs").css({"background": "rgb(137, 255, 155)"});
      },400);
    }


    setTimeout(function(){
      $(".Langs").removeClass("changeInfo");
    },1000);
  });
}



$(window).on("load",function(){
    $('.head').css({ height: $(window).innerHeight() });
    $(window).resize(function(){
      $('.head').css({ height: $(window).innerHeight() });
    });

    mobileMenu();
    portfolio();
    about();
    exits();
    slideCard();

    contact();

});
