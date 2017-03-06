
    var viewingDate = getCurrentMonday(new Date());

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
          "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    var weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    initialDateLine();

    updateWeekButtons();



    function initialDateLine() {
        var tableMonday = getCurrentMonday();

        var result = '';
        $('th').each(function (index) {

            result = weekNames[tableMonday.getDay()] + ' ' + tableMonday.getDate() + ' ' + monthNames[tableMonday.getMonth()];
            $(this).html(result);
            tableMonday.setDate(tableMonday.getDate() + 1);
        });
    }

    //renew the th based on the week user select
    $("#btnWeekA,#btnWeekB,#btnWeekC").click(function () {

        //var tableMonday = new Date($(this).val());

        //updateDateTitle(tableMonday);

    });


    $(".btnWeekSel").click(function () {

        var tableMonday = new Date($(this).val());

        updateDateTitle(tableMonday);
    });


    $("#btnNextWeek").click(function () {
        nextWeek();
        updateWeekButtons();
    });

    $("#btnPreviousWeek").click(function () {
        previousWeek();
        updateWeekButtons();
    });

    $("#btnToday").click(function () {
        viewingDate = getCurrentMonday()
        updateWeekButtons();
        initialDateLine();
    });






    function updateWeekButtons() {
        $("#btnWeekA").html(getWeekSignature(viewingDate));
        $("#btnWeekA").attr('value', viewingDate);
    

        var weekB = new Date(viewingDate);
        weekB.setDate(weekB.getDate() + 7);

        $("#btnWeekB").html(getWeekSignature(weekB));
        $("#btnWeekB").attr('value', weekB);


        var weekC = new Date(viewingDate);
        weekC.setDate(weekC.getDate() + 14);

        $("#btnWeekC").html(getWeekSignature(weekC));
        $("#btnWeekC").attr('value', weekC);
    }


    //returns the monday before the given date
    function getCurrentMonday() {
        var d = new Date();
        var n = d.getDay()==0 ? 7 : d.getDay();
        var mon = new Date(d - (n-1) * 86400000);

        return mon;
    }


    function getWeekSignature(monday) {


        var lastDay = new Date(monday);
        lastDay.setDate(lastDay.getDate() + 6);

        var weekSignature =
        monday.getDate() + ' ' + monthNames[monday.getMonth()] + " - " + lastDay.getDate() + ' ' + monthNames[lastDay.getMonth()]

        return weekSignature;
    }



    function initializeWeekDays(firstDay) {
        var dates = [firstDay];

        for (i = 1; i < 7; i++) {
            dates[i] = new Date(dates[0]);
            dates[i].setDate(dates[i].getDate() + i);
        }

        return dates;
    }


    function nextWeek() {
        viewingDate.setDate(viewingDate.getDate() + 7);
        initializeWeekDays(viewingDate);
    }

    function previousWeek() {
        viewingDate.setDate(viewingDate.getDate() - 7);
        initializeWeekDays(viewingDate);
    }

    function updateDateTitle(thisMonday) {

        var result = '';
        $('th').each(function (index) {

            result = weekNames[thisMonday.getDay()] + ' ' + thisMonday.getDate() + ' ' + monthNames[thisMonday.getMonth()];
            $(this).html(result);
            thisMonday.setDate(thisMonday.getDate() + 1);
        });

    }

