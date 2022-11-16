
let homeOffset=$("#home").offset().top
$(window).scroll(function()
{
    let wScroll=$(window).scrollTop();
    if(wScroll > homeOffset)
    {
    $("#main-nav").css("backgroundColor","rgba(0,0,0,.9)")
     $("#btnUp").fadeIn(2000)
    }
    else
    {
        $("#main-nav").css("backgroundColor","transparent")    
        $("#btnUp").fadeOut(2000)
    }
})

$("#btnUp").click(function()
{
    $("html,body").animate({scrollTop:0},2000)
})

$(".nav-link").click(function()
{
    let currentHref=$(this).attr("href")
    let currentOffset=$(currentHref).offset().top
    $("html,body").animate({scrollTop:currentOffset - 55},1000)
})


$(document).ready(function()
{
    $("#loading").fadeOut(2000,function()
    {
        $("#loading").remove()
        $("body").css("overflow","visible")
    })
})

var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['always choose good', 'we are the best'],
    smartBackspace: true,
    loop:true,
    typeSpeed:100,
    showCursor: false
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeou:10,
     dots:true,
     nav:true
    })
  });
  new WOW().init();