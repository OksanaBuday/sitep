$(function(){
    $('#btn-send').click(sendForm)
});

function sendForm (e){
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/oksanabuday@gmail.com", 
    method: "POST",
    data: {
        name: $('#name_').val(),
        email: $('#e-mail').val(),
        comment: $('#comment').val()
        
    },
    dataType: "json"
})
.done(function(){
    $('form').html('<h1>Thank you</h1>')
});
}

$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});

$(window).scroll(function(){
    var st = $(this).scrollTop();
    $("#about-me").css({
        "transform":"translate(0%,"+ st/20 +"%"
    });
    // $("#portfolio img").css({
    //     "transform":"translate(0%, "+ st/20 +"%"
    // });
  
    // $("#service").css({
    //     "transform":"translate(0%,"+ st/20 +"%"
    // });
    // $("#all").css({
    //     "transform":"translate(0%, "+ st/20 +"%"
    // });
    // $("#blog").css({
    //     "transform":"translate(0%,"+ st/20 +"%"
    // });
  
});