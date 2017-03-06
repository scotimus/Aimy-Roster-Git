$(function(){
  $("#sites").kendoDropDownList({
    filter: "contains",
    dataSource: {
        transport: {
            read:{
                url: "/Home/ReadSite",
                dataType: "json"
            }                   
        }
    },
    dataTextField: "Name",
    dataValueField: "Id",
    change: function (e) {
        var grid = $("#scheduler").data("kendoGrid");
        var value = $("#sites").val();       

        if (value) {
            grid.dataSource.filter({field:"SiteId",operator:"eq",value:value});
        } else {
            grid.dataSource.filter({});
        }
        
    },
  });

  $("#startTime").kendoTimePicker();
  $("#finishTime").kendoTimePicker();

  $("#scheduler").kendoGrid({
      height: 500,
      rowTemplate: kendo.template($("#template").html()),
      columns: [	
          { field: "Mon" },
          { field: "Tue" },
          { field: "Wed" },
          { field: "Thu" },
          { field: "Fri" },
          { field: "Sat" },
          { field: "Sun" },
      ],
      dataSource: {
          transport:{
              read: {
                  url: "/Home/GetStaff",
                  dataType: "json"
              }
          }
                 
      }, 
  });
})