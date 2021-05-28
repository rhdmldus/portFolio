$(document).ready(function(){
  $('.mainText').css({animation:'fill 0.5s ease forwards 3.5s'})


// 네비로페이지이동
  $('html,body').animate({scrollTop:0})
  $('#gnb li').click(function(e){
    var pos =
    $($(this).children('a').attr('href')).position().top;
    $('body,html').animate({scrollTop:pos})
    e.preventDefault();
  })


  
// 네비
$(window).on('scroll',function(){
  let $header = $('.header');
  let headerHeight = $header.height();
  let scrollTop = $(window).scrollTop();
  if(scrollTop > headerHeight){
    $header.addClass('drop');
  }
  if(scrollTop < headerHeight) {
    $header.removeClass('drop')
  }

})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

})
