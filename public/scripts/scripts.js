$('.expand-site-nav').on('click', function(){
  $('.site-nav').toggleClass('active');
  $('.site-header').toggleClass('expanded');
});

var navLink = $('.site-nav li');

var delay = 0

for (var i = 0; navLink.length > i; i++) {

 delay+= .05;


  console.log(delay)

  $(navLink[i]).css({
    "animation-delay" : delay + 's'
  });
}

