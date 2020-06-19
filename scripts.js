


$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 900);
});


$(window).scroll(function() {
    $('a').toggleClass('scrolled', $(this).scrollTop() > 840);
    var value = $(this).scrollTop();
    if (value > 840)
        $(".pp").attr("src", "images/bg-removed-2edit.png");
    else
        $(".pp").attr("src", "images/bgedit.png");
});


window.sr = ScrollReveal();
sr.reveal('.para2', {
    duration: 2000,
    origin: 'margin-left',
    distance: '300px',
    viewFactor: 0.2
})
sr.reveal('.para3', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
})
sr.reveal('.vid', {
    duration: 2500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
})
sr.reveal('.pics', {
    duration: 3000,
    origin: 'bottom',

    viewFactor: 0.2
})



var mybutton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.sr=ScrollReveal();
    sr.reveal('.pics',{
      duration:2000,
      origin:'bottom',
      viewFactor:0.2
    })
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 
  $('#btnClick').on('click', function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#haha").offset().top
    }, 1000);
  });
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 900);
    });
    window.sr = ScrollReveal();
    sr.reveal('.para2', {
      duration: 2000,
      origin: 'margin-left',
      distance: '300px',
      viewFactor: 0.2
    })
    sr.reveal('.para3', {
      duration: 2000,
      origin: 'right',
      distance: '300px',
      viewFactor: 0.2
    })
    sr.reveal('.vid', {
      duration: 2500,
      origin: 'left',
      distance: '300px',
      viewFactor: 0.2
    })
    sr.reveal('.pics', {
      duration: 3000,
      origin: 'bottom',

      viewFactor: 0.2
    })
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }