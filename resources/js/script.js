$(document).ready(function(){

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
            offset:'60px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--carousel').offset().top},1000);
    });


        /* Owl Carousel */
        $('.owl-carousel').owlCarousel({
           
            margin:30,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            },
            autoplay:true
        });

     /* Owl Carousel */
     $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated animate__fadeIn');
     },{
         offset: '50%'
     });

     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    },{
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__pulse');
    },{
        offset: '50%'
    });

        /* Order Online FadeIn */
        $('.js--order-online1').waypoint(function(direction){
            $('.js--order-online1').addClass('animated animate__fadeIn');
        },{
            offset: '70%'
        });

        $('.js--order-online2').waypoint(function(direction){
            $('.js--order-online2').addClass('animated animate__fadeIn');
        },{
            offset: '70%'
        });

        $('.js--order-online3').waypoint(function(direction){
            $('.js--order-online3').addClass('animated animate__fadeIn');
        },{
            offset: '60%'
        });
    

});