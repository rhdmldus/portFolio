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


  // 마우스로 페이지이동
  // $('#headerWrap').on('mousewheel',function(){
  //   var toAbout = $(this).next().position().top;
  //   $('html,body').stop().animate({scrollTop:toAbout})
  //   $('#gnb li').removeClass('on')
  //   $('#gnb li:eq(0)').addClass('on')

  // })
  // $('#aboutSeogwang').on('mousewheel',function(){
  //   $('html,body').stop().animate({scrollTop:0})
  //   $('#gnb li').removeClass('on');

  // })
  // $('section').on('mousewheel',function(event,delta){
  //   if(delta>0){
  //     var prevIndex = $(this).index()-1
  //     console.log(prevIndex)
  //     if(prevIndex<0){
  //       prevIndex=1;
  //     }
  //     else{
  //       $('#gnb li').removeClass('on')
  //       $('#gnb li:eq('+prevIndex+')').addClass('on')
  //       //
  //       var pos = $(this).prev().position().top
  //       $('html,body').stop().animate({scrollTop:pos})
  //     }

  //   }

  //   else {
  //     var nextIndex = $(this).index()+1
  //     console.log(nextIndex)
  //     if(nextIndex==4){
  //       nextIndex=0
  //     }
  //     else{
  //       $('#gnb li').removeClass('on')
  //       $('#gnb li:eq('+nextIndex+')').addClass('on')
  //       //
  //       var pos = $(this).next().position().top
  //       $('html,body').stop().animate({scrollTop:pos})
  //     }
  //     }


  // })
// 네비
$(window).on('scroll',function(){
  var w = window.innerWidth;
  console.log(w)

  if($(this).scrollTop()>=$(window).height())
  $('#header').css({position:'fixed'}).css({background:'#000'})
  else if (w<=987){
    return false;
  }

  else {
    $('#header').animate({position:'absolute'}).css({background:'none'})

  }
})


// toggle
$('.toggleWrap').toggle(function(){
  $('#header').css({backgroundColor:'#000'})
  $('#gnb').animate({top:80})
  $('#sns').animate({top:300})
},function(){
  $('#header').css({backgroundColor:'none'})
  $('#gnb').animate({top:'-50vh'})
  $('#sns').animate({top:'-50vh'})


})

// 요금표
var className, classNum

function moveNext(){
      className = $('#ridingPrice section:first').attr('class')
      classNum = className.substr(6,1)

      if (classNum == 4){
        classNum = 0
      }
      $('#btnNum span').removeClass('on')
      $('#btnNum span:eq('+classNum+')').addClass('on')

  $('#ridingPrice section:eq(1):not(:animated)').addClass('on')
                                 .css({opacity:0})
                                 .animate({opacity:1},function(){
                                   $('#ridingPrice').append($('#ridingPrice section:eq(0)'))
                                   $('#ridingPrice section:last').removeClass('on')
                                 })

}
function movePrev(){
      className = $('#ridingPrice section:last').attr('class')
      classNum = className.substr(6,1)-1
      $('#btnNum span').removeClass('on')
      $('#btnNum span:eq('+classNum+')').addClass('on')

  $('#ridingPrice section:last:not(:animated)').addClass('on')
                               .css({opacity:0})
                               .animate({opacity:1},function(){
                                 $('#ridingPrice').prepend($('#ridingPrice section:last'))
                                 $('#ridingPrice section:eq(1)').removeClass('on')
                               })
}

$('.next').click(function(){
  moveNext();
})

$('.prev').click(function(){
  movePrev();

})

// 번호버튼
$('#btnNum span').on('click',function(){
  $('#btnNum span').removeClass('on')
  $(this).addClass('on')

  var num = $(this).index()+1
  var n = num;
  if($('.slider'+num).hasClass('on')){
    return false;
  }
    else {
      $('#ridingPrice .slider'+num).addClass('on')
                                   .css({opacity:0})
                                   .animate({opacity:1},function(){
                                     $('#ridingPrice section').not($(this)).removeClass('on')
                                     $('#ridingPrice').prepend($(this))
                                     for (var i=0; i < $('#ridingPrice section').length-1; i++){
                                       n++;
                                       if (n == 5){
                                         n=1;
                                       }
                                       $('#ridingPrice').append($('.slider'+n))
                                     }
                                   })
    }

});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters

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
