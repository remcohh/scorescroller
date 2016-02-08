function scoreScroll() {
    left = left + 1
    $("#score_window").scrollLeft(left)
    scrolldelay = setTimeout('scoreScroll()',15); // scrolls every 100 milliseconds

}