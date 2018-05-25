    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thPage'], menu: '#button',
     
     onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        
         if(index == 1 && direction =='down'){
          $("#navbar").addClass("navbar_display"); 
          $("#headerTop").addClass("header_top_border");
          $("a").addClass("links_color");
          $("#log_in").addClass("log_in_color"); 
          $("#headerTop").addClass("headertop_bg"); 
          $("#headerTop").removeClass("header_top_border_s");
          $("#hwt").addClass("hwt"); 
          $("#ab").removeClass("ab");
        }
        else if(index == 2  && direction =='down'){
            $("#headerTop").removeClass("headertop_bg");
            $("#headerTop").addClass("header_top_border_s"); 
            $("#log_in").removeClass("log_in_color");
            $("#hwt").removeClass("hwt");
            $("#ab").addClass("ab");
        }
        else if(index == 3 && direction=='down'){
          // $("#navbar").addClass("navbar_display"); 
          $("#headerTop").addClass("header_top_border");
          $("a").addClass("links_color");
          $("#log_in").addClass("log_in_color"); 
          $("#headerTop").addClass("headertop_bg"); 
          $("#headerTop").removeClass("header_top_border_s");
          $("#et").addClass("hwt"); 
          $("#ab").removeClass("ab");
        }
        else if( index == 2 && direction == 'up'){
           $("#navbar").removeClass("navbar_display");
            $("#headerTop").removeClass("headertop_bg");
            $("#headerTop").removeClass("header_top_border"); 
            $("#log_in").removeClass("log_in_color"); 
            $("#links").removeClass("links_color");      
           $("#log_in").removeClass("log_in_color"); 
            $("#hwt").removeClass("hwt");
        }

        else if (index == 4 && direction == 'down') {
           /* $("#headerTop").removeClass("headertop_bg");*/ 
            $("#headerTop").removeClass("header_top_border"); 
             $("#headerTop").removeClass("headertop_bg");
              $("#headerTop").addClass("header_top_bg_last"); 
              $("#headerTop").addClass("header_top_border_last");
              $("#et").removeClass("hwt");   
              $("#fa").addClass("fa");   

        }

        else if (index == 3 && direction == 'up') {
            $("#headerTop").removeClass("header_top_border_s"); 
             $("#headerTop").addClass("headertop_bg");   
             $("#ab").removeClass("ab");
             $("#hwt").addClass("hwt");  
             $("#et").removeClass("hwt");         
        }
          else if (index == 4 && direction == 'up') {
            $("#headerTop").removeClass("headertop_bg"); 
            // $("#headerTop").removeClass("header_top_border"); 
            $("#headerTop").addClass("header_top_border_s");  
            $("#ab").addClass("ab");
             $("#hwt").removeClass("hwt");  
             $("#et").removeClass("hwt");  
            $("#log_in").removeClass("log_in_color");         
        }
          else if (index == 5 && direction == 'up') {
            $("#headerTop").addClass("headertop_bg"); 
            $("#headerTop").addClass("header_top_border");
             $("#headerTop").removeClass("header_top_bg_last"); 
              $("#headerTop").removeClass("header_top_border_last");
              $("#et").addClass("hwt");
              $("#fa").removeClass("fa");      
                         
        }
      },    

    });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
