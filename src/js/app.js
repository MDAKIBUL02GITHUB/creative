function blockbar(){
    document.getElementById('display_bar').style.display = "block";
    document.getElementById('hide_bar').style.display = "none";
    document.getElementById('cross').style.display = "block";
} 
 function crossBar(){
    document.getElementById('display_bar').style.display = "none";
    document.getElementById('hide_bar').style.display = "block";
    document.getElementById('cross').style.display = "none";
}
function colhov(){
    const messagehov = document.getElementById('message');
    messagehov.style.borderBottom = ".2rem solid rgb(255,90,20)"
    messagehov.style.color = "rgb(255,90,20)";
    const messagehov1 = document.getElementById('in1');
    messagehov1.style.borderBottom = "none"
    messagehov1.style.color = "#353535";
    const messagehov2 = document.getElementById('in2');
    messagehov2.style.borderBottom = "none"
    messagehov2.style.color = "#353535";
}
function cdv(){
    const messagehov1 = document.getElementById('in1');
    messagehov1.style.borderBottom = ".2rem solid rgb(255,90,20)"
    messagehov1.style.color = "rgb(255,90,20)";
    const messagehov2 = document.getElementById('in2');
    messagehov2.style.borderBottom = "none"
    messagehov2.style.color = "#353535";
    const messagehov = document.getElementById('message');
    messagehov.style.borderBottom = "none"
    messagehov.style.color = "#353535";
}
function cd2v(){
    const messagehov2 = document.getElementById('in2');
    messagehov2.style.borderBottom = ".2rem solid rgb(255,90,20)"
    messagehov2.style.color = "rgb(255,90,20)";
    const messagehov = document.getElementById('message');
    messagehov.style.borderBottom = "none"
    messagehov.style.color = "#353535";
    const messagehov1 = document.getElementById('in1');
    messagehov1.style.borderBottom = "none"
    messagehov1.style.color = "#353535";
}
$(document).ready(function(){
    var mixer = mixitup('#newmix');
});

$(document).ready(function(){
    
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        margin: 15,
        slideSpeed: 400,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        resonsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1000 : {
                items: 2
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
    });  
  
    wow = new WOW();
    wow.init();
      
  });