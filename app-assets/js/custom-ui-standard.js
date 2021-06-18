var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var url_string = $(location).attr("href"); //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("login");
    var username = document.getElementById("username").value;
    var password =
        document.getElementById("digit-1").value +
        document.getElementById("digit-2").value +
        document.getElementById("digit-3").value +
        document.getElementById("digit-4").value +
        document.getElementById("digit-5").value +
        document.getElementById("digit-6").value;
    if (username == "100095" && password == "123456") {
        //alert ("Login successfully");
        if (c == 2) {
            // window.open("./shift_screen_alarm.html"); // Redirecting to other page.
            window.location.href = "shift_screen.html?login=2";
        } else {
            window.location.href = "welcome.html";
            // window.open("./welcome.html"); // Redirecting to other page.
        }
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
$('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var url_string = $(location).attr("href"); //window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("login");
    var username = document.getElementById("username").value;
    var password =
        document.getElementById("digit-1").value +
        document.getElementById("digit-2").value +
        document.getElementById("digit-3").value +
        document.getElementById("digit-4").value +
        document.getElementById("digit-5").value +
        document.getElementById("digit-6").value;
    if (username == "100095" && password == "123456") {
        //alert ("Login successfully");
        if (c == 2) {
            // window.open("./shift_screen_alarm.html"); // Redirecting to other page.
            window.location.href = "shift_screen.html?login=2";
        } else {
            window.location.href = "welcome.html";
            // window.open("./welcome.html"); // Redirecting to other page.
        }
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
$('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});




let digitValidate = function(ele) {
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g, '');
}

let tabChange = function(val) {
    let ele = document.querySelectorAll('input');
    if (ele[val - 1].value != '') {
        ele[val].focus()
    } else if (ele[val - 1].value == '') {
        ele[val - 2].focus()
    }
}

function otptimer() {
    //alert(1);
    document.getElementById('timer').innerHTML =
        03 + ":" + 00;
    startTimer();
}

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    //if(m<0){alert('timer completed')}
    if (m == 0 && s == 0) {
        document.getElementById('timer').innerHTML = "";
        otpblink();
        return;
    }
    document.getElementById('timer').innerHTML =
        m + ":" + s;
    setTimeout(startTimer, 1000);
}

function otpblink() {
    $("#timer").append(" <blink>0:00</blink>");
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}


$("#otp_input_6").on("keyup", function() {


    var otp = $("#otp_input_1").val() + $("#otp_input_2").val() + $("#otp_input_3").val() + $("#otp_input_4").val() + $("#otp_input_5").val() + $("#otp_input_6").val();

    if (otp == '123456') {

        $.alert({
            title: 'LOGIN',
            content: 'successfully',
        });



        //confrim("Login successfully");
    } else {
        $.alert({
            title: 'ERROR',
            content: 'WRONG OTP!!',
        });



    }
});


$(document).ready(function() {
    var table = $('#grid_table').DataTable({

        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }],
        dom: 'Bfrtip',
        buttons: [{
                extend: 'excelHtml5',
                className: 'excel_button',
                text: '<i class="la la-download"></i>',
                titleAttr: 'Export Data',
                filename: 'To be Processed',
                exportOptions: {
                    columns: "thead th:not(.noExport)"
                }
            },

            {
                extend: 'colvis',
                text: '<i class="la la-eye-slash" title="Hide/Unhide Columns"></i>',
                titleAttr: 'Hide/Unhide Columns',
                className: 'hide_button'
            },

            {
                extend: 'pageLength',
                text: '<i class="la la-list-ol" title="Toggle Page Length"></i>',
                className: 'length_button',
                titleAttr: 'Toggle Page Length'
            },
        ]

    });


});



$(document).ready(function() {
    $(".hide_button").addClass("btn-sm");
    $(".buttons-page-length").addClass("btn-sm");
    $(".buttons-page-length").addClass("page_length_button");
    $(".excel_button").addClass("btn-sm");

    // $(".dt-buttons").css("position","absolute");
    // $(".dt-buttons").css("top","0");
    // $(".dt-buttons").css("right","0");
    $('select').selectpicker();
});



$("#filter_button_1").click(function() {
    $(".filter_div").show();
});


$("#filter_div_save").click(function() {
    $(".filter_div").hide();
});

$("#filter_div_close").click(function() {
    $(".filter_div").hide();
});