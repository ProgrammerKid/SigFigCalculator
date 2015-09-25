var app = {
    insertToInput: function(character) {
        var input = document.getElementById("sigfig_input"),
            currInputVal = input.value,
            toAppend = "1234567890+-x/(.)";

        if (toAppend.indexOf(character) >= 0) {
            input.value = currInputVal + character;
        } else if (character == "Del") {
            input.value = currInputVal.substring(0, currInputVal.length - 1);
        } else if (character == "C") {
            input.value = "";
        } else {
            console.log("Something went wrong.\nKey hit: " + character);
        }

        return 0;
    },

    equals: function() {
        var input = document.getElementById("sigfig_input");
        input.innerHTML = eval(input.innerHTML);
    },

    initKeypad: function() {
        var keys = [
            "=", "Del", "C", "br",
            "7", "8", "9", "+", "br",
            "4", "5", "6", "-", "br",
            "1", "2", "3", "x", "br",
            "(", ")", ".", "/", "br"
        ];

        for (var i in keys) {
            var button = document.createElement("button");
            if (keys[i] == "br") {
                button = document.createElement("br");
            } else if (keys[i] != "=") {
                button.innerHTML = keys[i];
                button.className = "insert_key";
            } else if (keys[i] == "=") {
                button.innerHTML = keys[i];
                button.className = "equals_key";
            }

            document.getElementById("keypad").appendChild(button);
        }

        return 0;
    }
};
