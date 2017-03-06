$(function () {
    templateLoader.loadExtTemplate("feedItemTemplate.tmpl.htm");

    //Add Event
    $(".glyphicon-plus").click(function ()
    {
        if ($('#startTime').val() && $('#finishTime').val() )
        {
            var templateData =
            {
                startTime: $('#startTime').val(),
                finishTime: $('#finishTime').val(),
            }

            //the template is defined in the index
            var innerDivTemplate = kendo.template($("#innerDivTemplate").html());
            var result = innerDivTemplate(templateData);

        
            $(this).before(result);
        }
        else
        {
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