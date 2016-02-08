$( document ).ready(function() {
    console.log("hoi")
    $('#second_line').css('margin-left', "-"+$("#score_window").width());

    $("#start").click(function(){
        left=0
        stop=false
        window.scoreScroll()
    })

    $("#stop").click(function(){
        stop = true
    })

});