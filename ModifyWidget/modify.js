$(" document").ready(function () {

    $("#dialog").dialog({
        draggable: true,
        resizable: true,
        closOnEscape: true,
        modal: false,
        autoOpen: true,
        height: 250,
        width: 250

    })

    $("#btn1").click(function () {
        // alert("GET is working")
        var modal = $("#dialog").dialog("option", "height")
        alert(modal)
    })
    $("#btn2").click(function () {
        //alert("SET is working")
        $("#dialog").dialog("option", "height", 300)
    })

})