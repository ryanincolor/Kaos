



function delayNavLinks() {
  var navLink = $('.site-nav li');
  var delay = 0

  for (var i = 0; navLink.length > i; i++) {
    delay+= .05;
    $(navLink[i]).css({
      "animation-delay" : delay + 's'
    });
  }
}

function showProjects() {
  $('.expand-site-nav').on('click', function(){
    $('.site-nav').toggleClass('active');
    $('.site-header').toggleClass('expanded');
    $('.expand-site-nav').toggleClass('close');
    $('.projects').toggleClass('visible');

    $('.site-nav .primary li a').on('click', function(e){
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);

      $(this).addClass('active');

      $('html,body').stop().animate({
        'scrollTop': $target.offset().top
      }, 300, 'swing', function() {
        window.location.hash = target;
      });
    });
  });
}

delayNavLinks() 
showProjects() 




