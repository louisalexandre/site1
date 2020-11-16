
// A $( document ).ready() block.
$(document).ready(function () {
    // my code here



    // media query event handler
    if (matchMedia) {
    const mq = window.matchMedia("(min-width: 736px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {
    if (mq.matches) {
      $("#swap1").toggleClass('content3 content3');
      $("#swap2").toggleClass('content4 content4');}
      else {
        $(".content3").addClass('hide');
        $(".content4").removeClass('hide');
      }

    }



    /* btn not visible @ pageload*/
    $('.btnBoom').hide(0);
    // find collapsible
    $('.collapsible').click(function () {
        // console.log('clicked');
        // when clicked do summat..
        if ($(this).hasClass('collapsible active')) {
            // removing class if has class
            $(this).removeClass('active');
            $(this).next().removeClass('open');


        } else {
            // console.log('actives not here');
            // Adding active class and removing for the others in the same node
            $(this).addClass('active').siblings().removeClass('active');
            $(this).next().addClass('open').siblings().removeClass('open');

        }
        // if collapsible active == btn visible
        if ($(this).parent().children().hasClass('active')) {
            $(this).parents().find('.btnBoom').fadeIn(100);
        } else {
            $(this).parents().find('.btnBoom').fadeOut(400);
        }
    });
    //btn close all don't panic!
    $('.btnBoom').click(function () {
        $(this).closest('#content-wrap').find('.collapsible').removeClass('active').next().removeClass('open');
    });



    //btn closes itslef on click on itsleft
    $('.btnBoom').click(function () {
        $(this).parents().find('.btnBoom').fadeOut(200);
    });





    //TOUT EN GRAND
    $('.displayBig').click(function () {
        $(this).closest('.content2').find('.content3').addClass('hide');
        $(this).closest('.content2').find('.content4').removeClass('hide');
    });
    //TOUT EN GRID
    $('.displayGrid').click(function () {
        $(this).closest('.content2').find('.content4').addClass('hide');
        $(this).closest('.content2').find('.content3').removeClass('hide');
    });




});
