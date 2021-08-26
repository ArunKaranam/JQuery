$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load



  //--------------Effects-Animations-----------------
  //$(".red-box").fadeOut(4000);
   //$(".red-box").fadeOut("slow");
    //$(".red-box").fadeOut("fast");
     //$(".green-box").fadeOut(2000);
      //$(".red-box").fadeIn("fast");
       //$(".red-box").fadeTo(1000,0.5);
       //$(".red-box").fadeTo(3000,0.2);
       //$(".green-box").fadeTo(3000,0.5);
       //$(".blue-box").fadeTo(3000,0.8);
       //$(".red-box").fadeToggle();
        //$(".red-box").hide(1000);
        //$(".blue-box").toggle(2000);
        //$(".blue-box").slideUp(2000);
        //$(".blue-box").slideDown(2000);
        //$("p").hide();
        //$("p").slideDown();
        /*$(".blue-box").animate({
        	"margin-left":"200px",
        	"opacity":"0",
        	"margin-top":"25px",
            "height":"50px",
            "width":"50px"

        },1000);
        $("p").animate({
        	fontSize:"20px"

        },1000);
        //$(".red-box").fadeTo(1000,0.5);*/
      // $(".red-box").fadeTo(1000,0.2);
       //$(".green-box").delay(1000).fadeTo(1000,0.5);//chaining
       //$(".blue-box").fadeTo(1000,0.8).fadeOut(1000).fadeIn();
      // $(".red-box").fadeTo(1000,0,function(){
       //	alert("This is the callback function")
       //});
       //$(".lightbox").delay(500).fadeIn(1000)





       //---------------Element selectors--------------
       // ul#list>li*4>{Main item $}>ul>li*2>{Sub item $ }--list pluggin shortcut
       //$("p,h2,input").css("background-color","rgba(180,180,30,0.8)");
       //$(".red-box").css("background-color","rgba(180,180,30,0.8)");
       //$("input[type='text']").css("background-color","rgba(180,180,30,0.8)");
       //$("li:last").css("background-color","rgba(180,180,30,0.8)");
       //$("li:even").css("background-color","rgba(180,180,30,0.8)");
         //  $("li:odd").css("background-color","rgba(180,180,30,0.8)");
         //$("input:text").css("background-color","rgba(180,180,30,0.8)");




       //------------JQuery Methods for Travesal------------
       //$("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
       //$("#list").children("li").css("background-color","rgba(180,180,30,0.8)");
       //$("#list").parents("body").css("background-color","rgba(180,180,30,0.8)");
       //$("#list").siblings("li").css("background-color","rgba(180,180,30,0.8)");
       //$("#list").prev().css("background-color","rgba(180,180,30,0.8)");
      // $("#list").next().css("background-color","rgba(180,180,30,0.8)");






//-----------JQuery Methods for filtering-----------------------

		//$("#list").find("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
		//$("#list").children("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
		//$("li").filter(function(index){
		//	return index%3==1;
//
		//}).css("background-color","rgba(180,180,30,0.8)");
		//$("li").first().css("background-color","rgba(180,180,30,0.8)");
		//$("li").eq(5).css("background-color","rgba(180,180,30,0.8)");

		//$("li").not(":first").css("background-color","rgba(180,180,30,0.8)");
		//$("li").not(function(index){
			//return index%3==2;
		//}).css("background-color","rgba(180,180,30,0.8)");





    //------------Manipulating the DOM (Inserting,Replacing,Removing) Elements----------
        //inserting
    //$("ul ul:first").append("<li>Hai,I'm Arun");
   // $("<li>Hai,I'm Arun</li>").appendTo($("ul ul:first"));
   // $("ul ul:first").prepend("<li>Hai,I'm Arun");
    //$("<li>Hai,I'm Arun</li>").prependTo($("ul ul:first"));
   // $("<h4>KARANAM ARUNKUMAR</h4>").prependTo($("#content"));
  // $(".blue-box").after("<div class='blue-box'>Another Blue Box</div>");
   //$(".blue-box").before("<div class='blue-box'>Another Blue Box</div>");
  // $(".blue-box").before(function(){
   // return "<div class='blue-box'>Blue 2</div>";
   //});
   //$("p").after($("#list"));

      //Replacing
    //$('li').replaceWith("<li>Replaced.</li>")
   // $('li').replaceWith(function(){
     // return "<li>Replaced with function.</li>"
    //});
   // var firstListItem=$("li:first");
    //$("p").replaceWith(firstListItem);
    //$("p:first").replaceWith(firstListItem);
    //$(".red-box,.blue-box").replaceWith("<div class='green-box'>More green</div>");
    //$("<div class='green-box'>More green</div>").replaceAll(".red-box,.blue-box");

      //Removing
      //var removedList=$("li").remove();
      //$("form").children().not("input:text,text area,br").remove();
      //var detachedListItem=$("li").detach();
      //$("#content").append(detachedListItem);
      //$("p:first").empty();
      //$(".red-box,.blue-box,.green-box").empty();

      //manipulating attributes and properties
      //attr(),prop(),val()
      //var specialLink=$("#special-link");
      //console.log(specialLink.attr("href"));
      //var checkbox=$("input:checkbox");
      //console.log(checkbox.prop("checked"));
      //console.log(checkbox.attr("checked"));
      //var textInput=$("input:text");
      //console.log(textInput.val());


      //creating image slide show
      /*var galleryImage=$(".gallery").find("img").first();
      var images=[
      "images/laptop-mobile_small.jpg",
      "images/laptop-on-table_small.jpg",
      "images/people-office-group-team_small.jpg",
      ];
      var i=0;
      setInterval(function(){
        i=(i+1)%images.length;//0,1,2,0,1,2,0,1,2......
        galleryImage.fadeOut(function(){
          $(this).attr("src",images[i]);
          $(this).fadeIn();
        });
        console.log(galleryImage.attr("src"));

      },2000);*/





      //------------------Changing Element Data And CSS------
      //changing CSS Properties of Elements
      /*$(".gallery").css("display","none"); //.hide()
      var redBox=$(".red-box");
      console.log(redBox.css("width"));
      redBox.css("background-color","#AA7700 !important"  );
      $("p").css("font-size","18px");
      redBox.css("width","+=20px");
      var properties=$("p").css(["font-size","line-height","color"]);
      console.log(properties);
      console.log(properties["font-size"]);
      redBox.css("user-select","none");*/
      //redBox.css("user-select",function(){
          //return "none";
      //});

      //adding/removing CSS Classes
      /*$("a").addClass("fancy-link"); 
      $("p:first").addClass("large emphasize"); 

      $("li li").addClass(function(index){
      $(this).addClass("item-" +index);

      });
      $("div").addClass(function(index,currentClass){
        if(currentClass=="dummy"){
          return "red-box";
        }
      });*/
      //changing the data of an element
      //var gallery=$(".gallery");
       // var images=[
     // "images/laptop-mobile_small.jpg",
      //"images/laptop-on-table_small.jpg",
      //"images/people-office-group-team_small.jpg",
     // ];
      //gallery.data("availableImages",images);
      //console.log(gallery.data("availableImages"));
      //retrieving and changing the content of an element
        //text(),html()
        //var firstPar=$("p:first");
        //console.log(firstPar.text());
        //console.log(firstPar.html());
        //console.log($("p").html());
        //firstPar.text("<strong>Hello</strong> World!");
       // firstPar.html("<strong>Hello</strong> World!");
       //firstPar.html(firstPar.html()+"This was just appended");











       //--------Events -Handling Mouse Events & Keyboard events------------
       //click handlers
      /* $("#btn-click").click(function(event){
        console.log(event);
        alert("Button was clicked");
       });


       $(".red-box").click(function(){
        $(this).fadeTo(500,0.5);
       });*/

       //Hover Handlers
       /*$("#btn-hover").hover(function(){
        alert("Button was Hovered")
       })
       $(".green-box").hover(function(){
        $(this).text("I was hovered");
       });
       //Adding MouseEnter & MouseLeave handlers
       var blueBox=$(".blue-box");
       /*blueBox.mouseenter(function(){
        $(this).stop().fadeTo(500,0.7);
       });
       blueBox.mouseleave(function(){
        $(this).stop().fadeTo(500,1);

       });*/

       //other method--hover(handlerIn,handlerOut)
       /*blueBox.hover(function(){
         $(this).stop().fadeTo(500,0.7);
       },function(){
        $(this).stop().fadeTo(500,1);

       });*/
       //Adding the same handler for multiple events
       /*$("html").on("click keydown",function(){
        console.log("Mouse was clicked or key was pressed");
       });
       var images=[
      "images/laptop-mobile_small.jpg",
      "images/laptop-on-table_small.jpg",
      "images/people-office-group-team_small.jpg",
      ];
      var i=0;
      $(".gallery").find("img").on("click",function(){
        i=(i+1)%images.length;
        $(this).fadeOut(function(){
          $(this).attr("src",images[i].fadeIn());
        });
      });*/
      /*$("p").click(function(){
        $(this).slideUp();

      });

      //DELEGATED EVENTS
      $("#content").append("<p>this is dyanmically added paragraph</p>");*/
      /*$("#content").on("click","p",function(){
        $(this).slideUp();
      });
      $("#content").append("<p>This is a dynamically added paragraph</p>");*/
      /*$("body").on("mouseenter","li",function(){
        $(this).css("color","#666");
      });*/
      //passing additional data to events
      /*$("#btn-click").click({
        user:"peter",
        domain:"karanam.com"
      },function(event){
          greetUser(event.data);

      });
      function greetUser(userdata){
        username=userdata.user||"Anonymous";
        domain=userdata.domain||"example.com"
        alert("Welcome back "+username + " From " +domain + "!");
      }*/
      /*var galleryItems=$(".gallery").find("img");
      galleryItems.css("width","33%").css("opacity","0.7");

      galleryItems.mouseenter(function(){
        $(this).stop().fadeTo(500,1);
      });
      galleryItems.mouseleave(function(){
        $(this).stop().fadeTo(500,0.7);
      });
      galleryItems.click(function(){
       var source=$(this).attr("src");
       var image=$("<img>").attr("src",source).css("width","100%");
       $(".Light-box").empty().append(image).fadeIn(2000);
       //$(".lightbox").empty().append(image).fadeIn(200)

      });*/
      //handling keydown and keyup events
      //keypress() EVIL!
      /*$("html").keydown(function(event){
        console.log(event.which);
      });
      var ARROW_RIGHT=39;
      $("html").keydown(function(event){
        if(event.which==ARROW_RIGHT){
          $(".blue-box").stop().animate({
            marginLeft:"+=10px"
          },50);
        }
      });*/




      //------EVENTS -FORMS------------
      //focus
     /* var inputFields=$("input:text,input:password,textarea");
      inputFields.focus(function(){
        $(this).css("box-shadow","0 0 4px #666");
      });
      inputFields.blur(function(){
        $(this).css("box-shadow","none");
      });
      $("#name").blur(function(){
         var text=$(this).val();
         if(text.length<3){
          $(this).css("box-shadow","0 0 4px #811");
         }else{
          $(this).css("box-shadow","0 0 4px #181");

         }
      });*/
      // The change event is used for input elements such as checkboxes, radio
  // button and select tags. They fire whenever the selection changes.

  // Add green indicator when checkbox is checked and red one otherwise.
  /*$("#checkbox").change(function() {
    var isChecked = $(this).is(":checked");  // or .prop("checked")

    if (isChecked) {
      // Add the checkbox' label to the selection and highlight both in green.
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    }
  });

  // Another common use case is to read the selected option from a <select>
  // element when a new option is selected.
  $("#selection").change(function() {
    var chosen = $(this).find(":selected").text();
    alert(chosen);
  });*/


      //complete form validation on submit
         

  // When the submit event comes in, we first validate all form fields
  // and abort submission if one of them is invalid. Also, we highlight all
  // invalid fields so that the user knows what to fix.
  //$("#form").submit(function(event) {
    // First, read out all entered values.
   // var name = $("#name").val();
    //var password = $("#password").val();
    //var message = $("#message").val();
    //var checked = $("#checkbox").is(":checked");

    // Then we use our validation functions (defined below) to check each input.
    /*validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
  });

  // In the following, we define helper functions that each validate
  // one of the inputs. These will be used further down by our validation
  // functions.

  function isValidName(name) {
    return name.trim().length >= 2;
  }*/

  //function isValidPassword(password) {
    //return password.length >= 6 && /.*[0-9].*/.//test(password);
  //}

  /*function isValidMessage(message) {
    return message.trim() !== "";
  }

  // Next, we define the actual validation functions which use the helpers from
  // above. These validation functions add a hint for the user for each invalid
  // input and prevent the form from submitting if the input is invalid.

  // First, show a hint if the name is not valid or remove the hint if it's
  // now valid.
  function validateNameField(name, event) {
    if (!isValidName(name)) {
      $("#name-feedback").text("Please enter at least two characters");
      event.preventDefault();
    } else {
      $("#name-feedback").text("");
    }
  }

  // Do the same for the other inputs.
  function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
      $("#password-feedback").text("The password should have at least 6 characters and contain a number");
      event.preventDefault();
    } else {
      $("#password-feedback").text("");
    }
  }

  function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
      $("#message-feedback").text("Please enter a message.");
      event.preventDefault();
    } else {
      $("#message-feedback").text("");
    }
  }

  function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this.");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
  }











  //-----------------------AJAX-Asynchronous Javascript and XML-----------------------------------------------
                      $.load();
                      $.getJSON();
});*/

    
