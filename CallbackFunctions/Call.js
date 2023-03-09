$("document").ready(function () {
    // $("#btn1").click(function () {
    //     $("#img1").hide(2000);

    // })

    // $("#btn2").click(function () {
    //     $("#img1").show(2000);

    // })

    // $("#btn3").click(function () {
    //     $("#img1").toggle(3000);

    // })

    // $("#btn4").click(function () {
    //     $("#img1").fadein(2000);

    // })

    // $("#btn5").click(function () {
    //     $("#img1").fadeOut(2000);

    // })

    // $("#btn6").click(function () {
    //     $("#img1").fadeToggle(3000);

    // })

    // $("#btn7").click(function () {
    //     $("#img1").slideUp(2000)
    // })

    // $("#btn8").click(function () {
    //     $("#img1").slideDown(2000)
    // })

    // $("#btn9").click(function () {
    //     $("#img1").slideToggle(2000)
    // })
    // $("#btn10").click(function () {
    //     $("#img1").stop()
    // })

    // $("#btn").click(function () {
    //     $("#img").animate({
    //         left: '150px',
    //         opacity: '1',
    //         height: '400px',
    //         width: '400px'
    //     }, 'slow', function(){
    //         alert("Animated")
    //     })

    // })

    $("#btn").click(function () {
        $("#img").slideUp(2000).css('opacity', '1').slideDown(3000).fadeOut(2000).fadeIn(2000)
    })

});

//$("#img").animate({}, 2000, function(){})