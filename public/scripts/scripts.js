



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
  var $siteHeader     = $('.site-header'),
      $siteNav        = $('.site-nav'),
      $siteNavLinks   = $('.site-nav .primary li'),
      $expand         = $('.expand-site-nav'),
      $projects       = $('.projects'),
      $projectPreview = $('.project');


  $expand.on('click', function(){
    $siteNav.toggleClass('active');
    $siteHeader.toggleClass('expanded');
    $expand.toggleClass('close');
    $projects.toggleClass('visible');
    $siteNavLinks.removeClass('active');

    $('.site-nav .primary li:first-child').addClass('active');
  });

  $siteNavLinks.children('a').on('click', function(e){
    e.preventDefault();
    var target  = this.hash,
        $target = $(target);

    $siteNavLinks.removeClass('active');
    $(this).parent().addClass('active');

    $('html,body').stop().animate({
      'scrollTop': $target.offset().top
    }, 300, 'swing', function() {
      window.location.hash = target;
    });
  });

  $projectPreview.on('click', function(e) {
    $siteNav.removeClass('active');
    $siteHeader.removeClass('expanded');
    $expand.removeClass('close');
    $projects.addClass('full-width');
    $projectPreview.addClass('hidden');

    $(this).removeClass('hidden');

    $(this).addClass('active');
  

    $('html,body').stop().animate({
      'scrollTop': $(this).offset().top
    }, 300, 'swing', function() {

    });

    setTimeout(function(){
      $projectPreview.not('.active').remove();
    }, 100);
  });
}


  $(".project a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active").next().slideToggle("slow");
        var Link = $(this).attr("href");
        setTimeout(function()
        {
             window.location.href = Link;
        }, 400);
    });

function closeProject() {
  $('p-actions').on('click', function(){

  });
}

delayNavLinks()
showProjects()




