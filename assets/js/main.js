$(document).ready(function(){
  $('ul.navbar-nav li a').click(function(e){
      $('ul.navbar-nav li a').removeClass("active");
        $(this).addClass("active");
      localStorage.setItem('active', $(e.target).attr('href'));  
      // console.log($(this))
    });
    active = localStorage.getItem('active')
    if(active){
        $('ul.navbar-nav li a[href="' + active + '"]').addClass('active')
    }
});