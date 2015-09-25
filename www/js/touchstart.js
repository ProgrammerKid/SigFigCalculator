$.fn.touchstart = function(callback) {
    this.bind("touchstart click", callback());
}
