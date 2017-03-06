$(function () {

    $(".glyphicon-plus").on({
        hover: function () {
            $(this).css("color", "yellow");
            $(this).css('cursor', 'pointer');
            //$(this).animate({fontSize:"24px"},20);
            $('.myClass').css('cursor', 'pointer');
        },
	    mouseleave: function () {
	        $(this).css("color", "#32C0C6");
	        $(this).css('cursor', 'auto');
	        //$(this).animate({fontSize:"14px"},20);
	}
	});





    $("body").on("click",".glyphicon-plus",function () {

        var startTime = $('#startTime').val();
        if (!startTime)
            startTime = '6:00 AM';
        var finishTime = $('#finishTime').val();
        if (!finishTime)
            finishTime = '12:00 PM';

        var div =
            $("<div class='innerdiv'>" + startTime + " - " + finishTime + "<span class='glyphicon glyphicon-remove'></div>");
        $(this).before(div);

        //console.log($('#sites').val());
        //var siteName = $('#sites').val()

        ////console.log($(this).parent().parent().prev().children().first().text());
        //var staffName = $(this).parent().parent().prev().children().first().text();
        //var sDate = $(this).parent().attr('class');
        //var sDateArray = sDate.split(" ");
        //var dateJson = $("#dateHeader").children().get(sDateArray[1].charAt(1) - 1).innerHTML;

        //var tableIndex = sDateArray[1] + sDateArray[2];
        //var scheduleData = { site: siteName, staff: staffName, scheduleDate: dateJson, startHour: startTime, finishHour: finishTime, index: tableIndex };
        //console.log(JSON.stringify(scheduleData) + ":testing 1");
        //scheduleArray.push(scheduleData);
    });





    $(".glyphicon-remove").on({
        hover: function () {
            $(this).css('cursor', 'pointer');
        },
        mouseleave: function () {
            $(this).css('cursor', 'auto');
        }
	});





    $("body").on("click", ".glyphicon-remove", function (event) {
       // var hoursArray = $(this).parent().text().split("-");

       // var startTime = hoursArray[0].slice(0, -1);
       // console.log(startTime);
       // var finishTime = hoursArray[1].slice(1);
       // console.log(finishTime);
       // var staffName = $(this).parent().parent().parent().prev().children().first().text();
       // var siteName = $('#sites').val()

       // var sDate = $(this).parent().parent().attr('class');
       // var sDateArray = sDate.split(" ");
       //// var dateJson = $("#dateHeader").children().get(sDateArray[1].charAt(1) - 1).innerHTML;

       //// var scheduleData = { site: siteName, staff: staffName, scheduleDate: dateJson, startHour: startTime, finishHour: finishTime };

       // var tableIndex = sDateArray[1] + sDateArray[2];

       // console.log(JSON.stringify(scheduleData) + ":testing 2");
        //console.log(scheduleArray.indexOf(scheduleData))

       /* var indexInt = scheduleArray.findIndex(
			x => x.index == tableIndex
		);
        console.log(indexInt);*/
        $(this).parent().remove();

    });

    $("#startTime").kendoTimePicker();
    $("#finishTime").kendoTimePicker();
    $("#reference").kendoDropDownList();
    $("#add").kendoButton();


});

