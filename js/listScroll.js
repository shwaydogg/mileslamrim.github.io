$(".list-item").each(function(){
  $(this).on('inview', function(event, isInView) {
    var name = this.getAttribute('name');
    event.stopPropagation();
    if (isInView) {
      //Element is now visible in the viewport:
      $("#nav-mobile [name='" + name + "']" ).addClass("active").find('.collapsible-body').slideToggle('show');
    } else {
      //Element has gone out of viewport:
      $("#nav-mobile [name='" + name + "']" ).removeClass("active").find('.collapsible-body').slideToggle('show');
    }
  });
});

if( $(window).width() < 993) {
  $('#nav-mobile .collapsible-body a').click(()=>{
    $('.button-collapse').sideNav('hide');
  });
}
