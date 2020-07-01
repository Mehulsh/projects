
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
       'use strict';
        if($(window).scrollTop() < 80){
            $('.navbar').css({
               'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css({
               'background-color': 'rgba(59,59,59,0)' 
            });
        }
        else{
            $('.navbar').css({
               'margin-top': '0px',
                'opacity': '1'
            });
             $('.navbar-default').css({
               'background-color': 'rgba(59,59,59,0.7)',
                 'border-color': '#444'
            });
        }
    });
});

$(document).ready(function(){
   
    'use strict';
    $('.nav-item, #scroll-to-top').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             
              if (target.length) {
                  $('html, body').animate({
                   scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
        }
    });
    
});

$(document).ready(function() {
    'use strict';
    
    $('.navbar-nav li a').click(function(){
        
       'use strict';
        
       $('.navbar-nav li a').parent().removeClass("active");       
        
       $(this).parent().addClass("active");
        
    });
});

 
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        $("header, section").each(function() {
            
            'use strict';
            
            var bb = $(this).attr("id");  
            var hei = $(this).outerHeight();   
            var grttop = $(this).offset().top - 70;  
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");  
                
            } else {
                 $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
        });
    });
});

$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,                    
        time: 2000                    
    });
});

$(document).ready(function() {
    
    'use strict';
    
    new WOW().init();   
});
$(document).ready(function() {
    
var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
var dd = tomorrow.getDate();

var mm = tomorrow.getMonth()+1; 
var yyyy = tomorrow.getFullYear();
 if(dd<10){
        dd='0'+dd;
    } 
  if(mm<10){
       mm='0'+mm;
    } 

tomorrow = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", tomorrow);

});

$(function(){
   var frm = $('#form');
    
    $.validator.addMethod("noSpace", function(value, element){
       return value == '' || value.trim().length != 0 
    }, "Spaces are not allowed");
    
    $.validator.addMethod("lettersonly", function(value, element){
       return this.optional(element) || /^[a-z]+$/i.test(value); 
    }, "Please enter letters only!");
    if(frm.length){
        frm.validate({
            rules:{
                f_name:{
                    required: true,
                    noSpace: true,
                    lettersonly: true
                },
                l_name:{
                    required: true,
                    noSpace: true,
                    lettersonly: true
                },
                phone:{
                    required: true,
                    minlength: 10,
                    number: true
                },
                email:{
                    email: true
                },
                seats:{
                    required: true,
                    range: [1,30]
                },
                date:{
                    required: true
                }
                
            },
            messages:{
                f_name:{
                    required: 'Please enter first name!'
                },
                 l_name:{
                    required: 'Please enter last name!'
                },
                phone:{
                    required: 'Please enter mobile no.!',
                    minlength: 'Enter 10 digits mobile number'
                },
                seats:{
                    required: 'Please enter no. of seats required!'
                },
                date:{
                    required: 'Please enter booking date!'
                }   
               
            }
        })
    }
});

$('#form').submit(function(){  //stop form to submit on button click and next function is used
   return false; 
});
$('#submit').click(function(){  //make the form submit without reloading
   $.post(
       $('#form').attr('action'),
       $('#form :input').serializeArray(),
       function(result){
           $('#form').trigger("reset");// reset form data           
            $("#form").submit(function(e){ //this function is used to check whether form if submitted or not
                e.preventDefault;
                if(e.result == true){
                    swal("Done!","Table is booked", "success"); 
                }
                   
            });   
         }
               ); 
});