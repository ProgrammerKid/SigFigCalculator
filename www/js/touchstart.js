$.fn.touchstart = function(callback) {
    this.on("click", callback());
    this.on("touchstart", callback());
}
