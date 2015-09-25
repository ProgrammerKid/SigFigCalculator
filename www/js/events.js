$(document).ready(function() {
    $(".insert_key").touchstart(function() {
        app.insertToInput(this.innerHTML);
    });

    $(".equals_key").touchstart(function() {
        var currInput = document.getElementById("sigfig_input");
        currInput.value = eval(currInput.value);
    });
    
    //clear the display
    document.getElementById("sigfig_input").value = "";
});
