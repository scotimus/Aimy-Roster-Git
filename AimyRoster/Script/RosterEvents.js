$(function () {
    //Add Event
    $(".glyphicon-plus").click(function () {
        var startTime = $('#startTime').val();
        var finishTime = $('#finishTime').val();

        if (finishTime || startTime) {
            var div =
            $("<div class='innerdiv'>" + startTime + " - " + finishTime + "<span class='glyphicon glyphicon-remove'></div>");
            $(this).before(div);
        }
        else {
            window.alert("Please select a time");
        }

    });




    //remove Event
    $("body").on("click", ".glyphicon-remove", function (event) {

        $(this).parent().remove();

    });

    $("#startTime").kendoTimePicker();
    $("#finishTime").kendoTimePicker();
    $("#reference").kendoDropDownList();
    $("#add").kendoButton();

});