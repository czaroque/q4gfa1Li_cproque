function redFunction(element) {
    if (element.value.trim() === '') {
        element.style.borderColor = "red";
    } else {
        element.style.borderColor = "green";
    }
}

function greenFunction(element) {
    element.style.borderColor = "green";
}

function iFunction (){
    var name = document.getElementById("name").value;
    var usern = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
    var age = document.getElementById("userAge").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var uint = document.getElementById("userInterest").value;

    var br = "<br>";
    document.getElementById("displayData").innerHTML = "Name: " + name + br + "Preferred Username: " + usern + br +"Password: " + pass + br +"Age: " + age + br +"Gender: " + gender + br +"Email Address: " + email + br +"Address: " + address + br +"Interests: " + interests;

    return false;
}
function reset() {
    document.getElementById("output").innerHTML = '';
    var inputE = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");

    for (var i = 0; i < inputE.length; i++) {
        inputE[i].removeAttribute('style');
    }

    for (var i = 0; i < textarea.length; i++) {
        textarea[i].removeAttribute('style');
    }

    return false; 
}

