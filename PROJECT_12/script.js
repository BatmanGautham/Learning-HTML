function Bclick(val) {
    let screen = document.getElementById("screen");
    
    if (val === "CLR") {
        screen.value = "";
    } else if (val === "=") {
        try {
            screen.value = eval(screen.value);
        } catch (e) {
            screen.value = "Error";
        }
    } else {
        screen.value += val;
    }
}