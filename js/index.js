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
            }, 1000);
        }
    });
});

