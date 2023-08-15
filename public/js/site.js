document.addEventListener('DOMContentLoaded', function(){
    SetEventListeners();
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

function successMessage(message){
    $('.createdAlerts').addClass('alert alert-success').html('Email Sent <i class="fas fa-circle-check"></i>').fadeIn('slow', function(){
        setTimeout(function(){
            $('.createdAlerts').fadeOut('slow', function(){
                $(this).removeClass('alert alert-success').html('');
            });
        }, 2000);
    });
}

function errorMessage(message){
    $('.createdAlerts').addClass('alert alert-danger').html('Failed to send email <i class="fas fa-circle-exclamation"></i>').fadeIn('slow', function(){
        setTimeout(function(){
            $('.createdAlerts').fadeOut('slow', function() {
                $(this).removeClass('alert alert-success').html('');
            });
        }, 2000);
    });
}