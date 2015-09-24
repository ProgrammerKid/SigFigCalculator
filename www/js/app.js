var app = {
    insertToInput: function(character) {
        var input = document.getElementById("sigfig_input"),
            currInputVal = input.value,
            toAppend = "1234567890+-x/(.)";
        if (toAppend.indexOf(character) >= 0) {
            input.innerHTML = currInputVal + character;
        } else if (character == "Del") {
            input.innerHTML = currInputVal.substring(0, currInputVal.length - 1);
        } else if (character == "C") {
            input.innerHTML = "";
        } else {
            alert("Something went wrong.\nKey hit: " + character);
        }

        return 0;
    },

    equals: function() {
        try {
            var input = document.getElementById("sigfig_input");
            input.innerHTML = eval(input.innerHTML);
        } catch (TypeError) {
            return eval(input.innerHTML);
        } finally {
            return 0;
        }
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

            } else if (keys[i] == "=") {
                button.innerHTML = keys[i];
            }

            document.getElementById("keypad").appendChild(button);

        }

        return 0;
    }
};
