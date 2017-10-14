$(document).ready( function() {

//========= tabs
$('.game-menu__link').on( 'click', function(e) {
  e.preventDefault();
  $('.game-menu .game-menu__link--active').removeClass('game-menu__link--active');
  $(this).addClass('game-menu__link--active');
  var href = $(this).attr('href');
  $('.game__wrap').not(href).css({'display':'none'});
  $(href).css({'display':'block'});
});

//========= rating
$('.game-rating__star').on('mouseover', function(){
  var hoverStar = parseInt($(this).data('value')); 
  
  $('.game-rating__star').each(function(e){
    if (e < hoverStar) {
      $(this).addClass('game-rating__star--hover');
    }
    else {
      $(this).removeClass('game-rating__star--hover');
    }
  });
  
}).on('mouseout', function(){
  $('.game-rating__star').each(function(e){
    $(this).removeClass('game-rating__star--hover');
  });
});

$('.game-rating__star').on('click', function(){
  var hoverStar = parseInt($(this).data('value')); 
  var stars = $('.game-rating__star');

  for (i = 0; i < stars.length; i++) {
    $(stars[i]).removeClass('game-rating__star--selected');
  } 
  
  for (i = 0; i < hoverStar; i++) {
    $(stars[i]).addClass('game-rating__star--selected');
  } 
});

});







