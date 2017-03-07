$(function(){
    var gridData;
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
    //change: function (e) {
    //    var grid = $("#scheduler").data("kendoGrid");
    //    var value = $("#sites").val();       

    //    if (value) {
    //        grid.dataSource.filter({field:"SiteId",operator:"eq",value:value});
    //    } else {
    //        grid.dataSource.filter({});
    //    }
        
    //},
    select: onSelect,
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
      dataSource: gridData,
      //dataSource: {
      //    transport:{
      //        read: {
      //            url: "/Home/GetStaff",
      //            dataType: "json"
      //        }
      //    }
                 
      //},
      noRecords: {
          template: "Please select a site."
      }
  });

  function onSelect(option) {
      console.log(option.dataItem.Id);
      gridData = new kendo.data.DataSource({
          transport: {
              read: {
                  url: "/Home/GetStaff",
                  data: {getSiteId :option.dataItem.Id },
                  dataType: "json"
              }

          },
      });

      var newgrid = $("#scheduler").data("kendoGrid");
      newgrid.setDataSource(gridData);


  };
})

    