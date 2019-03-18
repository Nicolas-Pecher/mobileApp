//This is a post
    var dataJSON =  {
        Id:9,
        KlantId:1,
        Naam:"Post from ajax via hosted api",
        Overuren:true
    }

    //var dataJSON = "this comes from the ajax call";

    $.ajax({
        type: 'POST',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/Project',
        data: JSON.stringify(dataJSON),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });

//This is a get
    $.ajax({
        type: "get",
        url: "http://mobileapp-planning-services.azurewebsites.net/api/Project",
        success: function (response) {
            console.log(response)
        }
    });