jQuery(document).ready(function ($) {

    $('.Num1').hide();

    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.wrapper').html('');
            for (var a = 0; a < res.data.length; a++) {
                $('.wrapper').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
            }

        }
    });



    $('.Num2').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.wrapper').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.wrapper').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });


        $('.Num2').hide();
        $('.Num1').show();
    });

    $('.Num1').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.wrapper').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.wrapper').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });

        $('.Num1').hide();
        $('.Num2').show();
    });

});