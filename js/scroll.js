function scoreScroll() {
    left = left + 1
    $("#score_window").scrollLeft(left)
    if(!stop) {
        scrolldelay = setTimeout('scoreScroll()', 15); // scrolls every 100 milliseconds
    }

}