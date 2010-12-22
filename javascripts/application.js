$(document).ready(function() {
  setTimeout(function(){
    $('#slider').nivoSlider({
      effect: 'fade',
      directionNav: false,
      pauseTime: 5000,
      pauseOnHover: false,
      controlNavThumbs: true,
      controlNavThumbsReplace: '-thumb.jpg',
      slices: 1
    });
  }, 2000);
});