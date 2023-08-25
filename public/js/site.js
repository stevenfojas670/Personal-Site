document.addEventListener('DOMContentLoaded', function(){
    SetEventListeners();

    //Elements to check for if they are in view
    var aboutHeader = $('.about-text').children(':first-child');
    var aboutSubHeader = $('.about-text').children(':nth-child(2)');
    var aboutText = $('.about-text').children(':nth-child(3)');

    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                console.log('about-text is in view');
                aboutHeader.css('animation', 'slide-left 0.7s ease-out forwards');
                aboutSubHeader.css('animation', 'slide-right 0.7s ease-out forwards');
                aboutText.css('animation', 'slide-up 0.9s ease-out forwards');
                observer.unobserve(entry.target);
            }
        })
    });

    observer.observe(aboutHeader[0]);
    observer.observe(aboutSubHeader[0]);
    observer.observe(aboutText[0]);
});

function SetEventListeners(){

    $(document).on('show.bs.collapse', '#navbarContent', function(){
        $('.nav-icons').addClass('gap-3');
    });

    $(document).on('hidden.bs.collapse', '#navbarContent', function(){
        $('.nav-icons').removeClass('gap-3');
    });

    $(document).on('click', '#submit', function(){
        var message = {
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        }

        //ajax call to send email
        $.ajax({
            data: message,
            url: '/mailer/SendEmail',
            method: 'POST',
            success: function(res){
                successMessage();
            },
            error: function(error){
                errorMessage();
            }
        });
    });
}