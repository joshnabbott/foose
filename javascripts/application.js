$(document).ready(function() {

  $('.post, .video, .event').each(function() {
    $(this).hover(function() {
      $(this).addClass('active');
    },
    function() {
      $(this).removeClass('active');
    });
  });

  setTimeout(function(){
    $('#slider').nivoSlider({
      effect: 'fade',
      directionNav: true,
      directionNavHide: false,
      pauseTime: 5000,
      pauseOnHover: false,
      controlNavThumbs: true,
      controlNavThumbsReplace: '-thumb.jpg',
      slices: 1
    });
  }, 2000);
});