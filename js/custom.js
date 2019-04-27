jQuery(document).ready(function($) {
  // кнопка наверх
  jQuery('.back-to-top').on('click', function(event){
    event.preventDefault();
    jQuery('html, body').animate({scrollTop:340}, 1500);
  });
  // инициализируем плагин scrollto
  jQuery('a.scroll').on('click', function(event) {
    event.preventDefault();
    var idscroll = jQuery(this).attr('href');//получаем значение атрибута href
    jQuery.scrollTo(idscroll, 1500);// перематываем до блока(1500 - это длительность 1 сек.)
    /* Act on the event */
  });

  jQuery('#carousel').barousel({
      navType: 2,
      manualCarousel: 1
  });
});