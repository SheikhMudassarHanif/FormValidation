$(document).ready(function() {
    $('#signIn').on('click', function() {
        $('.flip-card-inner').removeClass('flip');
        $('#logIn').css('color','Black');
        $('#signIn').css('color','white');
    });

    $('#logIn').on('click', function() {
        $('.flip-card-inner').addClass('flip');
        $('#signIn').css('color','Black');
        $('#logIn').css('color','white');

    });

    $('#showpwd1').on('click', function() {
        if ($(this).is(':checked')) {
            $('#signuppwd1').attr('type', 'text');
        } else {
            $('#signuppwd1').attr('type', 'password');
        }
    });
    
    $('#showpwd2').on('click', function() {
        if ($(this).is(':checked')) {
            $('#signuppwd2').attr('type', 'text');
        } else {
            $('#signuppwd2').attr('type', 'password');
        }
    });
    


    $('#createacc').on('click', function() {
        var pwd1 = $('#signuppwd1').val();
        var pwd2 = $('#signuppwd2').val();
        var agecheck = $('#age').val();
        var namecheck=$('#signupname');

        if (pwd1 !== pwd2) {
            alert('Passwords do not match');
        }
        
        if (agecheck < 18) {
            alert('You are under age');
        }
        if(namecheck==''){alert('Enter a Valid Name');}

    });
    



});
