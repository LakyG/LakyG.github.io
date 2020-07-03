function check1() {
    var x, text;

    x = document.getElementById("inClue1").value;

    if (x != "1989") {
        text = "Wrong!";
    }
    document.getElementById("demo").innerHTML = text;
}